import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './authors/authors.component';
import {HomeComponent} from './home/home.component';
import {BooksComponent } from './books/books.component';
import{AddbookComponent} from './addbook/addbook.component';
import {AddauthorComponent} from './addauthor/addauthor.component';
import {BookindividualComponent} from './bookindividual/bookindividual.component';
import {AuthorindividualComponent} from './authorindividual/authorindividual.component'
import {UpdatebookComponent} from './updatebook/updatebook.component';
import {UpdateauthorComponent} from './updateauthor/updateauthor.component'
import {SignupComponent} from './signup/signup.component'
import {LoginComponent} from './login/login.component'
import {UsererrorComponent} from './usererror/usererror.component'
import { AuthGuard } from './auth.guard';

const routes: Routes = [{path:"",component:HomeComponent},
{path:"books",component:BooksComponent},
{path:"addbook",canActivate:[AuthGuard],component:AddbookComponent},
{path:"books/:id",component:BookindividualComponent},
{path:"book/update/:id",canActivate:[AuthGuard],component:UpdatebookComponent},

{path:"authors",component:AuthorsComponent},
{path:"addauthor",canActivate:[AuthGuard],component:AddauthorComponent},
{path:"authors/:id",component:AuthorindividualComponent},
{path:"author/update/:id",canActivate:[AuthGuard],component:UpdateauthorComponent},

{path:"signup",component:SignupComponent},
{path:"login",component:LoginComponent},

{path:"usernotfound",component:UsererrorComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
