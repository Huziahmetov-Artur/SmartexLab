import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent} from "./list/list.component";
import {AppPageComponent} from "./app-page/app-page.component";
import {GameTypeAppComponent} from "./gameType-app/gameType-app.component";
import {NotFoundComponent} from "./not-found/not-found.component";


const routes : Routes = [
  {path : '', component : ListComponent},
  {path : 'game/:id', component : AppPageComponent},
  {path : ':type/:id', pathMatch: 'full', component : GameTypeAppComponent},
  {path : '**', component : NotFoundComponent},
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
