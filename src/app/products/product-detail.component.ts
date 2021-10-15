import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  pageTitle: String = 'Product Details'
  constructor() { }

  ngOnInit(): void {
  }

}
