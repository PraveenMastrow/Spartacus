/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddToCartModule } from '@spartacus/cart/base/components/add-to-cart';
import {
  AuthGuard,
  CmsConfig,
  ConfigModule,
  I18nModule,
  UrlModule,
} from '@spartacus/core';
import {
  CardModule,
  IconModule,
  MediaModule,
  OutletModule,
  SpinnerModule,
} from '@spartacus/storefront';
import { TaskSavedCartDetailsItemsComponent } from './saved-cart-details-items/saved-cart-details-items.component';

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    UrlModule,
    RouterModule,
    CardModule,
    MediaModule,
    IconModule,
    SpinnerModule,
    OutletModule,
    AddToCartModule,
    ConfigModule.withConfig(<CmsConfig>{
      cmsComponents: {
        SavedCartDetailsItemsComponent: {
          component: TaskSavedCartDetailsItemsComponent,
          guards: [AuthGuard],
        },
      },
    }),
  ],
  declarations: [TaskSavedCartDetailsItemsComponent],
  exports: [TaskSavedCartDetailsItemsComponent],
})
export class TaskSavedCartDetailsModule {}
