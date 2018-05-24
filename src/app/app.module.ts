import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { SmartexTaskComponent } from './smartex-task/smartex-task.component';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule }   from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SmartexTaskComponent,
    ModalWindowComponent
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
