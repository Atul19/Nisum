import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WestlmService {

  url: string = '../../assets/data.json';

  constructor(private http: HttpClient) { }  

  getProductsList(){
    return this.http.get(this.url);
  }
}
