/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Optional,
} from '@angular/core';
import { CartItemListComponent } from '@spartacus/cart/base/components';
import {
  ActiveCartFacade,
  CartItemComponentOptions,
  MultiCartFacade,
  OrderEntry,
  PromotionLocation,
  SelectiveCartFacade,
} from '@spartacus/cart/base/root';
import { UserIdService } from '@spartacus/core';
import { OutletContextData } from '@spartacus/storefront';
import { TaskCartOutlets } from '../../../../cart-outlets-model';

interface ItemListContext {
  readonly?: boolean;
  hasHeader?: boolean;
  options?: CartItemComponentOptions;
  cartId?: string;
  items?: OrderEntry[];
  promotionLocation?: PromotionLocation;
  cartIsLoading?: boolean;
}

@Component({
  selector: 'cx-cart-item-list-task',
  templateUrl: './cart-item-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskCartItemListComponent extends CartItemListComponent {
  readonly TaskCartOutlets = TaskCartOutlets;

  constructor(
    activeCartService: ActiveCartFacade,
    selectiveCartService: SelectiveCartFacade,
    userIdService: UserIdService,
    multiCartService: MultiCartFacade,
    cd: ChangeDetectorRef,
    @Optional() outlet?: OutletContextData<ItemListContext>
  ) {
    super(
      activeCartService,
      selectiveCartService,
      userIdService,
      multiCartService,
      cd,
      outlet
    );
    console.log('Items', this.items);
    console.log('Cart ID', this.cartId);
    console.log('Promotion Location', this.promotionLocation);
  }
}

