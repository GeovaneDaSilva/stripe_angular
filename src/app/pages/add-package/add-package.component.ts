import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { USER_NOMBRE } from 'src/app/config/config';
import { packageModel } from 'src/app/models/package';
import { PackagesService } from 'src/app/services/packages.service';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent implements OnInit {

  paquete = new packageModel();
  paqueteName = USER_NOMBRE;
  alert: boolean;

  delivery = [ { facilidad:'Hato Rey'}, {facilidad:'Gurabo'}, {facilidad:'Delivery'} ]

  constructor( private packagesServices: PackagesService, private router: Router, private _router: ActivatedRoute) { 

    this.paquete.name = this.paqueteName
    console.log(this.paquete.name);
  }


  ngOnInit(): void {

  }
// Validar, se existe um paquete, eu actualizoqz
  savePackage(paquete: packageModel){


      console.log(paquete);
      this.packagesServices.createAlertPackage(this.paquete).subscribe(resp =>{
          console.log(resp);
          this.alert = true;
  
          this.clearPaquete();
  
          this.router.navigate(['/packages'])
  
          setTimeout(function(){
            this.router.navigate(['/packages'])
          }, 2000);//
          
          
      },(error ) => {
        console.log(error);
        this.alert = false;
  
        console.log('aqui esta el error');
  
      })
      

        
    

    
    
  }

  clearPaquete(){
    this.paquete = new packageModel();
  }





}
