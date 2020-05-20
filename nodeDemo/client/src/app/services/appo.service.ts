import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppointmentsComponent } from '../appointments/appointments.component';

@NgModule({
  declarations: [AppointmentsComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppointmentsComponent
  ]
})
export class AppoServiceModule { }