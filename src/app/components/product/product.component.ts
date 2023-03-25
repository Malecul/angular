import {Component, Input} from '@angular/core';
import {IProduct} from "../interface/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!:IProduct
  isVisible = false;

}
