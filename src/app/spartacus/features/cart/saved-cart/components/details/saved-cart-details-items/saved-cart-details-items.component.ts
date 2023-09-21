/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SavedCartFacade } from '@spartacus/cart/saved-cart/root';
import {
  EventService,
  GlobalMessageService,
  RoutingService,
  TranslationService,
} from '@spartacus/core';
import {
  SavedCartDetailsItemsComponent,
  SavedCartDetailsService,
} from '@spartacus/cart/saved-cart/components';
import { TaskCartOutlets } from '../../../../cart-outlets-model';

@Component({
  selector: 'cx-saved-cart-details-items',
  templateUrl: './saved-cart-details-items.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskSavedCartDetailsItemsComponent extends SavedCartDetailsItemsComponent {

  readonly TaskCartOutlets = TaskCartOutlets;

  constructor(
    savedCartDetailsService: SavedCartDetailsService,
    savedCartService: SavedCartFacade,
    eventSercvice: EventService,
    globalMessageService: GlobalMessageService,
    routingService: RoutingService,
    translation: TranslationService
  ) {
    super(
      savedCartDetailsService,
      savedCartService,
      eventSercvice,
      globalMessageService,
      routingService,
      translation
    );
    console.log("TaskSavedCartDetailsItemsComponent", this.savedCart$.subscribe(x => console.log('Cart Code: ' + x?.code)));

  }
}
