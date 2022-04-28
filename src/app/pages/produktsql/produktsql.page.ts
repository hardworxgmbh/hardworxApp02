import { Component, OnInit } from '@angular/core';
import {PRODUCTS} from './typescripts/mockproducts'
import {FetchdbdataService } from 'src/app/services/fetchdbdata.service';
import { Product } from './typescripts/product';

@Component({
  selector: 'app-produktsql',
  templateUrl: './produktsql.page.html',
  styleUrls: ['./produktsql.page.scss'],
})
export class ProduktsqlPage implements OnInit {

  products : Product[] = [];
  constructor(private fetchdbdataService: FetchdbdataService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts(): void {
    this.fetchdbdataService.getProducts().subscribe(products=>this.products=products);
  }

}
