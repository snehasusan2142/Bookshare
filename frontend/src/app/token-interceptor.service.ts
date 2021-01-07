import { Injectable, Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthService} from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private injector:Injector) { }
  intercept(req,nxt){
let authservice=this.injector.get(AuthService);
let toknreq=req.clone({
  setHeader:{
    Authorization:`Bearer ${authservice.gettoken()}`
  }
});
return nxt.handle(toknreq)
  }
}
