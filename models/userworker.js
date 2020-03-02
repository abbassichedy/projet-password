const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const UserworkerSchema = new Schema({
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
  metier:{
    type: String,
    required: true
  },
  adresse: {
    type: String,
    required: true
  },
  tel: {
    type: String,
    required: true
  },
  prix:{
    type: String,
    required: true
  },
  
 
  description:{
      type:String

  }



  
});

module.exports = Userworker = mongoose.model("userworker", UserworkerSchema);
