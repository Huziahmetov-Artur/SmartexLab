import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import  { FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { HttpClientModule }   from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppPageComponent } from './app-page/app-page.component';
import { HeaderComponent } from './header/header.component';
import { GameTypeAppComponent } from './gameType-app/gameType-app.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    AppPageComponent,
    HeaderComponent,
    GameTypeAppComponent,
    NotFoundComponent,

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
