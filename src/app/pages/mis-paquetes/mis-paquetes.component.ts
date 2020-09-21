import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-mis-paquetes',
  templateUrl: './mis-paquetes.component.html',
  styleUrls: ['./mis-paquetes.component.css']
})
export class MisPaquetesComponent implements OnInit {

  
  constructor( private packagesService: PackagesService, private _router: ActivatedRoute, private router: Router,) { 

  }
  counterPackages:number;

  ngOnInit(): void {

  }

  //this is funccion is relationship table user and packages


}
