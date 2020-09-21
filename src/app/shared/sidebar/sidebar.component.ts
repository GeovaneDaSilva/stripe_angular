import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor( private router: Router, private userService: UserService) { }

  user = new UserModel();

  ngOnInit(): void {

    this.userService.getUsers().subscribe( (resp:any)=>{
      
      this.user = resp.user
      
      
    })

  }

}
