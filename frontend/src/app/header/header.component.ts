import { Component, OnInit } from '@angular/core';
// import {MatTabsModule} from '@angular/material/tabs';
import { Router} from '@angular/router';

import {AuthService} from '../auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public auth:AuthService, private route:Router) { }

  ngOnInit(): void {
  }
logout(){
  localStorage.removeItem('token')
  this.route.navigate(['/'])
}
}
