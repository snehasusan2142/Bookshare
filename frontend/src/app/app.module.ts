import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import {FormsModule,ReactiveFormsModule}   from '@angular/forms';
import { BooksComponent } from './books/books.component';
import { AuthorsComponent } from './authors/authors.component';

import {HttpClientModule,HTTP_INTERCEPTORS} from "@angular/common/http";
import { BookindividualComponent } from './bookindividual/bookindividual.component';
import { AuthorindividualComponent } from './authorindividual/authorindividual.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UsererrorComponent } from './usererror/usererror.component'

import {AuthService} from './auth.service'
import {BooksService} from './books.service'

import {TokenInterceptorService} from './token-interceptor.service'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    BooksComponent,
    AuthorsComponent,
    BookindividualComponent,
    AuthorindividualComponent,
    AddbookComponent,
    AddauthorComponent,
    UpdatebookComponent,
    UpdateauthorComponent,
    SignupComponent,
    LoginComponent,
    UsererrorComponent],
  imports: [
    BrowserModule,BrowserAnimationsModule,
    AppRoutingModule,MaterialModule,FormsModule,HttpClientModule,ReactiveFormsModule  ],
  providers: [BooksService,AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
