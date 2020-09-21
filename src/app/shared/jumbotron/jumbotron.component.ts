import { Component, OnInit } from '@angular/core';
import { USER_BUZON, USER_NOMBRE } from 'src/app/config/config';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  user_name = USER_NOMBRE
  user_n_buzon = USER_BUZON

  constructor() { }

  ngOnInit(): void {
  }

}
