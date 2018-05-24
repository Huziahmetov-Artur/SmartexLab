import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModalWindowComponent } from "./modal-window/modal-window.component";
import {SmartexTaskComponent} from "./smartex-task/smartex-task.component";

const routes: Routes = [
  { path: '', component : SmartexTaskComponent },
  { path: 'modal/:id', component: ModalWindowComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
