import { Injectable } from '@angular/core';
import {BioInfo} from "../BIOClass/bioInfo";
import {Observable,  of } from 'rxjs';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor(private http: HttpClient) { }
  getAPI(): Observable<BioInfo[]>{
    return this.http.get<BioInfo[]>('http://jsonplaceholder.typicode.com/users/')
  }
}
