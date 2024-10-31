import { Component, OnInit } from '@angular/core';
import { GetAllProductsService } from '../../services/get-all-products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {
  products: any[] = []; // مصفوفة لتخزين المنتجات
  filteredProducts: any[] = []; // مصفوفة للمنتجات بعد التصفية
  isLoading: boolean = false; // مؤشر التحميل
  searchTerm: string = ''; // نص البحث
  errorMessage: string | null = null; // لتخزين رسالة الخطأ

  constructor(private productService: GetAllProductsService, private router: Router) { }

  ngOnInit(): void {
    this.fetchProducts(); // استدعاء جلب المنتجات عند تهيئة المكون
  }

  fetchProducts(): void {
    this.isLoading = true; // تفعيل مؤشر التحميل
    this.errorMessage = null; // إعادة تعيين رسالة الخطأ

    this.productService.getAllProducts().subscribe(
      (data) => {
        this.products = data; // تخزين المنتجات
        this.filteredProducts = data; // تعيين المنتجات المصفاة
        this.isLoading = false; // إيقاف مؤشر التحميل
      },
      (error) => {
        console.error('Error fetching products:', error); // تسجيل الخطأ في وحدة التحكم
        this.errorMessage = 'Failed to load products. Please try again later.'; // تعيين رسالة الخطأ
        this.isLoading = false; // إيقاف مؤشر التحميل في حالة الخطأ
      }
    );
  }

  viewProductDetails(productId: number): void {
    this.router.navigate(['/product', productId]); // التنقل إلى تفاصيل المنتج
  }

  truncateTitle(title: string): string {
    const words = title.split(' ');
    return words.length > 4 ? words.slice(0, 4).join(' ') + '...' : title;
  }

  onSearchChange(): void {
    // تصفية المنتجات بناءً على نص البحث
    this.filteredProducts = this.products.filter(product =>
      product.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}