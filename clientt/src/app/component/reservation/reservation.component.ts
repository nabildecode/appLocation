import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ReservationServiceService } from '../../services/reservationService/reservation-service.service';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { RegisterService } from '../../services/authService/auth.service';
import { AppartementService } from 'src/app/services/appartementService/appartement.service';

interface Reservation {
  appartement: { name: string ,id:string};
  date_debut: string;
  nom_client: string;
  nombre_nuits: number;
  commission: number;
  prix_total: number;
  status: number;
}

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {
  isAdmin: boolean = false;
  appartements: any[] = [];
  reservations: Reservation[] = [];
  errorMessage: string = '';
  dataSource = new MatTableDataSource<Reservation>(this.reservations);
  displayedColumns: string[] = ['appartement', 'date_debut', 'nom_client', 'nombre_nuits', 'commission', 'prix_total', 'status','facture'];


  filterLogement: string = '';
  filterYear: number | null = null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private router: Router, private reservationService: ReservationServiceService, private authService: RegisterService,
     private appartementService: AppartementService) {
    this.isAdmin = this.authService.isAdmin();
  }

  ngOnInit(): void {
    this.fetchReservations();
  }
  fetchAppartements(): void {
    this.appartementService.getAllAppartements()
      .then(response => {
        console.log('Raw response:', response);  // Log to inspect raw response
        if (response.success) {
          this.appartements = response.data.data.appartements;
          console.log("Appartements:", this.appartements);  // Log to verify appartements content
        } else {
          this.errorMessage = response.message;
          console.log("Error message:", this.errorMessage);  // Log to verify error message
        }
      })
      .catch(error => {
        console.error('Error:', error);
        this.errorMessage = 'Failed to load appartements. Please try again later.';
      });
  }

  fetchReservations(): void {
    this.reservationService.getAllReservations()
      .then(response => {
        if (response.success) {
          this.reservations = response.data.data.checkins;
          this.dataSource = new MatTableDataSource<Reservation>(this.reservations);
          this.dataSource.paginator = this.paginator as MatPaginator; // Assertion de type
          this.dataSource.sort = this.sort;
        } else {
          this.errorMessage = response.message;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        this.errorMessage = 'Failed to load reservations. Please try again later.';
      });
  }
  deleteReservation(Id: string): void {
    this.reservationService.deleteReservationById(Id)
      .then(response => {
        if (response.success) {
          // Remove the deleted appartement from the list
          this.reservations = this.reservations.filter(reservation => reservation.appartement.id !== Id);
        } else {
          this.errorMessage = response.message;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        this.errorMessage = 'Failed to delete reser. Please try again later.';
      });
  }

  applyFilter(): void {
    // Définition des filtres
    const filterValue = this.filterLogement.trim().toLowerCase();
    const filterYearValue = this.filterYear;

    // Application du filtre personnalisé
    this.dataSource.filterPredicate = (data: Reservation, filter: string) => {
      const { logement, year } = JSON.parse(filter);

      // Filtrer par logement
      const logementFilter = !logement || data.appartement.name.toLowerCase().includes(logement);

      // Filtrer par année
      const yearFilter = !year || new Date(data.date_debut).getFullYear() === year;

      return logementFilter && yearFilter;
    };

    // Application des filtres
    this.dataSource.filter = JSON.stringify({ logement: filterValue, year: filterYearValue });

    // Réinitialiser le paginator après chaque changement de filtre
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


  goToAddReservation(): void {
    this.router.navigate(['/addreservation']);
  }
}
