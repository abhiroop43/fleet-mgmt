import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fleet Management System';

  constructor(private authService: AuthService) { }

  signIn() {
    this.authService.signIn().subscribe(
      res => console.log('Login success', res),
      err => console.warn('Exception', err)
    );
  }
}
