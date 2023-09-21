import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ProductAdapter,
  Product,
  ConverterService,
  PRODUCT_NORMALIZER,
} from '@spartacus/core';
import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root',
// })
export class TaskProductAdapter implements ProductAdapter {
  constructor(
    protected http: HttpClient,
    protected converter: ConverterService
  ) {}

  load(_productCode: string): Observable<Product> {
    console.log('TaskProductAdapter');
    return this.http
      .get('./assets/task-product-pdp.json')
      .pipe(this.converter.pipeable(PRODUCT_NORMALIZER));
  }
}
