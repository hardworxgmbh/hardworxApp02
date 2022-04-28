import { Injectable } from '@angular/core';
import { Product } from '../pages/produktsql/typescripts/product';
import { PRODUCTS } from '../pages/produktsql/typescripts/mockproducts';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchdbdataService {

  private productsURL = 'https://hardworx.bbs-rohrbach.at/ionic2php/json.php'
  constructor(private http:HttpClient) { }
  getProducts(): Observable<Product[]>{
        return this.http.get<Product[]>(this.productsURL)
  
  }
}
