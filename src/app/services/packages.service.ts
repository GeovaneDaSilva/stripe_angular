import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TOKEN, URL_SERVICES } from '../config/config';
import { packageModel } from '../models/package';

@Injectable({
  providedIn: 'root'
})
export class PackagesService {

  url = URL_SERVICES
  token = TOKEN
  paquete = new packageModel();

  constructor( private http:HttpClient ) { 
    console.log('ok true');
    
  }

  getOnePackage(id:string) {
    
    const headers = new HttpHeaders({
      'token': this.token
    });

    return this.http.get(` ${this.url }/package/` + id,  {
      headers
    })

  }

  createAlertPackage( paquete: packageModel){
    const headers = new HttpHeaders({
      "token": this.token
    });

    return this.http.post(`${this.url}/package/`, paquete,  {
      headers
    })

  }

  EditAlertPackage(id:string, paquete: packageModel){
    const headers = new HttpHeaders({
      "token": this.token
    });

    return this.http.put(`${this.url}/package/` + id,  paquete, {
      headers
    })

  }

  deleteAlertPackage(id:string){
    const headers = new HttpHeaders({
      "token": this.token
    });

    return this.http.delete(`${this.url}/package/` + id, {
      headers
    })

  }

  getAlertPackages (){
    const headers = new HttpHeaders({
      "token": this.token
    });

    return this.http.get(`${this.url}/packages/`, {
      headers
    })


  }

}
