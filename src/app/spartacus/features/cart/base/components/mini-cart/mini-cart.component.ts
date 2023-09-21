/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import {
  MiniCartComponent,
  MiniCartComponentService,
} from '@spartacus/cart/base/components/mini-cart';
import {
  ActiveCartFacade,
} from '@spartacus/cart/base/root';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'cx-mini-cart',
  templateUrl: './mini-cart.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskMiniCartComponent extends MiniCartComponent {
  entries$ = this.activeCartService
    .getEntries()
    .pipe(filter((entries) => entries.length > 0));

  constructor(
    miniCartComponentService: MiniCartComponentService,
    protected activeCartService: ActiveCartFacade
  ) {
    super(miniCartComponentService);
  }
}
