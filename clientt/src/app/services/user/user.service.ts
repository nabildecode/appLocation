import { Injectable } from '@angular/core';
import axios from "axios";
import {RegisterService} from "../authService/auth.service";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private backendUrl = 'http://localhost:9001/api/v1/user';
  constructor(private authService: RegisterService) { }
  private tokenKey: string = 'authToken';
  private userKey: string = 'authUser';

  async deleteUser(userId: number): Promise<any> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      return { success: false, message: 'No authentication token found' };
    }

    try {
      const response = await axios.delete(
        `${this.backendUrl}/delete/${userId}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      return { success: true, data: response.data };
    } catch (error: any) {
<<<<<<< HEAD
    
      return { success: false, message: error.response?.data?.message || 'Failed to delete user' };
=======
      return { success: false, message: error.response?.data?.message || 'Failed to delete appartement' };
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685
    }
  }


  getUsers(): Promise<any> {
    const token = this.authService.getAuthToken();
    if (!token) {
      return Promise.reject('No token found');
    }

    return axios.get<any>(`${this.backendUrl}/getALL`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
  }
  getUserById(userId: number): Promise<any> {
    const token = this.authService.getAuthToken();
    if (!token) {
      return Promise.reject('No token found');
    }

    return axios.get<any>(`${this.backendUrl}/get/${userId}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {

        return { success: true, data: response.data };
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        return { success: false, error: error.message };
      });
  }
  isLoggedIn(): boolean {
    // Récupérer le jeton d'authentification depuis le stockage local (localStorage)
    const authToken = localStorage.getItem(this.tokenKey);

    // Vérifier si le jeton est présent et valide
    if (authToken) {
      // Vérifier si le jeton est expiré ou non
      const tokenExpiration = localStorage.getItem('tokenExpiration');
      if (tokenExpiration && new Date(tokenExpiration) > new Date()) {
        // Le jeton est présent et non expiré, l'utilisateur est connecté
        console.log("true");
        return true;
      } else {
        // Le jeton est expiré, déconnecter l'utilisateur et renvoyer false
        this.logout();
        console.log("false");
        return false;
      }
    } else {
      // Aucun jeton trouvé, l'utilisateur n'est pas connecté
      console.log("false2");
      return false;
    }
  }
  logout(): void {
    // Remove the token and user from localStorage
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userKey);
  }
  async updateUser(id: number, user: User): Promise<User> {
    const response = await axios.put(`${this.backendUrl}/edit-profile/${id}`, user);
    console.log("date de update est "+response.data)
    return response.data;

  }


}

export interface Appartement {
  id: number;
  name:string
  addresse: string;
  frais_menage: number;
  // Ajoutez d'autres champs selon vos besoins
}
// Définissez une interface pour représenter un utilisateur

export interface User {
  id: number;
  nom: string;
  prenom: string;
  email: string;
  language: string;
  provider: string;
  role: string;
  status: number;
  created_at: string;
  updated_at: string;
  appartements: Appartement[];
  numberOfApartments?: number;
  // Ajoutez d'autres champs selon vos besoins
}
