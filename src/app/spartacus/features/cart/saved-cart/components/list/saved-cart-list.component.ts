
import {
  ChangeDetectionStrategy,
  Component,
  ViewContainerRef,
} from '@angular/core';
import { SavedCartListComponent } from '@spartacus/cart/saved-cart/components';
import {
  SavedCartFacade,
} from '@spartacus/cart/saved-cart/root';
import { RoutingService } from '@spartacus/core';
import { LaunchDialogService } from '@spartacus/storefront';

@Component({
  selector: 'cx-saved-cart-list',
  templateUrl: './saved-cart-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskSavedCartListComponent extends SavedCartListComponent {
  constructor(
    routing: RoutingService,
    savedCartService: SavedCartFacade,
    vcr: ViewContainerRef,
    launchDialogService: LaunchDialogService
  ) {
    console.log("TaskSavedCartListComponent");
    super(routing, savedCartService, vcr, launchDialogService);
  }
}
