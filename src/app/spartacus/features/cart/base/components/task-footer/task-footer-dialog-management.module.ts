/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {
  CmsConfig,
  FeaturesConfigModule,
  I18nModule,
  provideDefaultConfig,
} from '@spartacus/core';
import { defaultTaskFooterLayoutConfig } from './default-task-footer-layout.config';
import { TaskFooterOpenDialogComponent } from './open-dialog/task-footer-open-dialog.component';
import { KeyboardFocusModule } from '@spartacus/storefront';

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    FeaturesConfigModule,
    KeyboardFocusModule,
  ],
  providers: [
    provideDefaultConfig(defaultTaskFooterLayoutConfig),
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        TaskFooterOpenDialogComponent: {
          component: TaskFooterOpenDialogComponent,
        },
      },
    }),
  ],
  declarations: [TaskFooterOpenDialogComponent],
  exports: [TaskFooterOpenDialogComponent],
})
export class TaskFooterDialogManagementModule {}
