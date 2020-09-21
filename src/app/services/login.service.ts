import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { URL_SERVICES } from '../config/config';
import { UserModel } from '../models/user';



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user = new UserModel();

  url = URL_SERVICES;

  constructor( private http: HttpClient) { }


  postLogin( user: UserModel ){

    return this.http.post(`${this.url}/login`, user)
    
  }
}
