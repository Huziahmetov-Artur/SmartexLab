import { Input, Component, OnInit } from '@angular/core';
import {listOfApp} from "../Class/ListMas";
import {GetService} from "../service/get.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() test;
  @Input() disp;
  user = listOfApp;
  constructor(public GetService : GetService) { }

  ngOnInit() {

  }

  change(type) {
    this.GetService.sortt(listOfApp, type )
  }
}
