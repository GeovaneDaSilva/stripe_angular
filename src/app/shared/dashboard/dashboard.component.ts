import { Component, Input, OnInit } from '@angular/core';
import { USER_ID } from 'src/app/config/config';
import { PackagesService } from 'src/app/services/packages.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})


export class DashboardComponent implements OnInit {

  user_id_storage = USER_ID
  showPackages:boolean;

  paquetes:any []=[];
  awaitPaquete:any [] =[];
  allInfo = []
  totalPaquetes:number;
  

  constructor(private userService:UserService,  private packagesService: PackagesService) {


    this.packagesService.getAlertPackages().subscribe((resp:any) =>{
      this.awaitPaquete = resp.packages;      
      console.log('soy paquetes', this.awaitPaquete);
  
      this.showPackages = false; 
  
      for(let i=0;i<this.awaitPaquete.length;i++){
        this.awaitPaquete[i].user_id
  
  
        let id = this.awaitPaquete[i].user._id
  
        if(id == this.user_id_storage){
  
          this.paquetes = resp.packages[i];
  
          this.allInfo.push(this.paquetes) 
  
          this.totalPaquetes = this.allInfo.length;
          
               
        } 
  
      }
      
      
      })

    
   }

  buzones:any[] = [];

  ngOnInit(): void {
    this.userService.getBuzonesMysql().subscribe((resp:any)=>{
      this.buzones = resp.length

      console.log(this.buzones);

      
      
    })
  }


  

}