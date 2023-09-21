/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef,
  inject,
} from '@angular/core';
import { Router } from '@angular/router';
import { WindowRef } from '@spartacus/core';
import { HamburgerMenuService, LAUNCH_CALLER, LaunchDialogService, NavigationUIComponent } from '@spartacus/storefront';
import { take } from 'rxjs/operators';

@Component({
  selector: 'cx-navigation-ui-task',
  templateUrl: './navigation-ui.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskNavigationUIComponent extends NavigationUIComponent{
  
  // constructor(
  //   protected launchDialogService: LaunchDialogService,
  //   protected vcr: ViewContainerRef
  // ) {}
  @ViewChild('open') openElement: ElementRef | undefined;

   launchDialogService = inject(LaunchDialogService);
   vcr = inject(ViewContainerRef);

  openDialog(): void {
    const dialog = this.launchDialogService.openDialog(
      LAUNCH_CALLER.TASK_FOOTER_DIALOG,
      this.openElement,
      this.vcr
    );
    if (dialog) {
      dialog.pipe(take(1)).subscribe();
    }
  }

  override ngOnInit(): void {
      console.log("TaskNavigationUIComponent");
  }

}
