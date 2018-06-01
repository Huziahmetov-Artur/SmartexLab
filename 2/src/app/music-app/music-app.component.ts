import { Component, OnInit } from '@angular/core';
import {listOfApp} from "../Class/ListMas";

@Component({
  selector: 'app-music-app',
  templateUrl: './music-app.component.html',
  styleUrls: ['./music-app.component.css']
})
export class MusicAppComponent implements OnInit {
  test = listOfApp.filter(a => a.app_type === "music")
  constructor() { }

  ngOnInit() {
  }

}
