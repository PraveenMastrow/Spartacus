/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { LaunchDialogService, LAUNCH_CALLER } from '@spartacus/storefront';

import { take } from 'rxjs/operators';

@Component({
  selector: 'cx-task-footer-open-dialog',
  templateUrl: './task-footer-open-dialog.component.html',
})
export class TaskFooterOpenDialogComponent {
  @ViewChild('open') openElement: ElementRef | undefined;

  constructor(
    protected vcr: ViewContainerRef,
    protected launchDialogService: LaunchDialogService
  ) {}

  openDialog(): void {
  //   const dialog = this.launchDialogService.openDialog(
  //     LAUNCH_CALLER.TASK_FOOTER_DIALOG,
  //     this.openElement,
  //     this.vcr
  //   );
  //   if (dialog) {
  //     dialog.pipe(take(1)).subscribe();
  //   }
  // }
  const dialog = this.launchDialogService.openDialog(
    LAUNCH_CALLER.ANONYMOUS_CONSENT,
    this.openElement,
    this.vcr
  );
  if (dialog) {
    dialog.pipe(take(1)).subscribe();
  }
}
}
