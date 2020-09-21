import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor( 
    public router: Router ,
     public userService: UserService){

  }


  canActivate() {
    
if( this.userService.autenticationGuard() ){
  console.log('PASO POR EL GUARD');
  return true;

  
} else {
  console.log('bloqueado por el guard');
  this.router.navigate(['/login']);

  return false;

  
}
  }

  }
