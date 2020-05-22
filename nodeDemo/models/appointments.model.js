var mongoose = require('mongoose');
var appointmentsSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    email: {
        type: String,
    },
    date: {
        type: Date,
        required:true
    },
    phoneNumber:{
        type:String,
        required:true
    },
    hour:{
        type:String,
        required:true
    }
});
appointmentsSchema.index({ date: 1, hour: 1}, { unique: true });
var Appointments = mongoose.model('Appointments', appointmentsSchema);
Appointments.addAppo=function(appointment,callback){
    appointment.save((err,result)=>{
        
        if(err)
        {
            return callback('failed to add',null);
        }
        else
        {
            callback(null,'appo added');
        }
    });
}
Appointments.getAllDayAppo=function(dayDate,callback)
{
    console.log("entering after post nawww");
    // appdatesRet=appointment.find({date: dayDate},(err,AppArray)=>{
        appdatesRet=Appointments.find({date: dayDate},{}).exec(function(err,docs){
            console.log("entering after fimd nawww"+dayDate);
            if(err)
            {
                return callback (err,null);
            }
            else
            {
            callback(null,docs);
           // console.log("after call: "+docs[1].date.getDate());
            }
        });
}
module.exports = Appointments;