  import {Component, OnInit} from '@angular/core';
  import { TaskServiceService} from "./service/task-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Remake of SmartexLab Task';
  text = 'Is it work?';
}
