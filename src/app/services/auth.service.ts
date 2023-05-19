import { Injectable, inject } from '@angular/core';
import { Auth, GoogleAuthProvider, User, createUserWithEmailAndPassword, signInWithPopup, user } from '@angular/fire/auth';
import {  Subscription } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  private auth: Auth = inject(Auth);
  provider = new GoogleAuthProvider()
  user$ = user(this.auth);
  userSubscription: Subscription;
  constructor() {
    this.userSubscription = this.user$.subscribe((aUser: User | null) => {
      console.log(aUser)
    })
  }

  AuthUserWithGoogle() {
    signInWithPopup(this.auth, this.provider)
      .then(result => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user
        console.log(user)
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        console.log(error)
      })
  }

  AuthUserWithEmail(email: string, password: any) {
    
    createUserWithEmailAndPassword(this.auth, email, password)
      .then(cred => {
        const user = cred.user;
        console.log(user)
      })
      .catch(err => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode, errorMessage)
      })
  }
}


