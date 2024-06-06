import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {RegisterService} from "../../services/authService/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private loginService: RegisterService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loginService.login(this.email, this.password)
      .then(response => {
        if (response.success) {
          const { token, user } = response.data;
          console.log(response)
          console.log('Token:', token);
          console.log('User:', user);
          console.log('Redirecting to homepage...');
<<<<<<< HEAD
          this.router.navigate(['/home']); // Rediriger vers le tableau de bord après la connexion
=======
          this.router.navigate(['/liste-appartement']); // Rediriger vers le tableau de bord après la connexion
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685
        } else {
          this.errorMessage = response.message;
    
        }
      })
      .catch(() => {
        this.errorMessage = 'An error occurred. Please try again.';
      });
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
