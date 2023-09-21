import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule, NavigationModule } from '@spartacus/storefront';
import { AppComponent } from './app.component';
import { SpartacusModule } from './spartacus/spartacus.module';
import { provideConfig, CmsConfig } from '@spartacus/core';
import { TaskProductSummaryModule } from './spartacus/features/product/product-summary/product-summary.module';
import { TaskFlexComponentModule } from './spartacus/features/task-flex-component/task-flex-component.module';
import { ProductBindingModule } from './spartacus/features/product/product-binding-module';
import { TaskCartSharedModule } from './spartacus/features/cart/base/components/cart-shared/cart-shared.module';
import { TaskSavedCartDetailsModule } from './spartacus/features/cart/saved-cart/components/details';
import { TaskFooterDialogModule } from './spartacus/features/shared/components/anonymous-consents-dialog';
import { TaskFooterDialogManagementModule } from './spartacus/features/cart/base/components/task-footer';
import { TaskNavigationModule } from './spartacus/features/navigation/navigation-model';
import { MINI_CART_FEATURE } from '@spartacus/cart/base/root';
import { USER_PROFILE_FEATURE } from '@spartacus/user/profile/root';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    TaskProductSummaryModule,
    TaskFlexComponentModule,
    // TaskRegisterComponentModule,
    ProductBindingModule,
    TaskSavedCartDetailsModule,
    TaskCartSharedModule,
    TaskFooterDialogManagementModule,
    TaskFooterDialogModule,
    TaskNavigationModule,
    // TaskFooterNavigationModule,
    // TaskNavigationModule,
  ],
  providers: [
    provideConfig(<CmsConfig>{
      featureModules: {
        [MINI_CART_FEATURE]: {
          module: () =>
            import(
              './spartacus/features/cart/base/components/mini-cart/mini-cart.module'
            ).then((m) => m.TaskMiniCartModule),
        },
         featureModules: {
          [USER_PROFILE_FEATURE]: {
            cmsComponents: ['TaskRegisterComponent'],
          },
        },
        //   [USER_PROFILE_FEATURE]: {
        //   //   module: () =>
        //   //     import('@spartacus/user/account/components').then(
        //   //       (m) => m.UserAccountComponentsModule
        //   //     ),
        //   // },
      },
    }),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
