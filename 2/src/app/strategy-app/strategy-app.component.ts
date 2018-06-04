import { Component, OnInit } from '@angular/core';
import {listOfApp} from "../Class/ListMas";
import {GetService} from '../service/get.service';

@Component({
  selector: 'app-strategy-app',
  templateUrl: './strategy-app.component.html',
  styleUrls: ['./strategy-app.component.css']
})
export class StrategyAppComponent implements OnInit {

  infoMas;
  variable;
  constructor(public GetService : GetService) { }

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.GetService.getApi().subscribe(res => {
      this.variable = res;
      this.infoMas = this.variable.filter(a => a.app_type === "strategy");
    });
  }

  change(type) {
    this.GetService.sortt(this.infoMas, type )
  }
}
