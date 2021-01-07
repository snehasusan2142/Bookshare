import { Component, OnInit } from '@angular/core';
import {BooksModel} from '../books/book.model'
import {BooksService} from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})

export class UpdatebookComponent implements OnInit {
  id: String ='';
  book= new BooksModel(null,null,null,null);
  message = '';
  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(private bookservice:BooksService ,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    

    this.id=this.route.snapshot.params.id;
    this.bookservice.getBook(this.id).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
    })
  }
  
  newHero() {
    this.book = new BooksModel(null,null,null,null);
  }
  doupdate(){
    this.bookservice.updatebook(this.id,this.book);
    alert("Updated Successfully");

    this.router.navigate(['/books']);

  }
}