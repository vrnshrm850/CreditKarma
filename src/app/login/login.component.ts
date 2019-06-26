import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {AuthService} from '../auth.service';
import {ApiService} from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginData: any = {email: '', password: ''}
  constructor(private _router: Router, public apiService: ApiService, private authService:AuthService) { }

  ngOnInit() {
  }
  login(){
    this.authService.userLogin(this.loginData).subscribe(res => {
     if (res !== null && res !== undefined && res.token !== undefined ){
       localStorage.setItem('token', res.token);
     }
      });
  }
}
