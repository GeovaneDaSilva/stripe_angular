import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { StripeCardComponent } from 'ngx-stripe';

import { packageModel } from 'src/app/models/package';
import { stripeModel } from 'src/app/models/stripe';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
  
export class PaymentComponent implements OnInit {

  @ViewChild(StripeCardComponent) card: StripeCardComponent;
 

  package = new packageModel();
  packages: {};//OBS
  userPackages: [];
  pay: boolean = false
  stripe = new stripeModel();
  token: string;

  stp = new stripeModel();
  urlPayment: string;

  total;

  
  constructor(private userService: UserService) { 
       
      this.userService.getOneUserPackages().subscribe( (resp:any)=>{

        this.userPackages = resp.packages
        console.log(resp.packages);

        this.userPackages
      
        let paquetes = []
        

         paquetes  = this.userPackages
      
          
         paquetes.forEach((newPaquete, index, allPackages)=> {
           
          allPackages[index] = newPaquete;
          this.total = paquetes

      });
      
      console.log('todos los paquetes de ese usuario', this.total );

      
      return this.total


      })

      
    
   /* this.packagesService.getAlertPackages().subscribe((response:any) => {

      this.packages = response.packages
      //let paquetes:any = this.packages;
      
      console.log(this.packages);
      
      
      for (let i = 0; i < paquetes.length; i++) {

        let amount = paquetes[i].price
        let description = paquetes[i].description

        this.stripe.amount = amount
        this.stripe.description = description
        
        console.log(this.stripe);

        return this.stripe
        



    })}*/
    
    }
 
  ngOnInit(): void {

  }



  

  /*
  async postPackage(stp) {

      this.stripePay.postPayment(stp).subscribe(resp => {
      console.log(resp);
      
      return console.log('exportado com sucesso', this.token);
      
        
      })
    
  } */


}

// preciso fazer um async: 1 