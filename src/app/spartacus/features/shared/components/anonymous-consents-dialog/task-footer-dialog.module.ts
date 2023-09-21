/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { I18nModule } from '@spartacus/core';
import { TaskFooterDialogComponent } from './task-footer-dialog.component';
import { ConsentManagementModule, IconModule, KeyboardFocusModule, SpinnerModule } from '@spartacus/storefront';

@NgModule({
  imports: [
    CommonModule,
    I18nModule,
    IconModule,
    SpinnerModule,
    ConsentManagementModule,
    KeyboardFocusModule,
  ],
  declarations: [TaskFooterDialogComponent],
  exports: [TaskFooterDialogComponent],
})

export class TaskFooterDialogModule {}
