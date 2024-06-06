import { Injectable } from '@angular/core';
import axios from "axios";
import {RegisterService} from "../authService/auth.service";

@Injectable({
  providedIn: 'root'
})
export class ReservationServiceService {
  private backendUrl = 'http://localhost:9001/api/v1/reservation';

  constructor(private authService: RegisterService) {
  }

  private static getAuthToken(): string | null {
    return localStorage.getItem('authToken');
  }

  async createReservation(reservationData: {
    date_debut: Date;
    nom_client: string;
    nombre_nuits: number;
    commission: number;
    prix_nuit: number;

  }): Promise<any> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      return {success: false, message: 'No authentication token found'};
    }

    const prix_total = reservationData.prix_nuit * reservationData.nombre_nuits;

   
    try {
      const response = await axios.post(
        `${this.backendUrl}/create`,
        {...reservationData, prix_total},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      
      return {success: true, data: response.data};
    } catch (error: any) {
      return {success: false, message: error.response?.data?.message || 'Failed to create reservation'};
    }
  }

  async getAllReservations(): Promise<any> {
    const token = ReservationServiceService.getAuthToken();
    if (!token) {
      return {success: false, message: 'No authentication token found'};
    }

    try {
      const response = await axios.get(`${this.backendUrl}/getMine`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return {success: true, data: response.data};
    } catch (error: any) {
      return {success: false, message: error.response?.data?.message || 'Failed to fetch reservations'};
    }
  }
  async deleteReservationById(Id: string): Promise<any> {
    const token = localStorage.getItem('authToken');
    if (!token) {
      return { success: false, message: 'No authentication token found' };
    }

    try {
      const response = await axios.delete(
        `${this.backendUrl}/delete/${Id}`,
        {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        }
      );
      return { success: true, data: response.data };
    } catch (error: any) {
      return { success: false, message: error.response?.data?.message || 'Failed to delete reservation ' };
    }
  }
<<<<<<< HEAD
  async findReservationsByYear (appartement:number, year: number): Promise<any> {
    try {
      const response = await axios.get<any>(`${this.backendUrl}/find/year/${appartement}?year=${year}`);
      console.log(response.data)
      return {success: true, data: response.data};
    } catch (error) {
      console.error('Error fetching reservations by year:', error);
      return {success: false};
    }
  }
=======
>>>>>>> 8013e37a37823c2f0b4096555a5ae72c4ca74685
}
