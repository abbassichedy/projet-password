const router =express.Router()
const express=require('express')
const {check,validationResult}=require('express-validator/check')
const password=require('../../Middleware/passport')
const Userclient=require('../../models/userclient')
const Userworker =require('../../models/userworker')
const user=require('../../models/user')


router.post('/',[password,[ check('text','text is required')
.not().isEmpty()]],(req,res)=>{
    const errors=validationResult(req)
   if(!errors.isEmpty()){
       return res.status(400).json({errors:errors.array()})
   }
   try{
   const user=await User.findById(req.user.id).select('-password')
   const newuserclient= new userclient({
       text:req.body.text,
       name:user.name,
       user:req.user.id
   })
   const userclient=await newuserclient.save()
   res.json(err.message)
}catch(err){
    console.error(err.message)
    res.status(500).send('server error')
}

})
router.get('/:id',password,async(r