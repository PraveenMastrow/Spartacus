
import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
} from '@angular/core';
import {
  AnonymousConsentsConfig,
  AnonymousConsentsService,
} from '@spartacus/core';
import {
  AnonymousConsentDialogComponent,
  LaunchDialogService,
} from '@spartacus/storefront';

@Component({
  selector: 'cx-anonymous-consent-dialog',
  templateUrl: './task-footer-dialog.component.html',
})
export class TaskFooterDialogComponent extends AnonymousConsentDialogComponent {
  // @HostListener('click', ['$event'])
  // handleClick(event: UIEvent): void {
  //   // Close on click outside the dialog window
  //   if ((event.target as any).tagName === this.el.nativeElement.tagName) {
  //     this.close('Cross click');
  //   }
  // }

  // constructor(
  //   protected config: AnonymousConsentsConfig,
  //   protected anonymousConsentsService: AnonymousConsentsService,
  //   protected el: ElementRef,
  //   protected launchDialogService: LaunchDialogService
  // ) {
  //   console.log("TaskFooterDialogComponent");
  // }

  // ngOnInit(): void {}

  // close(reason?: any): void {
  //   this.launchDialogService.closeDialog(reason);
  // }

  // ngOnDestroy(): void {
  //   // this.subscriptions.unsubscribe();
  // }
}
