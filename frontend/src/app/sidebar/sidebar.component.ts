import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

import {AuthService} from '../auth.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
opened=true;

  constructor(public auth:AuthService,private rouute:Router) { }

  ngOnInit(): void {
  }

}
