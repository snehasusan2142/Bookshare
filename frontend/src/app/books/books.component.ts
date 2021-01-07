import { Component, OnInit } from '@angular/core';
import {BooksModel} from './book.model';
import {BooksService} from '../books.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books:BooksModel[];

  constructor( private bookservice:BooksService) { 

  }

  ngOnInit(): void {

    this.bookservice.getBooks().subscribe((data)=>{
      this.books=JSON.parse(JSON.stringify(data));
    })
  }

}
