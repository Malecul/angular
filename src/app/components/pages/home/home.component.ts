import {Component, OnInit} from '@angular/core';
import {IProduct} from "../../interface/product";
import {ProductsService} from "../../data/products.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{
  products:IProduct[] = []

  constructor(private _productService: ProductsService) {}

  ngOnInit(): void {
    this._productService.getList()
      .subscribe(response=>{
        this.products = response.data;
      })
  }
}
