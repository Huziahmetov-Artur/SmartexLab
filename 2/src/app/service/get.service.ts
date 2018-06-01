import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {List} from "../Class/ListClass";

@Injectable({
  providedIn: 'root'
})
export class GetService {

  constructor(private http: HttpClient) { }
  getApi(): Observable<any[]>{
    return this.http.get<any[]>('http://localhost:4200/assets/info.json');
  }
}
