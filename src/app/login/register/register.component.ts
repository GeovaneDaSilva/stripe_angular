import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  alert: boolean;

  constructor( private userService:UserService) { }

  ngOnInit(): void {
  }


  user = new UserModel();

  userOk:any = [];
  confirmPass = false;


  saveUser( user:UserModel  ){
    
    console.log(user);
    if(user.email){
      console.log('existe esse email');
      
    }

    if(user.confirmPassrowd == user.password){

      this.userService.registerUser(this.user).subscribe((resp:any) =>{

        console.log(user.confirmPassrowd);
        
        console.log(resp);
  
        this.userOk = resp.user
        this.userOk.n_buzon
  
        console.log(this.userOk.n_buzon);
        
        this.alert = true;
  
        this.clearUser();
  
      }, (error ) => {
        console.log(error);
        console.log('aqui esta el error');
        this.alert = false;
    
      })
    } else {
      console.log('es diferente', user.confirmPassrowd);
     return this.confirmPass = true;
      
    }

    

  }


  clearUser(){

    this.user = new UserModel();
  
  }
}
