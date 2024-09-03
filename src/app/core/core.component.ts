import { Component } from '@angular/core';
import { iProduct } from '../contract/iProduct';
import { products } from '../data/products';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrl: './core.component.scss'
})
export class CoreComponent {
products:iProduct[]=products
addProduct(product:iProduct){
  product.image=products[0].image
  products.push(product)
}
}

