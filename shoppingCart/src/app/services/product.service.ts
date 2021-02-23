import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})



export class ProductService {

  
  products: Product[]=[
    new Product(1,'Apple','This is fresh',100),
    new Product(2,'Orange','This is fresh',200),
    new Product(3,'Banana','This is fresh',50),
    new Product(4,'Pears','This is fresh',150),
    new Product(5,'Computer','This is fresh',100),
    new Product(6,'Laptop','This is fresh',110),
    new Product(7,'Camera','This is fresh',1200)
  ]
  constructor() { }

  getProducts(): Product[]{
    //TODO: popluate products from an api and return an observable
    return this.products;
  }
}
