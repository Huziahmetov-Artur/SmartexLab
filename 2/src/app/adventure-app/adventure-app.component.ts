import { Component, OnInit } from '@angular/core';
import {listOfApp} from "../Class/ListMas";
import {GetService} from '../service/get.service';

@Component({
  selector: 'app-adventure-app',
  templateUrl: './adventure-app.component.html',
  styleUrls: ['./adventure-app.component.css']
})
export class AdventureAppComponent implements OnInit {

  infoMas;
  variable;
  constructor(public GetService : GetService) { }

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.GetService.getApi().subscribe(res => {
      this.variable = res;
      this.infoMas = this.variable.filter(a => a.app_type === "adventure");
    });
  }

  change(type) {
    this.GetService.sortt(this.infoMas, type )
  }
}
