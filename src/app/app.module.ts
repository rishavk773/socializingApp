import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import * as firebase from 'firebase/app';
import 'firebase/auth';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { MyblogsComponent } from './myblogs/myblogs.component';
import { ProfileComponent } from './profile/profile.component';
import { CreateComponent } from './create/create.component';
import { NgxEditorModule } from 'ngx-editor';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './view/view.component';
import { CommentsComponent } from './comments/comments.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

let config = {
  apiKey: "AIzaSyC16RhcNIUuTzd5w4mEvcH2Hf8D7Sn28GQ",
  authDomain: "scribe-dcb6a.firebaseapp.com",
  databaseURL: "https://scribe-dcb6a.firebaseio.com",
  projectId: "scribe-dcb6a",
  storageBucket: "scribe-dcb6a.appspot.com",
  messagingSenderId: "349053057107"
};
firebase.initializeApp(config);

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    CapitalizePipe,
    MyblogsComponent,
    ProfileComponent,
    CreateComponent,
    PostComponent,
    ViewComponent,
    CommentsComponent,
    EditProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { } 
