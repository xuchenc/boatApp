var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Boat = mongoose.model('Boat');
var jwt = require('express-jwt');
var auth = jwt({
  userProperty:'payload',
  secret:'Secret'
});

router.param('postId', function(req, res, next, postId){
  console.log("Router param coment route");
  req.body.postId = postId;
  // Boat.findOne({_id:postId}).populate('comment').exec(function(err,result){
  //   if(err) return next(err);
  //   console.log(result);
  // });
  next();
});

router.get('/',function(req,res,next){
  Comment.find({}, function(err,result){
    if(err) return next(err);
    res.send(result);
  });
});

router.get('/',function(req,res,next){
  console.log(req.params.id);
  Boat.findOne({_id:req.params.id}, function(err,result){
    if(err) return next(err);
    res.send(result);
  });
});

router.delete('/:id', function(req,res,next){
  Comment.remove({_id: req.params.id})
  .exec(function(err, comment){
    console.log(req.params.id, "comments routes req params id");
    if(err) return next (err);
    res.send();
  });
});

router.post('/:postId', auth, function(req,res,next){
  console.log("hey");
  console.log(req.body.postId,"line30");
  var newComment = new Comment({body:req.body.comment});
    newComment.user = req.payload._id;
    newComment.save(function(err,result){
      if(err) return next(err);
      Boat.update({_id: req.body.postId}, {$push: {comments: result._id}},function(err,boat){
        console.log("Boat");
        if(err) {
          console.log(err);
          return res.status(500).send({err: "Error saving boat."});
        }
        if(!boat) return res.status(500).send({err: "No boat found"});
        console.log(boat);
        res.send(boat);
      });
    });
 });









module.exports = router;
