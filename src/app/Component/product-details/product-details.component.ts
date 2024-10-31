import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetProductsByCategoryService } from 'src/app/services/get-products-by-category.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: any; // لتخزين تفاصيل المنتج
  isLoading: boolean = false; // مؤشر التحميل
  errorMessage: string | null = null; // لتخزين رسالة الخطأ

  constructor(
    private route: ActivatedRoute,
    private productService: GetProductsByCategoryService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id'); // جلب معرف المنتج من المسار
    if (productId) {
      this.fetchProductDetails(+productId); // تحويل المعرف إلى رقم واستدعاء الدالة
    }
  }

  fetchProductDetails(productId: number): void {
    this.isLoading = true; // تفعيل مؤشر التحميل
    this.errorMessage = null; // إعادة تعيين رسالة الخطأ

    this.productService.getProductById(productId).subscribe(
      (data) => {
        this.product = data; // تخزين بيانات المنتج
        this.isLoading = false; // إيقاف مؤشر التحميل
      },
      (error) => {
        console.error('Error fetching product details:', error); // تسجيل الخطأ
        this.errorMessage = 'Failed to load product details. Please try again later.'; // تعيين رسالة الخطأ
        this.isLoading = false; // إيقاف مؤشر التحميل عند الخطأ
      }
    );
  }
}
