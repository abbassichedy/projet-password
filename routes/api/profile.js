const router=express.Router()
const passport =require('../../Middleware/passport')
const userworker =require('../../models/userworker')
const {check,validationResult}=require('express-validator/check')

router.get('/',passport,async(req,res)=>{
try{
    const userworker=await Userworker.findOne({ user:req.user.id}).populate(
        'user',['name','adress','tel','prix','description','email']
    )  
    if(!userworker){
        return res.status(400).json({msgs:'there is no profile for this userwoker'})
    }
    res.json(userworker )
}catch(err){
    console.error(err.message)
    res.status(400).send("server error")
}
})
router.post('/',[passport,[
    check('name','name is required')
    .not().isEmpty(),
    check('tel', 'tel is required')

]],
async(req,res)=>{
    const errors=validationResult(req)
    if(!erroors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {
        name,
          email,
          metier,
          adresse,
          tel,
          prix,
          description
    }=req.body
    const profileFields={}
    profileFields.user=req.user.id
    if(name) profileFields.name=name
    if(email)profileFields.email=email
    if(adresse)profileFields.adresse=adresse
    if(metier)profileFields.metier=metier
    if(tel)profileFields.tel=tel
    if(prix)profileFields.prix=prix
    if(description)profileFields.description=description
    try{
        let userwoker=await Userworker.findOne({user:req.user.id})
    if(userworker){
        userworker=await Userworker.findOneAndUpdate(
            {user:req.user.id},
            {$set:profileFields},
            {new:true})
            return res.json(userworker)
          
    }
    userworker=new Userworker(profileFields)
    
    }catch(err){
        console.log(err.message)
        res.status(500).send('Server Error')
    }
}


)
router.get('/',async(req,res=>{
    try{
        const userworker= await Userworker.findOne({user:req.params.user._id}).populate('user',['name', 'tel'])
        if(!userworker)   
        return res.status(400).json({msgs:'profile not found'})
        
        res.json(userworker)
    }catch(err){
        console.error(err.message)
        if(err.kind == 'ObjectId')
        res.status(500).send('server Error')
    }
}))


module.exports=router