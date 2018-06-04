import { Component, OnInit } from '@angular/core';
import {GetService} from '../service/get.service';
import {listOfApp} from '../Class/ListMas';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-action-app',
  templateUrl: './gameType-app.component.html',
  styleUrls: ['./gameType-app.component.css']
})
export class GameTypeAppComponent implements OnInit {

  infoMas;
  variable;
  id;
  type;
  subscription;
  constructor(public GetService : GetService,private activateRoute: ActivatedRoute,private router : Router) {
    this.subscription = this.activateRoute.params.subscribe(params=> {
      this.id=params['id'];
      this.type=params['type'];
      this.infoMas = listOfApp.filter(a => a[this.type].toLowerCase().indexOf(this.id) >= 0);
    });
  }

  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.GetService.getApi().subscribe(res => {
      this.variable = res;
      this.infoMas = listOfApp.filter(a => a[this.type].toLowerCase().indexOf(this.id) >= 0);
      if ( this.infoMas[0] ) {
      }
      else
      {
        this.router.navigate([`/noapp`]);
      }
    });
  }
  change(type) {
    this.GetService.sortt(this.infoMas, type )
  }
}
