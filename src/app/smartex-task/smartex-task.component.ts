import { Component, OnInit } from '@angular/core';
import {bioInfo} from "../BIOClass/bioInfoMas";
import { TaskServiceService} from "../service/task-service.service";

@Component({
  selector: 'app-smartex-task',
  templateUrl: './smartex-task.component.html',
  styleUrls: ['./smartex-task.component.css']
})
export class SmartexTaskComponent implements OnInit {
  handleBioInfo = bioInfo;
  users = bioInfo;
  constructor(public SmartexService : TaskServiceService) { }

  ngOnInit() {
    this.users.length < 10 ?
    this.SmartexService.getAPI().subscribe(user =>{
      this.users.push(...user);
    })
      : null
  }

}
