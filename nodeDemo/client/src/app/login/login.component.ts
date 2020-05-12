import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import {Globals} from '../services/globals'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: LoginModel = new LoginModel();
  loginForm: FormGroup;
  hide = true;
private loginstate:boolean;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private globals: Globals) { 
      this.loginstate = globals.loginstate;
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': [this.user.email, [
        Validators.required,
        Validators.email
      ]],
      'password': [this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ]]
    });
  }
  onLoginSubmit() {
    // alert(this.user.email + ' ' + this.user.password);
    this.authService.authenticateUser(this.user)
    .subscribe(data => {
      if (data.success) { 
        this.globals.loginstate=true;
        this.loginstate=true;
        this.router.navigate(['/register']);
      } else {
        console.log('Failed');
      }
    });
  }

}
