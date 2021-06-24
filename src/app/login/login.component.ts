import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  userid = '1';
  ngOnInit(): void {
    localStorage.setItem('session', this.userid)
    
  }

}
