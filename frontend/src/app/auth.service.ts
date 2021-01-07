import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  //signup
signup(item){
  return this.http.post("http://localhost:3000/signup",{"item":item})
 
}


//sigin aka login
signin(item:any){
  return this.http.post<any>("http://localhost:3000/login",{"item":item})

  
}
gettoken(){
  return localStorage.getItem('token')
}

loggedin(){
  return !!localStorage.getItem('token')
}

loggedin1(){
  if(localStorage.getItem('token')==localStorage.getItem('token_admin')){
    return true;
  }
  else{
    return false;
  }
}

}
