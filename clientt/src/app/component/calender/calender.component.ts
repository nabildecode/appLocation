import { Component } from '@angular/core';
import {CalendarOptions, EventInput} from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import {AppartementService} from "../../services/appartementService/appartement.service";
import {Router} from "@angular/router";
import {ReservationServiceService} from "../../services/reservationService/reservation-service.service";



@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],

})
export class CalenderComponent {
  reservations: any[] = []; // Assurez-vous que le type correspond à la structure de vos réservations
  calendarEvents: EventInput[] = [];

  calendarOptions: CalendarOptions = {
    displayEventTime: false,
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    events: this.calendarEvents
  };

  constructor(private reservationService: ReservationServiceService) {}

  ngOnInit(): void {
    this.loadReservations();
  }

  loadReservations(): void {
    this.reservationService.getAllReservations().then(response => {
      this.reservations = response.data.data.checkins;
      this.updateCalendarEvents();
    }).catch(error => {
      console.error('Erreur lors du chargement des réservations:', error);
    });
  }
  filteredAppartmentName: string = '';

  applyAppartmentNameFilter(): void {
    this.updateCalendarEvents();
  }

  updateCalendarEvents(): void {
<<<<<<< HEAD
    console.log(this.reservations)
=======
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685
      this.calendarEvents = this.reservations
      .filter(reservation => reservation.appartement.name.toLowerCase().includes(this.filteredAppartmentName.toLowerCase()))
      .map(reservation => {
        var result = new Date(reservation.date_debut);
        result.setDate(result.getDate() + reservation.nombre_nuits -1);
          return {
            title: reservation.appartement.name,
            start: reservation.date_debut,
            end:result, 
            backgroundColor: 'green'
          }
      })
      console.log(this.calendarEvents)
    // Mettez à jour les événements du calendrier ici
    this.calendarOptions.events = this.calendarEvents;
  }


}
