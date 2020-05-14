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
        unique: true,
        required:true
    },
    phoneNumber:{
        type:String
    },
    hour:{
        type:String
    }
});

var Appointments = mongoose.model('Appointments', appointmentsSchema);
Appointments.addAppo=function(appointment,callback){
    appointment.save((err,result)=>{
        
        if(err){
            return callback('failed to add',null);
        }
        else{
            callback(null,'appo added');
        }
    });
}

Appointments.getAllDayAppo=function(dayDate,callback){
    appointment.find({date: dayDate},(err,AppArray)=>{
        if(err){
            console.log(err);
            callback('server error');
        }
        else if (AppArray==undefined)
        {
            callback('user not found');
        }
      
    });
}

module.exports = Appointments;