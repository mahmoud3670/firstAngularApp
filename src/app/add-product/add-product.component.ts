import { Component, Output,EventEmitter } from '@angular/core';
import { iProduct } from '../contract/iProduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.scss'
})
export class AddProductComponent {
@Output() newProductEvent=new EventEmitter<iProduct>();
product:iProduct=new iProduct;

onAddProduct(){
  this.newProductEvent.emit(this.product);
  this.product=new iProduct;
}

}
