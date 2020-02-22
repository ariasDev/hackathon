import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductsSvcService {

  API_BASE = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getProduct(idBod: number, idProd: number) {
    const query = {
      idBodega: idBod,
      idProduct: idProd
    };

    return this.http.post(this.API_BASE + '/consultProduct', query);
  }
}
