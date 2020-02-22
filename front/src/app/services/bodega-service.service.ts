import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BodegaServiceService {

  API_BASE = 'http://localhost:3000';

  constructor(
    private http: HttpClient
  ) { }

  getBodegas() {
    return this.http.get<any>(this.API_BASE + '/getBodegas').pipe(
      map((response) => response.data),
      catchError((err, c) => {
        return of([]);
      }));
  }

  getOneBodega(bodegaId: number) {
    return this.http.get<any>(this.API_BASE + '/getOneBodega' + bodegaId).pipe(
      map((response) => response.data),
      catchError((err, c) => {
        return of([]);
      }));
  }
}
