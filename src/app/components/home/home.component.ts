import {Component} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {
  }

  formGroup: FormGroup | undefined;
  degF: number | undefined;
  degC: number | undefined;

  toCelsius(event: any) {
    const newDegC = ((Number(this.degF) - 32) * (5 / 9));
    this.degC = newDegC;
  }

  toFahrenheit(event: any) {
    const newDegF = (Number(this.degC) * (9 / 5) + 32);
    this.degF = newDegF;
  }
}
