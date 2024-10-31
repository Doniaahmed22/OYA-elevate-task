import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetAllProductsService {
  private apiUrl = 'https://fakestoreapi.com/products'; // رابط API

  constructor(private http: HttpClient) { }

  // دالة لجلب جميع المنتجات
  getAllProducts(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
