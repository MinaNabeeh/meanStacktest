var express = require('express');
var router = express.Router();

var Appo = require('../models/appointments.model');

router.post('/addappointment',(req,res)=>{
    console.log("entering post nawwaw");
let appointment=new Appo({
    name:req.body.name,
    email:req.body.email,
    date:req.body.date,
    phoneNumber:req.body.phoneNumber,
    hour:req.body.hour
});
Appo.addAppo(appointment,(err,result)=>{
    console.log("entering afterpost nawww !!");
    if(err){
        return res.json({success:false,message:err})
    }
    return res.json({success:true,message:result});
});
});

router.post('getalldayAppo',(date,res)=>{
    Appo.getAllDayAppo(date,(err,result)=>{
        if(err){
            return res.json({success: false, message: err});
        }
        return res.json({success: true, message: result});
    });
});

module.exports = router;