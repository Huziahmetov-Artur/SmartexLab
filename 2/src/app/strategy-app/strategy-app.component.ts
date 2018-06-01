import { Component, OnInit } from '@angular/core';
import {listOfApp} from "../Class/ListMas";

@Component({
  selector: 'app-strategy-app',
  templateUrl: './strategy-app.component.html',
  styleUrls: ['./strategy-app.component.css']
})
export class StrategyAppComponent implements OnInit {
  test = listOfApp.filter(a => a.app_type === "strategy")
  constructor() { }

  ngOnInit() {
  }

}
