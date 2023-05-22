import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://ergast.com/api/f1'; 

  constructor(private http: HttpClient) {
    console.log('Service Drivers')
   }

  getDrivers() {
    let head = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(`${this.apiUrl}/2023/drivers`, {
      headers: head
    });
    
  }


}
