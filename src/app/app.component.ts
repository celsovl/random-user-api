import { Component } from '@angular/core';
import { RandomUserService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  title = `Uso da API ${RandomUserService.API_URL}`;

}
