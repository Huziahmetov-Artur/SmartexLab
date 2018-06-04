import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GetService} from '../service/get.service';
@Component({
  selector: 'app-app-page',
  templateUrl: './app-page.component.html',
  styleUrls: ['./app-page.component.css']
})
export class AppPageComponent implements OnInit {

  id: number;
  variable;
  oneGame;
  constructor(private activateRoute: ActivatedRoute,public GetService : GetService,private router : Router) {
    this.id = activateRoute.snapshot.params['id'];
  }
  ngOnInit() {
    this.refresh();
  }
  refresh() {
    this.GetService.getApi().subscribe(res => {
      this.variable = res;
      this.oneGame = this.variable.filter(a => a.app_short.toLowerCase() === this.id)[0];
      if ( this.oneGame ) {

      }
      else
      {
        alert('No app');
        this.router.navigate([``]);
      }
    });

  }
}
