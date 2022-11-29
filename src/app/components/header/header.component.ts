import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
 
  ngOnInit() {
  }
  userName = "";
  onLogin(user: string) {
  this.userName =user;
  }
 
 }