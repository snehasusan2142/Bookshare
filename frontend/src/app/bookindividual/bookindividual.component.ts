import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';
import {BooksModel} from '../books/book.model';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-bookindividual',
  templateUrl: './bookindividual.component.html',
  styleUrls: ['./bookindividual.component.css']
})
export class BookindividualComponent implements OnInit {
  // book:BooksModel[];
  id: String ='';
  book= new BooksModel(null,null,null,null);
  message = '';
  constructor( public auth:AuthService,private bookservice:BooksService ,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.id=this.route.snapshot.params.id;
    this.bookservice.getBook(this.id).subscribe((data)=>{
      this.book=JSON.parse(JSON.stringify(data));
    })
  }
  
  dodelete(){
    if(confirm('Are you sure to delete this product record ?') == true)
    {
      console.log("im in dodelete"+this.id);
    this.bookservice.deletebook(this.id)
      //console.log(response);
    // alert("Deleted Successfully");
    this.router.navigate(['/books']);}
  }
   

  doupdate(){
    if(confirm('Are you sure to update this product record ?') == true)
    {
      console.log("im in update"+this.id);
      this.router.navigate(['/book/update/'+this.id]);
    //  this.book= this.bookservice.getBook(this.id)

      // this.bookservice.updatebook(this.id,thjihi)


    }

  }


    



}
