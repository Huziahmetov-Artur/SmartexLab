import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent} from "./list/list.component";
import {AppPageComponent} from "./app-page/app-page.component";
import {HeaderComponent} from "./header/header.component";
import {ActionAppComponent} from "./action-app/action-app.component";
import {MusicAppComponent} from "./music-app/music-app.component";
import {StrategyAppComponent} from "./strategy-app/strategy-app.component";
import {AdventureAppComponent} from "./adventure-app/adventure-app.component";

const routes : Routes = [
  {path : '', component : ListComponent},
  {path : 'action', component : ActionAppComponent},
  {path : 'music', component : MusicAppComponent},
  {path : 'strategy', component : StrategyAppComponent},
  {path : 'adventure', component : AdventureAppComponent},
  {path : 'game/:id', component : AppPageComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
