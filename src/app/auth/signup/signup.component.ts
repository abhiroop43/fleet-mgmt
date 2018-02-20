import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { RegisterUser } from '../models/register-user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  frmRegister: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.createForm();
  }

  ngOnInit() { }

  createForm() {
    this.frmRegister = this.fb.group({
      email: ['', Validators.required],
      password: '',
      confirmPassword: ''
    });
  }

  submitForm() {
    console.log(this.frmRegister);
    if (!this.frmRegister.valid) return false;

    let registeruserVm = new RegisterUser();
    registeruserVm.email = this.frmRegister.value.email;
    registeruserVm.password = this.frmRegister.value.password;
    registeruserVm.confirmPassword = this.frmRegister.value.confirmPassword;

    this.authService.signUp(registeruserVm).subscribe(
      res => console.log('Signup success', res),
      err => console.log('Signup error', err)
    );
  }

}
