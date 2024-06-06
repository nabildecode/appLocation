import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../../services/user/user.service';

import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

interface User {
  nom: string;
  email: string;
  appartement: { name: string };
  status: number;
  id: number;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: User[] = [];
  errorMessage: string = '';
  dataSource = new MatTableDataSource<User>(this.users);
<<<<<<< HEAD
  displayedColumns: string[] = ['nom', 'email', 'appartement', 'edit', 'Delete'];
=======
  displayedColumns: string[] = ['nom', 'email', 'appartement', 'status','edit', 'Delete'];
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685

  filteruser: string = '';


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  fetchUsers(): void {
    this.userService.getUsers()
      .then(response => {
        if (response.data.status) {
          this.users = response.data.data.users;
          this.dataSource = new MatTableDataSource<User>(this.users);
          this.dataSource.paginator = this.paginator as MatPaginator; // Assertion de type
          this.dataSource.sort = this.sort;
        } else {
          this.errorMessage = response.message;
        }
      })
      .catch(error => {
        console.log(error);
        this.errorMessage = 'Une erreur est survenue. Veuillez réessayer.';
      });
  }

  applyFilter(): void {
    // Définition des filtres
    const filterValue = this.filteruser.trim().toLowerCase();
    
    // Application du filtre personnalisé
    this.dataSource.filterPredicate = (data: User, filter: string) => {
      const { nom } = JSON.parse(filter);

      // Filtrer par logement
      const namefilter = !nom || data.nom.toLowerCase().includes(nom);



      return namefilter ;
    };

    // Application des filtres
    this.dataSource.filter = JSON.stringify({ nom: filterValue });

    // Réinitialiser le paginator après chaque changement de filtre
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  goToAddUser(): void {
    this.router.navigate(['register']);
  }

  // Function to display user details
  showUserDetails(user: User): void {
    const id = user.id;
<<<<<<< HEAD
    this.router.navigate(['detail-prop', id]);
=======
    this.router.navigate(['detail', id]);
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685
  }
  editUserApp(user: User): void {
    const id = user.id;
    this.router.navigate(['detailApp', id]);
  }

  // Function to edit user
  editUser(user: any): void {
    this.router.navigate(['/edit-user', user.id]);
  }
<<<<<<< HEAD
  deleteUser(userId: any): void {
    console.log(userId+"22222222222222")
=======
  deleteUser(userId: number): void {
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685
    this.userService.deleteUser(userId)
      .then(response => {
        if (response.success) {
          // Remove the deleted appartement from the list
<<<<<<< HEAD
          this.router.navigate(['/proprietaire']);
        } else {
          console.error('user deleted');
=======
          console.error('user deleted');
          this.users = this.users.filter(user => user.id !== userId);
        } else {
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685
          this.errorMessage = response.message;
          console.error('Error1:');
        }
      })
      .catch(error => {
        console.error('Error2:', error);
        this.errorMessage = 'Failed to delete user. Please try again later.';
      });
  }
<<<<<<< HEAD

=======
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685
}
