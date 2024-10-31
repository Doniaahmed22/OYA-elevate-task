// get-products-by-category.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetProductsByCategoryService {
  private baseUrl = 'https://fakestoreapi.com/products/'; // رابط الـ API

  constructor(private http: HttpClient) {}

  // دالة لجلب المنتجات بناءً على الفئة
  getProductsByCategory(category: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/category/${category}`);
  }

  getProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
  }
}
