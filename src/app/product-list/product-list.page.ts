import { Component, inject, OnInit } from '@angular/core';
import { IonicModule, AlertController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Product, ProductsService } from '../services/products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink]
})
export class ProductListPage implements OnInit {

  products: Product[] = [];

  productsService = inject(ProductsService);
  alertController = inject(AlertController);
  

  constructor() { }

  async ngOnInit() {
    const response = await this.productsService.getAll();
    this.products = response.results;
  }

  async showProductDetails(product: Product) {
    const alert = await this.alertController.create({
      header: product.name,
      message: `${product.description}`,
      buttons: ['OK']
    });

    await alert.present();
  }

}
