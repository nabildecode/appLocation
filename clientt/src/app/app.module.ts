import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HomeComponent } from './component/home/home.component';
import { SharedModule } from "./shared/shared.module";
import { DefaultModule } from "./default/default.module";
import { CalenderComponent } from './component/calender/calender.component';
import { LogementComponent } from './component/logement/logement.component';
import { PayComponent } from './component/pay/pay.component';
import { FactureComponent } from './component/facture/facture.component';
import { ReservationComponent } from './component/reservation/reservation.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UserComponent } from './component/user/user/user.component';
import { AppartementComponent } from './component/add/appartement/appartement.component';
import { AuthGuard } from "./guard/auth.guard";
import { AppartementService } from "./services/appartementService/appartement.service";
import { UserService } from "./services/user/user.service";
import { ProfileComponent } from './component/profile/profile.component';

import { EditUserComponent } from './component/edit-user/edit-user.component';
import { CommonModule } from "@angular/common";
import { PerformanceComponent } from './component/performance/performance.component';

import {FullCalendarModule} from "@fullcalendar/angular";
import dayGridPlugin from '@fullcalendar/daygrid'; // importez le plugin dayGrid
import timeGridPlugin from '@fullcalendar/timegrid';
import {CalendarOptions} from "@fullcalendar/core";
import { AddReservationComponent } from './component/add/add-reservation/add-reservation.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatSortModule} from "@angular/material/sort";
import {MatSelectModule} from "@angular/material/select";

import { ForgetPasswordComponent } from './component/forget-password/forget-password.component';
import { EditAppartementComponent } from './component/edit-appartement/edit-appartement.component';
<<<<<<< HEAD
import { DetailAppartementComponent } from './component/detail-appartement/detail-appartement.component';
import { DetailProprietaireComponent } from './component/detail-proprietaire/detail-proprietaire.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxChartsModule } from '@swimlane/ngx-charts';
=======
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685
// importez le plugin timeGrid
const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  // Other routes here
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CalenderComponent,
    LogementComponent,
    PayComponent,
    FactureComponent,
    ReservationComponent,
    UserComponent,
    AppartementComponent,
    ProfileComponent,

    EditUserComponent,
    PerformanceComponent,
    AddReservationComponent,
    ForgetPasswordComponent,
    EditAppartementComponent,
<<<<<<< HEAD
    DetailAppartementComponent,
    DetailProprietaireComponent,
=======
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    DefaultModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    CommonModule,
    FullCalendarModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSortModule,
    MatSelectModule,
    NgxChartsModule,
    NgCircleProgressModule



  ],
  providers: [AuthGuard, AppartementService, UserService],
  bootstrap: [AppComponent],
})
export class AppModule { }
