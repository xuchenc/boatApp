var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  body: { type: String },
  review:{type:mongoose.Schema.Types.ObjectId, ref:'Review'}
  // rating: { type: String }
});

mongoose.model('Comment', CommentSchema);
