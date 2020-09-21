import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { USER_ID } from 'src/app/config/config';
import { UserModel } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private router: Router, private userService: UserService) { }

  user = new UserModel();

  ngOnInit(): void {


    this.userService.getUsers().subscribe( (resp:any)=>{
      
      this.user = resp.user

      console.log('soy un user', this.user);
      
      
    })

  }


  logOut(){
    console.log('desconectado');

    localStorage.clear();

    this.router.navigate(['/register'])
    
  }



}
