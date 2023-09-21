import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {
  CmsConfig,
  ConfigModule,
  I18nModule,
  provideDefaultConfig,
} from '@spartacus/core';
import {
  NavigationModule,
  GenericLinkModule,
  IconModule,
} from '@spartacus/storefront';
import { TaskNavigationUIComponent } from './navigation/navigation-ui.component';
import { TaskFooterNavigationComponent } from './footer-navigation/footer-navigation.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NavigationModule,
    GenericLinkModule,
    I18nModule,
    IconModule,
  ],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        FooterNavigationComponent: {
          component: TaskFooterNavigationComponent,
        },
      },
    }),
  ],
  declarations: [TaskFooterNavigationComponent, TaskNavigationUIComponent],
  exports: [TaskFooterNavigationComponent, TaskNavigationUIComponent],
})
export class TaskNavigationModule {}
