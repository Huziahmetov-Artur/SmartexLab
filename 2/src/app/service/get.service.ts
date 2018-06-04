import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";

@Injectable( {
  providedIn: 'root'
} )
export class GetService {

  constructor(private http: HttpClient) { }
  getApi(): Observable<any[]> {
    return this.http.get<any[]>('./assets/info.json');
  }
  sortt(mas, typee ) {

    mas.sort(function (a, b) {
      if (a[typee] > b[typee]) {
        return 1;
      }
      if (a[typee] < b[typee]) {
        return -1;
      }
      return 0;
    });
  }
}
