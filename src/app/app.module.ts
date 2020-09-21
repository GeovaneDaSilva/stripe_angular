import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Rutas
import { APP_ROUTES } from './app.routes';


import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PageComponent } from './pages/page/page.component';
import { RegisterComponent } from './login/register/register.component';
import { AddBuzonComponent } from './pages/add-buzon/add-buzon.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { ListBuzonesComponent } from './pages/list-buzones/list-buzones.component';
import { FilterPipe } from './pipes/filter.pipe';
import { ImagenPipe } from './pipes/imagen.pipe';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { JumbotronComponent } from './shared/jumbotron/jumbotron.component';
import { DeliveriesComponent } from './pages/deliveries/deliveries.component';
import { PaquetesComponent } from './public/paquetes/paquetes.component';
import { HeaderPComponent } from './public/header-p/header-p.component';
import { SidebarPComponent } from './public/sidebar-p/sidebar-p.component';
import { SearchTrackComponent } from './pages/search-track/search-track.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { AddPackageComponent } from './pages/add-package/add-package.component';
import { UpdatePackageComponent } from './pages/update-package/update-package.component';
import { MisPaquetesComponent } from './pages/mis-paquetes/mis-paquetes.component';
import { PaymentComponent } from './components/payment/payment.component';

import { ReactiveFormsModule } from '@angular/forms';
import { NgxStripeModule } from 'ngx-stripe';
import { StripePayService } from './services/stripePay.service';
import { PaymentCheckoutDetailComponent } from './components/payment-checkout-detail/payment-checkout-detail.component';
import { FormMoneyPipe } from './pipes/form-money.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SidebarComponent,
    PageComponent,
    RegisterComponent,
    AddBuzonComponent,
    DashboardComponent,
    ListBuzonesComponent,
    FilterPipe,
    ImagenPipe,
    PerfilComponent,
    JumbotronComponent,
    DeliveriesComponent,
    PaquetesComponent,
    HeaderPComponent,
    SidebarPComponent,
    SearchTrackComponent,
    PackagesComponent,
    AddPackageComponent,
    UpdatePackageComponent,
    MisPaquetesComponent,
    PaymentComponent,
    PaymentCheckoutDetailComponent,
    FormMoneyPipe,
    

  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStripeModule.forRoot('pk_test_ILxSYSewLdWuQAZot01ObbWh')



  ],
  providers: [
    StripePayService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  NgxStripeModule
}
