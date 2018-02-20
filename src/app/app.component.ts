import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fleet Management System';
  isAuthenticated = false;
  constructor(private authService: AuthService) {
    this.isAuthenticated = this.authService.isAuthenticated();
    console.log('Authenticated user', this.isAuthenticated);
  }

  // signIn() {
  //   this.authService.signIn().subscribe(
  //     res => console.log('Login success', res),
  //     err => console.warn('Exception', err)
  //   );
  // }
}
