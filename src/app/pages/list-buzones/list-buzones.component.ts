import { Component, OnInit } from '@angular/core';
import { USER_ID } from 'src/app/config/config';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-list-buzones',
  templateUrl: './list-buzones.component.html',
  styleUrls: ['./list-buzones.component.css']
})
export class ListBuzonesComponent implements OnInit {

  user_id = USER_ID
  buzones:any[] = [];
  filterPost = '';
  constructor( private userService:UserService) { 

    this.userService.getBuzonesMysql().subscribe((resp:any)=>{
      this.buzones = resp;

      
      
    })
  }

  ngOnInit(): void {

  }

}
