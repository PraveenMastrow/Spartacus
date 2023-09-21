/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { NgModule } from '@angular/core';
import { CmsConfig, I18nModule, provideDefaultConfig } from '@spartacus/core';
import { TaskProductSummaryComponent } from './product-summary.component';
import { CommonModule } from '@angular/common';
import { OutletModule } from '@spartacus/storefront';

@NgModule({
  imports: [CommonModule, OutletModule, I18nModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        ProductSummaryComponent: {
          component: TaskProductSummaryComponent,
        },
      },
    }),
  ],
  declarations: [TaskProductSummaryComponent],
  exports: [TaskProductSummaryComponent],
})
export class TaskProductSummaryModule {}
