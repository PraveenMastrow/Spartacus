/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsNavigationComponent } from '@spartacus/core';
import { FooterNavigationComponent, CmsComponentData, NavigationService } from '@spartacus/storefront';


@Component({
  selector: 'cx-footer-navigation',
  templateUrl: './footer-navigation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFooterNavigationComponent extends FooterNavigationComponent{
  // node$: Observable<NavigationNode> = this.service.getNavigationNode(
  //   this.componentData.data$
  // );

  // styleClass$: Observable<string | undefined> = this.componentData.data$.pipe(
  //   map((d) => d?.styleClass)
  // );

  constructor(
     componentData: CmsComponentData<CmsNavigationComponent>,
     service: NavigationService
  ) {
    super(componentData,service);
    console.log("TaskFooterNavigationComponent");

  }
}
