import { IProducts } from './products';
import { Component, OnInit } from "@angular/core";
import { ProductService } from './product.service';


@Component({
    selector: "pm-products",
    templateUrl:'./product-list.commponent.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {



    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number =  2;
    showImage: boolean = false;
    // listFilter: string = 'cart';
    private _listFilter: string = ' ';
    get listFilter(): string {
      return this._listFilter;
    }
    set listFilter(value: string){
      this._listFilter = value;
      console.log('In setter: ' , value);
      this.filteredProducts = this.performFilter(value);
    }
    filteredProducts: IProducts[] = [];
    products: IProducts[]= [];

      constructor (private productService: ProductService){
        
      }
      performFilter(filterBy: string): IProducts[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProducts) => 
          product.productName.toLocaleLowerCase().includes(filterBy));
      }
      toggleImage() : void {

          this.showImage = !this.showImage;
      }
      //hook
      ngOnInit(): void{
        //console.log('OnInit');
        this.products = this.productService.getProducts();
        this.filteredProducts = this.products;
        //this.listFilter = "cart";
      }
      onRatingClicked(message: string): void {
        this.pageTitle = 'Product List: ' + message;
      }
}



