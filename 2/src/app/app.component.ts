import { Component , OnInit } from '@angular/core';
import {GetService} from "./service/get.service";
import {listOfApp} from "./Class/ListMas";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(public GetService : GetService) { }

  ngOnInit() {
    this.GetService.getApi().subscribe(res => {
      listOfApp.push(...res);
    })
  }

}
