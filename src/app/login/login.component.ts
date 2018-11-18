import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ListingService } from '../services/listing.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  constructor( public loginservice: ListingService,private router: Router) {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
   }

  ngOnInit() {
  }

  loginAction(){
    this.loginservice.login(this.loginForm.value).subscribe(
      res => res ? this.router.navigate(['/list']): ''      
      );
  }

}
