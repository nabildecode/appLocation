
import {Component, Input, OnInit} from '@angular/core';
import {User, UserService} from "../../services/user/user.service";
import { AppartementService } from "../../services/appartementService/appartement.service";
<<<<<<< HEAD
import {ActivatedRoute, Router} from "@angular/router";
=======
import {ActivatedRoute} from "@angular/router";
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685
@Component({
  selector: 'app-edit-appartement',
  templateUrl: './edit-appartement.component.html',
  styleUrls: ['./edit-appartement.component.css']
})
export class EditAppartementComponent {
  userId: any; // Stockez l'ID de l'utilisateur ici
  user: User | null = null;
  detail:any
  appartements: any[] = [];
  errorMessage:string = '';

<<<<<<< HEAD
  constructor(private router: Router, private route: ActivatedRoute,private userService: UserService,private appartementService: AppartementService
=======
  constructor(private route: ActivatedRoute,private userService: UserService,private appartementService: AppartementService
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685
  ) { }
  ngOnInit(): void {
    this.route.params.subscribe(async params => {
      const id = +params['id']; // Assurez-vous que l'ID est converti en nombre
      try {
        await this.getUserById(id);
        console.log("User is ", this.user);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails de l\'utilisateur : ', error);
      }
    });
    // this.appartementService.getAllAppartements()
    //   .then(response => {
    //     console.log('Raw response:', response);  // Log to inspect raw response
    //     if (response.success) {
    //       this.appartements = response.data.data.appartements;
    //       console.log("Appartements:", this.appartements);  // Log to verify appartements content
    //     } else {
    //       this.errorMessage = response.message;
    //       console.log("Error message:", this.errorMessage);  // Log to verify error message
    //     }
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //     this.errorMessage = 'Failed to load appartements. Please try again later.';
    //   });

  }

  async getUserById(userId: number): Promise<User | null> {
    try {
      const response = await this.userService.getUserById(userId);
      this.user = response.data.user;
      console.log("User is ", this.user);
      return this.user;
    } catch (error) {
      console.error('Erreur lors de la récupération des détails de l\'utilisateur : ', error);
      return null; // Retourne null en cas d'erreur
    }
  }
  deleteAppartement(appartementId: any): void {
    this.appartementService.deleteAppartement(appartementId)
      .then(response => {
        if (response.success) {
          // Remove the deleted appartement from the list
<<<<<<< HEAD
          this.router.navigate(['/proprietaire']);
=======
          this.appartements = this.appartements.filter(appartement => appartement.id !== appartementId);
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685
        } else {
          this.errorMessage = response.message;
        }
      })
      .catch(error => {
        console.error('Error:', error);
        this.errorMessage = 'Failed to delete appartement. Please try again later.';
      });
  }
}
