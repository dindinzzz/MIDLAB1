import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs';
import {interval} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'midterm1';
  presentDate = new Date();
  time$ : Observable<Date>;
  price : number = 2000;
  Fruits = ["Apple", "Orange", "Grape", "Mango", "Kiwi", "Pomegranate"];
  decimalNum1: number = 8.7589623;
  decimallNum2: number = 5.43;
  a: number = 0.259;
  b: number = 1.3495;

  data: object = {
    name: 'Denise', age:21, food:'Fries',
    languages: [
      {lname: 'Js', level: 'Beginner',},
      {lname: 'Phython', level: 'Average',},
      {lname: 'Cobol', level: 'Beginner',},
    ]
  }

  constructor() {
    this.time$ = interval(1000).pipe(
      map(() => new Date)
    );
  }


}
