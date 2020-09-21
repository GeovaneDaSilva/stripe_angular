import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute,  Router } from '@angular/router';
import { PackagesService } from 'src/app/services/packages.service';
import { packageModel } from 'src/app/models/package';
// IMPORT
import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { StripeService, StripeCardComponent } from 'ngx-stripe';
import {
  StripeCardElementOptions,
  StripeElementsOptions
} from '@stripe/stripe-js';
import { StripePayService } from 'src/app/services/stripePay.service';
import { stripeModel } from 'src/app/models/stripe';
import { UserService } from 'src/app/services/user.service';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';
////
@Component({
  selector: 'app-payment-checkout-detail',
  templateUrl: './payment-checkout-detail.component.html',
  styleUrls: ['./payment-checkout-detail.component.css']
})
export class PaymentCheckoutDetailComponent implements OnInit {
  
  
  @ViewChild(StripeCardComponent) card: StripeCardComponent;
 
  cardOptions: StripeCardElementOptions = {
    style: {
      base: {
        iconColor: '#666EE8',
        color: '#31325F',
        fontWeight: '300',
        fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
        fontSize: '18px',
        '::placeholder': {
          color: '#CFD7E0'
        }
      }
    }
  };
 
  elementsOptions: StripeElementsOptions = {
    locale: 'es'
  };
 
  stripeTest: FormGroup;

  package = new packageModel();
  pay: boolean = false
  stripe = new stripeModel();
  token: string;

  stp = new stripeModel();
  urlPayment: string;
  id:string
  user:any = [];
  n_buzon:number
  create_date;
  status_payment;

  printFactura:boolean = false

  constructor(private fb: FormBuilder,
    private stripeService: StripeService,
    //private packagesService: PackagesService,
    private stripePay: StripePayService,
    private packageService: PackagesService,
    private router: ActivatedRoute, public route: Router ) { }




  ngOnInit(): void {

    this.stripeTest = this.fb.group({
      name: ['', [Validators.required]]
    });

    this.id = this.router.snapshot.paramMap.get("id")
    this.packageService.getOnePackage(this.id).subscribe((resp:any)=>{
      
      
      this.package = resp.package
      this.user = this.package.user
      
      this.status_payment = this.package.status

      this.n_buzon = this.user.n_buzon
      return this.package
      
      
      

      
      
    })

  }

  async createToken() {
    const name = this.stripeTest.get('name').value;
    this.stripeService
      .createToken(this.card.element, { name })
      .subscribe(async (result) => {
        if (result.token) {
          // Use the token
          console.log(result.token.id);
          
          this.pay = true;
          
          this.stripe.source = result.token.id
          this.stripe.description = this.package.description
          this.stripe.amount = this.package.price

          
          // Send other model package
          let price = this.package.price
          let description = this.package.description
          let package_id = this.package._id
          console.log('New Price', price);
          console.log('description', description);

          
          

          // MANDAR OS OUTROS PARAMETROS NO BACKEND
          
          await this.stripePay.postPayment(package_id,this.stripe).subscribe((res:any) => {
            this.urlPayment = res.charge.receipt_url
            console.log(this.urlPayment);
            console.log('Soy un new Stripe',this.stripe)
            window.open(this.urlPayment)
            window.location.reload()  
           // this.route.navigate(['/payment-stripe']);
          });
          

        } else if (result.error) {
          // Error creating the token
          console.log(result.error.message);
        }


      });
  }

  
  print(){
    this.printFactura = true
    window.print()
  }


}
