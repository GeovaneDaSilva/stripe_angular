import { RouterModule, Routes } from '@angular/router';

import { PageComponent } from './pages/page/page.component';



import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { DashboardComponent } from './shared/dashboard/dashboard.component';
import { LoginGuard } from './services/login-guard.guard';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { DeliveriesComponent } from './pages/deliveries/deliveries.component';
import { PaquetesComponent } from './public/paquetes/paquetes.component';
import { SearchTrackComponent } from './pages/search-track/search-track.component';
import { PackagesComponent } from './pages/packages/packages.component';
import { AddPackageComponent } from './pages/add-package/add-package.component';
import { UpdatePackageComponent } from './pages/update-package/update-package.component';
import { MisPaquetesComponent } from './pages/mis-paquetes/mis-paquetes.component';
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentCheckoutDetailComponent } from './components/payment-checkout-detail/payment-checkout-detail.component';





const appRoutes: Routes = [
    {
        path: '',
        component: PageComponent,
        canActivate: [LoginGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent},
            { path: 'perfil', component: PerfilComponent},
            { path: 'deliveries', component: DeliveriesComponent},
            { path: 'search_track', component: SearchTrackComponent},
            { path: 'packages', component: PackagesComponent},
            { path: 'add-package', component: AddPackageComponent},
            { path: 'mis-paquetes', component: MisPaquetesComponent},
            { path: 'payment-stripe', component: PaymentComponent},

            { path: 'payment-checkout/:id', component: PaymentCheckoutDetailComponent},


            { path: 'update-package/:id', component: UpdatePackageComponent },


















            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'paquetes', component: PaquetesComponent},

   // { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
