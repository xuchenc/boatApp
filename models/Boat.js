var mongoose = require('mongoose');

var BoatSchema = new mongoose.Schema({
  image:String ,
  capaticy: String,
  price: String,
  contact:String,
  ownerImage:String,
  ownerName:String,
  location:String,
  email:String,
  comments:[{type: mongoose.Schema.Types.ObjectId, ref: "Comment"}]
});


mongoose.model('Boat', BoatSchema);
