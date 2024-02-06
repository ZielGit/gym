import { Component } from '@angular/core';
import { AuthServiceService } from 'src/app/services/auth.service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthServiceService) {

  }

  logIn(email: string, password: string) {
    this.authService.logInWithEmailAndPassword(email, password);
  }
}
