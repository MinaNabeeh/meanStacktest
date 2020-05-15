var express = require('express');
var router = express.Router();
var Appo = require('../models/appointments.model');
router.post('/addappointment',(req,res)=>{
let appointment=new Appo({
    name:req.body.name,
    email:req.body.email,
    date:req.body.date,
    phoneNumber:req.body.phoneNumber,
    hour:req.body.hour
});
Appo.addAppo(appointment,(err,result)=>{
    if(err){
        return res.json({success:false,message:err})
    }
    return res.json({success:true,message:result});
    });
});
router.get('/getalldayAppo',(date,res)=>{
    console.log("entering post nawww !!");
    Appo.getAllDayAppo(date.body.date,(err,result)=>{
        if(err){
            return res.json({success: false, message: err});
        }
        return res.status(200).json({success: true, data: result});
    });
});
module.exports = router;