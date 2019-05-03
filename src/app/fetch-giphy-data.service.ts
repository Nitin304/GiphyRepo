import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FetchGiphyDataService {
  
  constructor(private http:HttpClient) { }
  
  fetchGiphyData(url): Observable<any[]>{
    return this.http.get<any[]>(url);
  }
}
