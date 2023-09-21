/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CartOutlets } from '@spartacus/cart/base/root';
import { FeaturesConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import {
  AtMessageModule,
  IconModule,
  ItemCounterModule,
  MediaModule,
  OutletModule,
  OutletPosition,
  PromotionsModule,
  provideOutlet,
} from '@spartacus/storefront';
import { TaskCartItemListComponent } from './cart-item-list/cart-item-list.component';
import { CartCouponModule } from '@spartacus/cart/base/components';
import { AddToCartModule } from '@spartacus/cart/base/components/add-to-cart';
import { TaskCartOutlets } from '../../../cart-outlets-model';
import { TaskCartItemListRowComponent } from './cart-item-list-row/cart-item-list-row.component';

@NgModule({
  imports: [
    AtMessageModule,
    CartCouponModule,
    // CartItemValidationWarningModule,
    CommonModule,
    FeaturesConfigModule,
    I18nModule,
    IconModule,
    ItemCounterModule,
    MediaModule,
    OutletModule,
    PromotionsModule,
    ReactiveFormsModule,
    RouterModule,
    UrlModule,
    AddToCartModule,
  ],
  declarations: [TaskCartItemListComponent, TaskCartItemListRowComponent],
  providers: [
    provideOutlet({
      id: TaskCartOutlets.TASK_CART_ITEM_LIST,
      component: TaskCartItemListComponent,
    }),
    // provideOutlet({
    //   id: CartOutlets.LIST_ITEM,
    //   component: TaskCartItemListRowComponent,
    // }),
  ],
  exports: [TaskCartItemListComponent, TaskCartItemListRowComponent],
})
export class TaskCartSharedModule {}
