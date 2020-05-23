import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
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
   minDate = new Date();
   maxDate = new Date(2021, 0, 1);
   AppoForm: FormGroup;
   //hour:any;
  //  name=new FormControl();
  //  email=new FormControl();
  //  date=new FormControl();
  //  hour=new FormControl();

  constructor(
    private formBuilder: FormBuilder,
    public http: HttpClient, private apiService: ApicallService
  ) 
  { 
  }

  ngOnInit(): void {
    //workingGood:
     this.AppoForm = this.formBuilder.group({
      'name': [this.inputAppo.name, [
        Validators.required,
        Validators.pattern('[a-zA-Z]*'),
      ]],
      'email': [this.inputAppo.email, [
        Validators.email,
      ]],
      'date': [this.inputAppo.date, [
        Validators.required,
      ]],
      'hour': [this.inputAppo.hour, [
        Validators.required,
      ]],
      'phoneNumber': [this.inputAppo.phoneNumber, [
        Validators.required,
        Validators.pattern('[0-9]*'),
        Validators.minLength(11),
        Validators.maxLength(11),
      ]]
     });
  }
  onAppoFormSubmit()
  {
    //alert("day: "+this.inputAppo.date.getDate()+"month: "+this.inputAppo.date.getMonth()+"year: "+this.inputAppo.date.getFullYear());
    // alert("date: "+this.inputAppo.date+"H :  "+this.inputAppo.date+"TT : "+(this.inputAppo.date));
   alert(this.inputAppo.name+" "+this.inputAppo.date+" "+this.inputAppo.email+" "+this.inputAppo.phoneNumber+" "+this.inputAppo.hour);// out:String
    (this.inputAppo.date).setHours(12,0,0);
    if(!this.inputAppo.email)
    {
    this.inputAppo.email="NA@NA.com";
    }
    //this.inputAppo.phoneNumber="01220490123"
    //this.inputAppo.hour=this.hour;
    this.apiService.addAppo(this.inputAppo).subscribe((res)=>{
    });
  }
}
