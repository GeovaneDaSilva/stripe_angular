import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { USER_ID, USER_NOMBRE } from 'src/app/config/config';
import { packageModel } from 'src/app/models/package';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-update-package',
  templateUrl: './update-package.component.html',
  styleUrls: ['./update-package.component.css']
})
export class UpdatePackageComponent implements OnInit {
  paquete = new packageModel();
  paqueteName = USER_NOMBRE;
  alert: boolean;

  ////

  user_id_storage = USER_ID
  showPackages:boolean;

  paquetes:any []=[];
  awaitPaquete:any [] =[];
  allInfo = [];


  delivery = [ { facilidad:'Hato Rey'}, {facilidad:'Gurabo'}, {facilidad:'Delivery'} ]
  optEntrega = [ { status:'Recibido'}, { status:'No He recibido'}, { status:'Cancelado'}]


  constructor( private packagesServices: PackagesService, private router: Router, private _router: ActivatedRoute) { 


    this.paquete.name = this.paqueteName
  }


  ngOnInit(): void {
    
    this.getPaquetes();
    this.getPaquete();

  }
// Validar, se existe um paquete, eu actualizoqz
  savePackage(paquete: packageModel){

      this.getPaquete();
      this._router.params.subscribe(params => {
        const id = params.id;
       this.packagesServices.EditAlertPackage(id, paquete).subscribe(resp =>{
        console.log(resp);
          this.alert = true;
         // this.router.navigate(['/packages'])

          //setTimeout(function(){
            //this.router.navigate(['/packages'])
         // }, 2000);//
        
         this.getPaquetes();


       },(error ) => {
        console.log(error);
        this.alert = false;
  
  
      })
        })

  }



  getPaquetes(){
    this.packagesServices.getAlertPackages().subscribe((resp:any) =>{
      this.awaitPaquete = resp.packages;        
      this.showPackages = false; 
  
      for(let i=0;i<this.awaitPaquete.length;i++){
        this.awaitPaquete[i].user_id
  
  
        let id = this.awaitPaquete[i].user._id
  
        if(id == this.user_id_storage){
  
          this.paquetes = resp.packages[i];
  
          this.allInfo.push(this.paquetes) 
  
          console.log('paquetes dese usuario', this.paquetes);
          
               
        } 
  
      }
      
      
      })
  }

getPaquete(){
  this._router.params.subscribe(params => {
    const id = params.id;
   this.packagesServices.getOnePackage(id).subscribe((resp:any) =>{

    for(let i=0;i<this.awaitPaquete.length;i++){
      this.awaitPaquete[i].user_id


      let id = this.awaitPaquete[i].user._id      

      if(id == this.user_id_storage){

        this.paquetes = resp.packages[i];

        this.allInfo.push(this.paquetes) 

        console.log('Igualzinho', this.paquetes);
        
             
      } 

    }


    console.log('Aqui newwwww', resp, id);
     


   },(error ) => {
    console.log(error);
    this.alert = false;


  })
    })

}
}
