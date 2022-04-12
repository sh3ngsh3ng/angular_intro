import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'forms';

  cities = ["Singapore", "Malaysia", "Thailand"]

  userData = new User('Test', '123.com', 12123, 'Singpaore');

  name="awef"
  
}
