import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListingService {
  restApi : any = 'get-all';
  loginApi : any = 'login';
  registerApi : any = 'register';
  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get(environment.BASE_URL+this.restApi);
  }
  login(params) {
    return this.http.post(environment.BASE_URL+this.loginApi, {email: params.email, password: params.password});
  }
  register(params) {
    return this.http.post(environment.BASE_URL+this.registerApi, 
      { name: params.name, email: params.email, 
        password: params.password, photo: params.photo });
  }
}
