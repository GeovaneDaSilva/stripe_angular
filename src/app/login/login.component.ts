import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from '../models/user';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = new UserModel();
  loginStorage: boolean = false;
  loading: boolean = false;

  alert: boolean;

  constructor( public router: Router,
               private loginService:LoginService) { }

  ngOnInit(): void {

    if ( localStorage.getItem('_id')) {

      this.loginStorage = true;
      this.router.navigate(['/dashboard']);

  

    }
  }



  login( f: NgForm){
    if(!this.user.email ){
      console.log('Null', 'Undefind');
      return this.alert = false; 
    }

    if(!this.user.password || null){
      this.alert = false;

      console.log('Null', 'Undefind');
      return this.alert = false; 
    }

    this.loading = true;

    this.loginService.postLogin( this.user ).subscribe((resp:any)=>{



      localStorage.setItem('_id', resp.userDB._id);
      localStorage.setItem('token', resp.token);
      localStorage.setItem('nombre', resp.userDB.nombre);
      localStorage.setItem('img', resp.userDB.img);
      localStorage.setItem('n_buzon', resp.userDB.n_buzon);


      localStorage.setItem('role', resp.userDB.role);

      this.loginStorage = true;

      this.alert = true;

      // alert
      window.location.reload();

    }, (error ) => {
      this.loading = false;
      console.log(error);
      console.log('aqui esta el error');
      this.alert = false;

    });

  }


}
