import express from 'express'
import userSchema from '../model/schema'
let router = express.Router();

router.delete('/', (req, res)=>{
   
   userSchema.findOneAndRemove({EmpId:req.body.EmpId}, (err, data)=>{
     if(err){
     	res.send(err)
     }
   else{
   	res.send(data)
   }
   })

});

export default router;