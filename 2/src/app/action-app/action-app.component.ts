import { Component, OnInit } from '@angular/core';
import {GetService} from '../service/get.service';
import {listOfApp} from '../Class/ListMas';

@Component({
  selector: 'app-action-app',
  templateUrl: './action-app.component.html',
  styleUrls: ['./action-app.component.css']
})
export class ActionAppComponent implements OnInit {

  infoMas;
  variable;
  constructor(public GetService : GetService) { }

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.GetService.getApi().subscribe(res => {
      this.variable = res;
      this.infoMas = this.variable.filter(a => a.app_type === 'action');
    });
  }
  change(type) {
    this.GetService.sortt(this.infoMas, type )
  }
}
