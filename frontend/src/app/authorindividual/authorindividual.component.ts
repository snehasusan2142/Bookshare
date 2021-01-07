import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';
import {AuthorsModel} from '../authors/author.model';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-authorindividual',
  templateUrl: './authorindividual.component.html',
  styleUrls: ['./authorindividual.component.css']
})
export class AuthorindividualComponent implements OnInit {

  id: String ='';
  auth= new AuthorsModel(null,null,null,null);
  message = '';
  constructor(public _auth:AuthService,private bookservice:BooksService ,private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.id=this.route.snapshot.params.id;
    this.bookservice.getAuthor(this.id).subscribe((data)=>{
      this.auth=JSON.parse(JSON.stringify(data));
    })
  }
  
  dodelete(){
    if(confirm('Are you sure to delete this content ?') == true)
    {
      console.log("im in dodelete"+this.id);
    this.bookservice.deleteauthor(this.id)

    this.router.navigate(['/authors']);}
  }
   

  doupdate(){
    if(confirm('Are you sure to update this content ?') == true)
    {
      console.log("im in update"+this.id);
      this.router.navigate(['/author/update/'+this.id]);
    
    }

  }
}
