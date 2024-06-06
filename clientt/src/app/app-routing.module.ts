  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import {HomeComponent} from "./component/home/home.component";
  import {LoginComponent} from "./component/login/login.component";
  import {DefaultComponent} from "./default/default/default.component";
  import {RegisterComponent} from "./component/register/register.component";

  import {AppartementComponent} from "./component/add/appartement/appartement.component";
  import {AuthGuard} from "./guard/auth.guard";
  import {LogementComponent} from "./component/logement/logement.component";
  import {UserComponent} from "./component/user/user/user.component";
  import {ProfileComponent} from "./component/profile/profile.component";

  import {EditUserComponent} from "./component/edit-user/edit-user.component";
  import {PerformanceComponent} from "./component/performance/performance.component";
  import {FactureComponent} from "./component/facture/facture.component";
  import {CalenderComponent} from "./component/calender/calender.component";
  import {PayComponent} from "./component/pay/pay.component";
  import {ReservationComponent} from "./component/reservation/reservation.component";
  import {AddReservationComponent} from "./component/add/add-reservation/add-reservation.component";
import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { EditAppartementComponent } from './component/edit-appartement/edit-appartement.component';
<<<<<<< HEAD
import { DetailAppartementComponent } from './component/detail-appartement/detail-appartement.component';
import { DetailProprietaireComponent } from './component/detail-proprietaire/detail-proprietaire.component';
=======
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685


  const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'forgetPassword', component: ForgetPasswordComponent },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    },
    {
      path: '',
      component: DefaultComponent,
      canActivate: [AuthGuard],
      children: [
        { path: 'home', component: HomeComponent },
        { path: 'addAppartement', component: AppartementComponent },
        { path: 'liste-appartement', component: LogementComponent },
        { path: 'proprietaire', component: UserComponent },
        { path: 'profile', component: ProfileComponent },
        { path: 'register', component: RegisterComponent },
        { path: 'detail-appartement', component: DetailAppartementComponent },
        { path: 'detail-prop', component: DetailProprietaireComponent },
        { path: 'performance', component: PerformanceComponent },
        { path: 'facturation', component: FactureComponent },
        { path: 'calendrier', component: CalenderComponent },
        { path: 'pay', component: PayComponent },
        { path: 'addreservation', component: AddReservationComponent },
        { path: 'reservation', component: ReservationComponent },
        { path: 'edit-user/:id', component: EditUserComponent },
<<<<<<< HEAD
        { path: 'detailApp/:id', component: EditAppartementComponent },
        { path: 'forgetPassword', component: ForgetPasswordComponent },
=======
        { path: 'detailApp/:id', component: EditAppartementComponent }
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685

      ]
    },
 { path: '**', redirectTo: '/login' },  // Redirect any unknown paths to login
  ];
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
