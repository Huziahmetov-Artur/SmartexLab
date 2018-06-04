import { Component, OnInit } from '@angular/core';
import {listOfApp} from '../Class/ListMas';
import {GetService} from '../service/get.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchVar;

  constructor(public GetService : GetService,private router : Router,private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.GetService.getApi().subscribe(res => {
      listOfApp.push(...res);
    });
  }
  search() {
    console.log(this.searchVar)
    this.searchVar = this.searchVar.replace(/\s/g,'').toLowerCase();
    console.log(this.searchVar)
    this.router.navigate([`/game/${this.searchVar}`]);
    this.searchVar = '';
  }
changeRouter() {
  this.router.navigate([``]);
}
}
