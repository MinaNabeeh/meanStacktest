import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{ Input } from '@angular/core'
import { AppoModel } from '../models/appointment.model';
import {Globals} from '../services/globals';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Http, Headers, RequestOptions } from '@angular/http';
import {ApicallService} from '../apicall.service'
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
     inputAppo:AppoModel=new AppoModel();
   //date=new Date;
   minDate = new Date();
   maxDate = new Date(2021, 0, 1);
   AppoForm: FormGroup;
   hourFrom:any;
   hour:any;
  constructor(
    private formBuilder: FormBuilder,
    public http: HttpClient, private apiService: ApicallService
  ) 
  { 
  }

  ngOnInit(): void {
    //workingGood:
     this.AppoForm = this.formBuilder.group({
    //   'date': [this.inputAppo.date, [
    //   ]],
    //   // 'hour': [this.inputAppo.hour, [

    //   // ]]
     });
  }
  onAppoFormSubmit() {

    
    //alert("day: "+this.inputAppo.date.getDate()+"month: "+this.inputAppo.date.getMonth()+"year: "+this.inputAppo.date.getFullYear());
    alert("date: "+this.inputAppo.date+"H :  "+this.inputAppo.date+"TT : "+(this.inputAppo.date));
    alert("out:"+this.hour);
    //this.inputAppo.date=this.date;
    (this.inputAppo.date).setHours(12,0,0);
    this.inputAppo.name="testName";
    this.inputAppo.email="m@g.com";
    this.inputAppo.phoneNumber="01220490123"
    //this.inputAppo.hour="4:19PM";
    this.apiService.addAppo(this.inputAppo).subscribe((res)=>{
    });
  }
  // inputAppo.Inpdate=this.date;
}
