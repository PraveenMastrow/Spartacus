/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { Component } from '@angular/core';
import {
  UntypedFormControl,
  UntypedFormGroup,
  Validators,
} from '@angular/forms';
import { CustomFormValidators } from '@spartacus/storefront';
import { RegisterComponent } from '@spartacus/user/profile/components';
import { TaskCustomFormValidators } from 'src/app/spartacus/features/services/task-custom-form.validators';

@Component({
  selector: 'cx-register',
  templateUrl: './register.component.html',
})
export class TaskRegisterComponent extends RegisterComponent {
  override registerForm: UntypedFormGroup = this.fb.group(
    {
      titleCode: [null],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, CustomFormValidators.emailValidator]],
      password: [
        '',
        [Validators.required, TaskCustomFormValidators.passwordValidator],
      ],
      passwordconf: ['', Validators.required],
      termsandconditions: [false, Validators.requiredTrue],
    },
    {
      validators: CustomFormValidators.passwordsMustMatch(
        'password',
        'passwordconf'
      ),
    }
  );
}
