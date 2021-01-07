import { Component, OnInit } from '@angular/core';
import {BooksService} from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AuthorsModel} from '../authors/author.model';


@Component({
  selector: 'app-updateauthor',
  templateUrl: './updateauthor.component.html',
  styleUrls: ['./updateauthor.component.css']
})
export class UpdateauthorComponent implements OnInit {

  id: String ='';
  auth= new AuthorsModel(null,null,null,null);
  message = '';
  submitted = false;

  onSubmit() { this.submitted = true; }

  constructor(private bookservice:BooksService ,private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    

    this.id=this.route.snapshot.params.id;
    this.bookservice.getAuthor(this.id).subscribe((data)=>{
      this.auth=JSON.parse(JSON.stringify(data));
    })
  }
  
  newHero() {
    this.auth = new AuthorsModel(null,null,null,null);
  }
  doupdate(){
    this.bookservice.updateauthor(this.id,this.auth);
    alert("Updated Successfully");
    this.router.navigate(['/authors']);

  }
}