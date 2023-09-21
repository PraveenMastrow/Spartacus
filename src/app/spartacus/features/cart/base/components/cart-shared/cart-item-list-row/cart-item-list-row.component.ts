/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Component, Input } from '@angular/core';
import { CartItemContextSource, CartItemListRowComponent } from '@spartacus/cart/base/components';
import { CartItemContext, OrderEntry } from '@spartacus/cart/base/root';
import { TaskCartOutlets } from '../../../../cart-outlets-model';
import { UntypedFormControl } from '@angular/forms';
import { TaskProduct } from 'src/app/spartacus/features/product/converters/task-product';
// import '../../model/augmented-core.model';


@Component({
  selector: '[cx-cart-item-list-row-task], cx-cart-item-list-row-task',
  templateUrl: './cart-item-list-row.component.html',
  providers: [
    CartItemContextSource,
    { provide: CartItemContext, useExisting: CartItemContextSource },
  ],
})
export class TaskCartItemListRowComponent extends CartItemListRowComponent {

  @Input() taskProduct: TaskProduct | undefined;

  constructor(cartItemContextSource: CartItemContextSource)
  {
    super(cartItemContextSource);
    this.taskProduct = this.item?.product;
    console.log('Item from ItemList' ,this.item);
    console.log('QuantityControl' ,this.item?.product?.name);
    console.log('TaskRating' ,this.taskProduct?.taskRating);
  }
}
