import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICES, TOKEN, USER_ID } from '../config/config';
import { stripeModel } from '../models/stripe';

@Injectable({
  providedIn: 'root'
})
export class StripePayService {

  url = URL_SERVICES
  token = TOKEN;
  user_id = USER_ID;


  constructor(private http: HttpClient) {
}
  


  // Here you can post package with ID
  postPayment(package_id:string,  stripe: stripeModel) {

    const headers = new HttpHeaders({
      "token": this.token
    });
    
    return this.http.post(`${this.url}/payment/${this.user_id}/`+package_id, stripe, {headers})

  }

  
  getFactura(){

    
  }

}
