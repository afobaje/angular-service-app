import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  show:boolean=false;
  auth: any;
  constructor(authService: AuthService) {
    this.auth = authService
    
  }

  ngOnInit(): void {
  }

  signInWithGoogle() {
    this.auth.AuthUserWithGoogle()
    console.log('called me')
  }
  signInWithEmail(email: HTMLInputElement, password: HTMLInputElement) {
    let emailValue = email.value;
    let passwordValue = password.value;
    console.log(emailValue,passwordValue)
    this.auth.AuthUserWithEmail(emailValue, passwordValue)
    email.value=''
    password.value=''
  }

  showValue(){
    this.show=!this.show;
  }

}
