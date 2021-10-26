import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import * as firebase from 'firebase/app';
//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/operator/switchMap';
import { AuthProvider, GoogleAuthProvider } from "firebase/auth";
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) {}

  login(email: string, password: string) {
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then((value: any) => {
      console.log('Nice, it worked!');
      this.router.navigateByUrl('/lista-cosas');
    })
    .catch((err: { message: any; }) => {
      console.log('Something went wrong: ', err.message);
    });
  }

  emailSignup(email: string, password: string) {
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then((value: any) => {
     console.log('Sucess', value);
     this.router.navigateByUrl('/lista-cosas');
    })
    .catch((error: any) => {
      console.log('Something went wrong: ', error);
    });
  }

  googleLogin() {
    const provider = new GoogleAuthProvider();
    return this.oAuthLogin(provider)
      .then((value: any) => {
     console.log('Sucess', value),
     this.router.navigateByUrl('/lista-cosas');
   })
    .catch((error: any) => {
      console.log('Something went wrong: ', error);
    });
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  private oAuthLogin(provider: GoogleAuthProvider) {
    return this.afAuth.signInWithPopup(provider);
  }
}
