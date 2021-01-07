import { Component, OnInit } from '@angular/core';
import{Router} from  '@angular/router'
import {BooksService} from '../books.service'
import {BooksModel} from '../books/book.model'

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {

  constructor(private bookservice:BooksService, private router:Router) { }
  newbook= new BooksModel(null,null,null,null)
  submitted = false;

  onSubmit() { this.submitted = true; }

  ngOnInit(): void {
    
  }
  newHero() {
    this.newbook = new BooksModel(null,null,null,null);
  }
  

  Addbook(){
    this.bookservice.newbook(this.newbook);
    this.newbook.img=this.newbook.img.replace("C:\\fakepath\\", "");
    
    console.log("in this ts file"+this.newbook.img)
    console.log("called")
    alert("Success")
    this.router.navigate(['/books']);
  }
}
