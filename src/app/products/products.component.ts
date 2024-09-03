import { Component, Input } from '@angular/core';
import { iProduct } from '../contract/iProduct';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  @Input() product:iProduct

}
