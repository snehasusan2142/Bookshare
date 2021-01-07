import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import {BooksService} from '../books.service';
import { ActivatedRoute, Router } from '@angular/router';
import {UserModel} from '../login/userdata.model'
import {AuthService} from '../auth.service';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  registerForm: FormGroup;
    submitted = false;
    hide = true;
    hide1=true;
    id: String ='';
    user= new UserModel(null,null,null,null);
    constructor(private formBuilder: FormBuilder,private bookservice:BooksService ,private authservice:AuthService,private route: ActivatedRoute,
      private router: Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email,Validators.pattern(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm)]],
            password: ['', [Validators.required,  Validators.minLength(6)]],
            phone:['',[Validators.required,Validators.pattern( /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/)]],
            confirmPass: ['', [Validators.required, this.passwordMatcher.bind(this)]],

        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }
    
    private passwordMatcher(control: FormControl): { [s: string]: boolean } {
      if (this.registerForm && (control.value !== this.registerForm.controls.password.value)) {
          return { passwordNotMatch: false };
      }
      return null;
  }
    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        console.log(this.user)
this.authservice.signup(this.user).subscribe(res=>{
 
  console.log("im here sneha");
  if((JSON.parse(JSON.stringify(res)).msg)=="success"){
    console.log("im in if success of signup")
    this.router.navigate(['/']);

  }
  else{
    console.log("Im in else statement of signup")
    alert(JSON.parse(JSON.stringify(res)).msg)
    this.router.navigate(['/signup'])
  }
  
})
        // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    }
}

