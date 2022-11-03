const mongoose = require("mongoose");
const articlesSchema = mongoose.Schema({
    
  category: {
    type:String,
    require:true
},
type: {
    type:String,
    require:true
},
  size: Number,
  color:String,
  quantity:Number,
  price:Number,
  images:[String]
});

module.exports = mongoose.model("articles", articlesSchema);