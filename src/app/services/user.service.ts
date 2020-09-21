import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TOKEN, URL_SERVICES, USER_ID } from '../config/config';
import { UserModel } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlMysql_ = 'https://sendtopuertorico.com/registros-de-usuarios/api-buzones/getData.php'
  url = URL_SERVICES
  token = TOKEN;
  user_id = USER_ID;


  constructor( private http:HttpClient) { 
    console.log('user services');

    
  }
  autenticationGuard(){
    return (this.token ) ? true : false;
  }

  getBuzones(){

    const headers = new HttpHeaders({
      "token": this.token
    });

    return this.http.get(`${this.url}/buzones`, {headers})

  }
  getBuzonesMysql(){



    return this.http.get(`${this.urlMysql_}`, )

  }

  getUsers(){
    const headers = new HttpHeaders({
      "token": this.token
    });

    return this.http.get(`${this.url}/user/${this.user_id}`, {headers})

  }

  getOneUserPackages(){
    const headers = new HttpHeaders({
      "token": this.token
    });

    return this.http.get(`${this.url}/user/${this.user_id}/packages`, {headers});
  }


  updateUser(user: UserModel){
    const headers = new HttpHeaders({
      "token": this.token
    });
    
    return this.http.put(`${this.url}/user/` +this.user_id, user, {headers})

  }

  registerUser(user: UserModel){

    return this.http.post( `${this.url}/register`, user);
  }
}
