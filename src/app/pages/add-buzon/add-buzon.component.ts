import { Component, OnInit } from '@angular/core';
import { BuzonModel } from 'src/app/models/buzon';
import { BuzonService } from 'src/app/services/buzon.service';



@Component({
  selector: 'app-add-buzon',
  templateUrl: './add-buzon.component.html',
  styleUrls: ['./add-buzon.component.css']
})
export class AddBuzonComponent implements OnInit {

  alert: boolean;

  buzon = new BuzonModel();
  constructor( private buzonService:BuzonService) { 
    
  }

  ngOnInit(): void {

    this.buzonService.getBuzones().subscribe(resp => {
      
    })
    

  }

  buzonOk:any = [];
  saveBuzon( buzon:BuzonModel  ){

    

    if(buzon.email){
      
    }

  this.buzonService.postBuzon(this.buzon).subscribe( (resp:any,) =>{
    this.buzonOk = resp.buzon
    this.buzonOk.n_buzon
    this.alert = true;

    this.clearBuzon();
      // alert
     // window.location.reload();
  }, (error ) => {
    this.alert = false;
    error

  });
  

}

  
clearBuzon(){

  this.buzon = new BuzonModel();

}

}
