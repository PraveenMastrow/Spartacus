/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ProductScope } from '@spartacus/core';
import { Product } from '@spartacus/core';

import {
  CurrentProductService,
  ProductDetailOutlets,
  ProductSummaryComponent,
} from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { TaskProduct } from '../converters/task-product';
// import '../../model/augmented-core.model';

@Component({
  selector: 'cx-product-summary',
  templateUrl: './product-summary.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskProductSummaryComponent implements OnInit {
  outlets = ProductDetailOutlets;

  product$: Observable<TaskProduct | null> =
    this.currentProductService.getProduct([
      ProductScope.DETAILS,
      ProductScope.PRICE,
    ]);

  constructor(protected currentProductService: CurrentProductService) {}

  ngOnInit(): void {
    this.product$.subscribe((product) => {
      console.log('Product:', product);
      console.log('Product Augemt:', product?.taskAugment);

    });
  }
}
