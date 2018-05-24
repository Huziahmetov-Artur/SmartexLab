import { Component, OnInit, Input } from '@angular/core';
import {BioInfo} from "../BIOClass/bioInfo";
import { ActivatedRoute} from '@angular/router';
import {bioInfo} from "../BIOClass/bioInfoMas";
import {TaskServiceService} from "../service/task-service.service";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {
id : number;
users: BioInfo[]
user : BioInfo;
  constructor(private activateRoute: ActivatedRoute,public SmartexService : TaskServiceService) {
    this.id = activateRoute.snapshot.params['id'];
    this.user = bioInfo[this.id-1]
  }

  ngOnInit() {
this.getInfo();
  }
  @Input() bio : BioInfo
      getInfo(){
          this.SmartexService.getAPI().subscribe(userL => {
            this.users = userL;
            this.user = this.users[this.id-1]
          })
}
}
