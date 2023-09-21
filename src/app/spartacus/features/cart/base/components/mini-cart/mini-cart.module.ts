/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  I18nConfig,
  I18nModule,
  provideConfig,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import { IconModule } from '@spartacus/storefront';
import { TaskMiniCartComponent } from './mini-cart.component';
import { customTranslations, customTranslationChunksConfig } from 'src/assets/translation/translation';

@NgModule({
  imports: [CommonModule, RouterModule, UrlModule, IconModule, I18nModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        MiniCartComponent: {
          component: TaskMiniCartComponent,
        },
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: customTranslations,
        chunks: customTranslationChunksConfig, 
        fallbackLang: 'en',
      },
    }),
  ],
  declarations: [TaskMiniCartComponent],
  exports: [TaskMiniCartComponent],
})
export class TaskMiniCartModule {}
