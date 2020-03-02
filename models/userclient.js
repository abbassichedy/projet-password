
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserclientSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
   name: {
    type: String,
    required: true,
    unique:true
  },
  email:{
      type:String,
      required:true
  },
  adresse: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
  comments:[{
      user:{
          type:Schema.Types.ObjectId,
          ref:'users'
      },
      text:{
          type:String,
          required:true 
      }


  }],
  date:{
      type:Date,
      default:Date.now
  }
  
 
  



  
});
module.exports = Userclient = mongoose.model("userclient", UserclientSchema);
