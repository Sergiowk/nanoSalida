import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'nanoSalida';

  constructor (private apiService: ApiService) {}

  getData(){
    this.apiService.getDrivers().subscribe(
      (response) => {
        console.log(response);
      },
      (error) =>{
        console.error(error);
      }
      ); 
  }

}
