import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductsSvcService } from '../services/products-svc.service';
import { BodegaServiceService } from '../services/bodega-service.service';
import { Product } from '../models/producto';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Factura } from '../models/fatutra';
import { ProductListItem } from '../models/productListItems';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  products: any[] = [];
  myControl = new FormControl();
  filteredOptions: Observable<any[]>;
  factura: Factura = new Factura(
    {
      Productos: new Array < ProductListItem>()
    });


  constructor(
    private bodegaSvc: BodegaServiceService
  ) { }


  ngOnInit() {
    console.log(this.factura);
    this.factura.Productos.push(new ProductListItem({}));
    this.bodegaSvc.getBodegas().subscribe((res: any[]) => {
      if (res) {
        this.products = res[0].productos;
        console.log(this.products, new ProductListItem({}));
      }
    });

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this._filter(name) : [].slice())
      );
  }

  displayFn(product: Product): string {
    return product && product.name ? product.name : '';
  }

  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();

    return this.products.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
