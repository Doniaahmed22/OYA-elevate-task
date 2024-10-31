import { Component, OnInit } from '@angular/core';
import { GetProductsByCategoryService } from '../services/get-products-by-category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];
  loadedProducts: number[] = [];
  selectedCategory: string = "women's clothing";
  isLoading: boolean = false; // مؤشر تحميل
  errorMessage: string | null = null; // رسالة الخطأ

  constructor(
    private productService: GetProductsByCategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.fetchProducts(this.selectedCategory);
  }

  viewProductDetails(productId: number): void {
    this.router.navigate(['/product', productId]);
  }

  fetchProducts(category: string): void {
    this.isLoading = true;
    this.errorMessage = null; // إعادة تعيين رسالة الخطأ

    this.productService.getProductsByCategory(category).subscribe(
      (data) => {
        this.products = data;
        this.loadedProducts = [];
        this.isLoading = false;
        this.animateProducts();
      },
      (error) => {
        console.error('Error fetching products:', error);
        this.errorMessage = 'Failed to load products. Please try again later.'; // تعيين رسالة الخطأ
        this.isLoading = false;
      }
    );
  }

  animateProducts(): void {
    this.products.forEach((_, index) => {
      setTimeout(() => {
        this.loadedProducts.push(index);
      }, index * 100);
    });
  }

  onCategoryChange(category: string): void {
    this.selectedCategory = category;
    this.fetchProducts(category);
  }

  truncateTitle(title: string): string {
    const words = title.split(' ');
    return words.length > 4 ? words.slice(0, 4).join(' ') + '...' : title;
  }
}