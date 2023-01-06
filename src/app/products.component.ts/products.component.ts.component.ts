import { Component, OnInit } from '@angular/core';
import { Products } from './products';
// import { Products } from './products-mock' ;
 

@Component({
  selector: 'app-products.component.ts',
  templateUrl: './products.component.ts.component.html',
  styleUrls: ['./products.component.ts.component.scss'],
  template: '<h2> Products </h2>',
})
export class ProductsComponentTsComponent implements OnInit {

  hero : Products ={
    id: 1,
    name : 'Switch'
  };

  constructor() { }

  ngOnInit(): void {
  }

}


