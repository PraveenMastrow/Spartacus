import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import {
  CmsConfig,
  GlobalMessageService,
  I18nModule,
  NotAuthGuard,
  provideDefaultConfig,
  UrlModule,
} from '@spartacus/core';
import {
  FormErrorsModule,
  NgSelectA11yModule,
  PasswordVisibilityToggleModule,
  SpinnerModule,
} from '@spartacus/storefront';
import { UserRegisterFacade } from '@spartacus/user/profile/root';
import { TaskRegisterComponent } from './register.component';
import { RegisterComponentService } from '@spartacus/user/profile/components';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    UrlModule,
    I18nModule,
    SpinnerModule,
    FormErrorsModule,
    NgSelectModule,
    NgSelectA11yModule,
    PasswordVisibilityToggleModule,
    // ConfigModule.withConfig({
    //   cmsComponents: {
    //     RegisterCustomerComponent: {
    //       component: TaskRegisterComponent,
    //       guards: [NotAuthGuard],
    //       providers: [
    //         {
    //           provide: RegisterComponentService,
    //           useClass: RegisterComponentService,
    //           deps: [UserRegisterFacade, GlobalMessageService],
    //         },
    //       ],
    //     },
    //   },
    // })
  ],
  providers: [
    // provideDefaultConfig(<CmsConfig>{
    //   cmsComponents: {
    //     RegisterCustomerComponent: {
    //       component: TaskRegisterComponent,
    //       guards: [NotAuthGuard],
    //       providers: [
    //         {
    //           provide: RegisterComponentService,
    //           useClass: RegisterComponentService,
    //           deps: [UserRegisterFacade, GlobalMessageService],
    //         },
    //       ],
    //     },
    //   },
    // }),
  ],
  declarations: [TaskRegisterComponent],
})
export class TaskRegisterComponentModule {}
