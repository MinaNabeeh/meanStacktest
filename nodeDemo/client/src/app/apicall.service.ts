import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppoModel } from './models/appointment.model';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private httpClient: HttpClient) {}

  addAppo(appo: AppoModel) {
    return this.httpClient.post(`/appointments/addappointment`,appo).
        pipe(
           map((data: any) => {
             return data;
           }), catchError( error => {
             return throwError( 'Something went wrong!' );
           })
        )
    }
}