import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://ergast.com/api/f1'; 

  constructor(private http: HttpClient) { }

  getDrivers() {
    return this.http.get(`${this.apiUrl}/2023/drivers`);
  }


}
