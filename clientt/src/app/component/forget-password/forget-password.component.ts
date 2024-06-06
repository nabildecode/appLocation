import { Component } from '@angular/core';
<<<<<<< HEAD
import {RegisterService} from "../../services/authService/auth.service";
import { Router } from '@angular/router';
=======
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  email: string = '';
  errorMessage: string = '';
<<<<<<< HEAD
  
  constructor(private loginService: RegisterService,private router :Router) { }

  ngOnInit(): void {
  }
  onSubmit(): void {
  }

  // onSubmit(): void {
  //   this.loginService.forgetPassword(this.email)
  //     .then(response => {
  //       if (response.success) {
  //         const { token, user } = response.data;
  //         console.log(response)
  //         console.log('Token:', token);
  //         console.log('User:', user);
  //         console.log('Redirecting to homepage...');
  //         this.router.navigate(['/home']); // Rediriger vers le tableau de bord après la connexion
  //       } else {
  //         this.errorMessage = response.message;
  //       }
  //     })
  //     .catch(() => {
  //       this.errorMessage = 'An error occurred. Please try again.';
  //     });
  // }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
=======
  onSubmit(): void {
  }
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685
}
