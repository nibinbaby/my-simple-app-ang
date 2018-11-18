import { Component, OnInit } from '@angular/core';
import { ListingService } from '../services/listing.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor( public registerservice: ListingService,private router: Router) { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      photo: new FormControl(''),
    });
  }

  registerAction(){
    this.registerservice.register(this.registerForm.value).subscribe(
      res => res ? this.router.navigate(['/login']): ''
      );
  }

  onSelectFile(event) { // called each time file input changes
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]); // read file as data url

        reader.onload = (event) => { // called once readAsDataURL is completed
          this.registerForm.value.photo = event.target.result;
        }
      }
  }
}
