import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TOKEN, URL_SERVICES, USER_ID } from '../config/config';
import { BuzonModel } from '../models/buzon';

@Injectable({
  providedIn: 'root'
})
export class BuzonService {

  url = URL_SERVICES
  token = TOKEN;
  user_id = USER_ID;

  buzon = new BuzonModel();
  
  constructor( private http: HttpClient) {
    console.log('funcionando buzon');
    
  }


  postBuzon( buzon: BuzonModel ){
    const headers = new HttpHeaders({
      "token": this.token
    });

    return this.http.post(`${this.url}/buzon`, buzon, {headers})
  }

  getBuzones(){

    const headers = new HttpHeaders({
      "token": this.token
    });

    return this.http.get(`${this.url}/buzones`, {headers})

  }
}
