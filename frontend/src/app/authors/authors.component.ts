import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service'
import {AuthorsModel} from './author.model'
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  authors:AuthorsModel[];

  constructor( private bookservice:BooksService) { 

  }

  ngOnInit(): void {

    this.bookservice.getAuthors().subscribe((data)=>{
      this.authors=JSON.parse(JSON.stringify(data));
      console.log(this.authors)
    })
  }

}