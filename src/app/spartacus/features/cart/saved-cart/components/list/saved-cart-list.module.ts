/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  AuthGuard,
  CmsConfig,
  I18nModule,
  provideDefaultConfig,
  UrlModule,
  FeaturesConfigModule,
  ConfigModule,
} from '@spartacus/core';
import { ListNavigationModule, SpinnerModule } from '@spartacus/storefront';
import { TaskSavedCartListComponent } from './saved-cart-list.component';

@NgModule({
  imports: [
    CommonModule,
    UrlModule,
    RouterModule,
    ListNavigationModule,
    I18nModule,
    SpinnerModule,
    FeaturesConfigModule,
    ConfigModule.withConfig({
      cmsComponents: {
        AccountSavedCartHistoryComponent: {
          component: TaskSavedCartListComponent,
          guards: [AuthGuard],
        },
      },
    }),
  ],
  providers: [
    // provideDefaultConfig(<CmsConfig>{
    //   cmsComponents: {
    //     AccountSavedCartHistoryComponent: {
    //       component: TaskSavedCartListComponent,
    //       guards: [AuthGuard],
    //     },
    //   },
    // }),
  ],
  declarations: [TaskSavedCartListComponent],
  exports: [TaskSavedCartListComponent],
})
export class TaskSavedCartListModule {}
