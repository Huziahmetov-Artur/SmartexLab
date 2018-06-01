import { Component, OnInit } from '@angular/core';
import {listOfApp} from "../Class/ListMas";

@Component({
  selector: 'app-adventure-app',
  templateUrl: './adventure-app.component.html',
  styleUrls: ['./adventure-app.component.css']
})
export class AdventureAppComponent implements OnInit {
  test = listOfApp.filter(a => a.app_type === "adventure")
  constructor() { }

  ngOnInit() {
  }

}
