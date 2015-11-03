var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Boat = mongoose.model('Boat');
var jwt = require('express-jwt');
var auth = jwt({
  userProperty: 'payload',
  secret: "Secret"
});


router.get('/', function(req,res,next){
  Boat.find({}, function(err,result){
    if(err) return next(err);
    res.send(result);
  });
});

router.get('/:id', function(req,res,next){
  Boat.findOne({_id:req.params.id},function(err,result){
    if(err) return next(err);
    if(!result) return next("Could not find that boat.");
    res.send(result);
  });
});

router.put('/',function(req,res,next){
  var newPost = req.body;
  console.log(req.body);
  console.log(newPost.postId);
  Boat.update({_id:req.body.postId}, newPost, function(err,result){
    if(err) return next(err);
    if(!result) return next({err:"The boat is not found."});
    res.send(result);
  });
});


router.post('/',function(req,res,next){
  var abc = new Boat (req.body);
  abc.save(function(err,result){
    if(err) return next(err);
    console.log(result);
    res.send(result);
  });
});


router.delete('/:id',function(req,res,next){
  console.log(req.params.id,"line39");
  Boat.remove({_id:req.params.id},function(err,result){
    if(err) return next (err);
  //console.log(result);
    res.send();
  });
});

module.exports = router;
