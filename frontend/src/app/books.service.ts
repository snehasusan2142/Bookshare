import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

constructor(private http:HttpClient){  }
//reead
getBooks(){
  return this.http.get("http://localhost:3000/books");
}

getBook(id:any) {
  return this.http.get(`http://localhost:3000/books/${id}`);
  
}
 //add
 newbook(item){
  return this.http.post("http://localhost:3000/addbook",{"item":item})
  .subscribe(data=>{
    console.log(data)
  })
}
//deleter
deletebook(id:any){
  return this.http.delete(`http://localhost:3000/books/${id}`)
  .subscribe(data=>{
    console.log(data)
  });
}
  updatebook(id, item){
    return this.http.put(`http://localhost:3000/book/update/${id}`, item).subscribe(data=>{
      console.log(data)
    });
  }

  
  getAuthor(id:any) {
    return this.http.get(`http://localhost:3000/authors/${id}`);
    
  }
  
  getAuthors(){
    return this.http.get("http://localhost:3000/authors");
  
  }
   //add
   newauthor(item){
    return this.http.post("http://localhost:3000/addauthor",{"item":item})
    .subscribe(data=>{
      console.log(data)
    })
  }
  
  //deleter
  deleteauthor(id:any){
    return this.http.delete(`http://localhost:3000/authors/${id}`)
    .subscribe(data=>{
      console.log(data)
    });
  }
    updateauthor(id, item){
      return this.http.put(`http://localhost:3000/author/update/${id}`, item).subscribe(data=>{
        console.log(data)
      });
    }
  


}

