import {Component, OnInit} from '@angular/core';
import {AppartementService} from "../../../services/appartementService/appartement.service";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent implements OnInit{
  name: string = '';
  addresse: string = '';
  frais_menage: string = '';
  owners: any[] = []; // Propriétaires
  selectedOwner: any = null;
  errormessage:string = '';// Propriétaire sélectionné

  constructor(
    private registerService: AppartementService,
    private userService: UserService, // Injectez le UserService
    private router: Router
  ) {}

  ngOnInit(): void {

    this.loadOwners();
    console.log("loadOwners"+this.loadOwners())
  }

  async loadOwners() {
    try {
      const response = await this.userService.getUsers();
      this.owners = response.data.data.users;
      console.log("prop sont   "+this.owners)
    } catch (error) {
      console.error('Failed to load owners', error);
    }
  }

  async onSubmit() {

      // Vérifiez si selectedOwner est null
      if (!this.selectedOwner) {
        console.error('Selected owner is null');
        return;
      }
      try {
        const appartementData = {
          name: this.name,
          addresse: this.addresse,
          frais_menage: this.frais_menage,
          email: this.selectedOwner.email // Use the email of the selected owner
        };
    
        await this.registerService.createAppartement(appartementData);
        this.router.navigate(['/liste-appartement']); // Redirect after successful creation
      } catch (error: any) {
        console.error('Failed to create appartement', error);
        this.errormessage = error.message || 'An error occurred while creating the apartment.';
        console.log(this.errormessage)
      } // Rediriger après la création
  
}
  toggleOwnerDropdown() {
    const selectElement = document.getElementById('owner') as HTMLSelectElement;
    selectElement.classList.toggle('show');
  }
}
