import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule }   from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppPageComponent } from './app-page/app-page.component';
import { HeaderComponent } from './header/header.component';
import { ActionAppComponent } from './action-app/action-app.component';
import { MusicAppComponent } from './music-app/music-app.component';
import { StrategyAppComponent } from './strategy-app/strategy-app.component';
import { AdventureAppComponent } from './adventure-app/adventure-app.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AppPageComponent,
    HeaderComponent,
    ActionAppComponent,
    MusicAppComponent,
    StrategyAppComponent,
    AdventureAppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
