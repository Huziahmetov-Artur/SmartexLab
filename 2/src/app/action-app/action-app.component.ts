import { Component, OnInit } from '@angular/core';
import {listOfApp} from "../Class/ListMas";

@Component({
  selector: 'app-action-app',
  templateUrl: './action-app.component.html',
  styleUrls: ['./action-app.component.css']
})
export class ActionAppComponent implements OnInit {

  test;
  constructor() { }

  ngOnInit() {
    this.test = listOfApp.filter(a => a.app_type === "action")
    console.log(listOfApp)
  }

}
