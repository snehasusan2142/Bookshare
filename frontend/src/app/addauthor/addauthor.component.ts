import { Component, OnInit } from '@angular/core';
import{Router} from  '@angular/router'
import {BooksService} from '../books.service'
import {AuthorsModel} from '../authors/author.model'

@Component({
  selector: 'app-addauthor',
  templateUrl: './addauthor.component.html',
  styleUrls: ['./addauthor.component.css']
})
export class AddauthorComponent implements OnInit {

  constructor(private bookservice:BooksService, private router:Router) { }
  newauth= new AuthorsModel(null,null,null,null)
  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
    
  }
  newHero() {
    this.newauth = new AuthorsModel(null,null,null,null);
  }
  

  Addbook(){
    this.bookservice.newauthor(this.newauth);
    this.newauth.img=this.newauth.img.replace("C:\\fakepath\\", "");
    
    console.log("in this ts file"+this.newauth.img)
    console.log("called")
    alert("Success")
    this.router.navigate(['/authors']);
  }
}
