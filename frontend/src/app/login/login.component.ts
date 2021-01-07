import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import {AuthService} from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import {UserModel} from '../login/userdata.model'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 
  registerForm: FormGroup;
    submitted = false;
    hide = true;
    hide1=true;
    id: String ='';
    user= new UserModel(null,null,null,null);
    constructor(private formBuilder: FormBuilder,private authservice:AuthService ,private route: ActivatedRoute,
      private router: Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
          email: ['', [Validators.required, Validators.email,Validators.pattern(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm)]],
          password: ['', [Validators.required,  Validators.minLength(6)]]
        });
    }
    get f() { return this.registerForm.controls; }
    
    onSubmit() 
    {
        this.submitted = true;
        console.log(this.user)
      this.authservice.signin(this.user).subscribe(res=>{
          console.log(JSON.parse(JSON.stringify(res)).msg)
          if((JSON.parse(JSON.stringify(res)).msg)==="success"){
           
            console.log("im in if success of login")
            localStorage.setItem('token',res.token)
            if (this.user.email=="admin@gmail.com"&&this.user.password=="Admin@123"){
            localStorage.setItem('token_admin',res.token_admin)
          }
            console.log("in logincomponent.ts "+res.token)
            this.router.navigate(['/'])

            
               
                }
            
          else{
                console.log("Im in else statement of login")
                 alert(JSON.parse(JSON.stringify(res)).msg)
                  this.router.navigate(['/signup'])
               }
         })
      }
}

