import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import{ Input } from '@angular/core'
import { AppoModel } from '../models/appointment.model';
import {Globals} from '../services/globals';
@Component({
  selector: 'app-appointments',
  templateUrl: './appointments.component.html',
  styleUrls: ['./appointments.component.scss']
})
export class AppointmentsComponent implements OnInit {
   inputAppo:AppoModel=new AppoModel();
   date=new Date;
   minDate = new Date();
   maxDate = new Date(2021, 0, 1);
   AppoForm: FormGroup;
   private formBuilder: FormBuilder;

  constructor() { 
  }

  ngOnInit(): void {
    // this.AppoForm = this.formBuilder.group({
    //   'date': [(this.inputAppo.date), [
    //   ]]
    // });
  }
  onAppoFormSubmit() {
    alert("submit"+this.inputAppo.date);
  }


  // inputAppo.Inpdate=this.date;
}
