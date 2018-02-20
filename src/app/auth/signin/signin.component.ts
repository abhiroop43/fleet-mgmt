import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { LoginUser } from '../models/login-user';
import { AccessToken } from '../models/access-token';
import * as moment from 'moment';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  frmLogin: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.createForm();
  }

  ngOnInit() { }

  createForm() {
    this.frmLogin = this.fb.group({
      email: ['', Validators.required],
      password: ''
    });
  }

  submitForm() {
    console.log(this.frmLogin);
    if (!this.frmLogin.valid) return false;
    let user = new LoginUser();
    user.email = this.frmLogin.value.email;
    user.password = this.frmLogin.value.password;

    this.authService.signIn(user).subscribe(
      (res) => {
        console.log('sign in success', res);
        var now = moment(new Date());
        var expiryDate = now.add(parseInt(res['expires_in']), 's');
        sessionStorage.setItem('access_token', res['access_token']);
        sessionStorage.setItem('expires_in', res['expires_in']);
        sessionStorage.setItem('expiry_date', expiryDate.toString());
        sessionStorage.setItem('token_type', res['token_type']);
      },
      err => console.log('sign in error', err)
    );
  }

}
