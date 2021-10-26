import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './loginpage/loginpage.component';
import { SignUppageComponent } from './sign-uppage/sign-uppage.component';
import { EmailComponent } from './email/email.component';
import { ProfileComponent } from './profile/profile.component';
import { ListaCosasComponent } from './components/lista-cosas/lista-cosas.component';
import { NuevaCosaComponent } from './components/nueva-cosa/nueva-cosa.component';
import { NavbarComponent } from './components/navbar/navbar.component';
// Copy the firebaseConfig from your created project on the firebase console. Here, click on the
//project name and then on the project dashboard, click on Add firebase to your web app.
//Replace the values below with yours, values below will not work for you because I have removed some
//characters from it.
const firebaseConfig = {
  apiKey: "AIzaSyAonLB8FWn6IWXKHYjHMlVr32yUYxgkoIo",
  authDomain: "gec-kani.firebaseapp.com",
  projectId: "gec-kani",
  storageBucket: "gec-kani.appspot.com",
  messagingSenderId: "543014582806",
  appId: "1:543014582806:web:8f26cb708d4615a7da1337"
};
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    SignUppageComponent,
    EmailComponent,
    EmailComponent,
    ProfileComponent,
    ListaCosasComponent,
    NuevaCosaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
