import { AbstractControl, ValidationErrors } from '@angular/forms';
import { CustomFormValidators } from '@spartacus/storefront';
import { CUSTOM_PASSWORD_PATTERN } from './task-regex-pattern';

export class TaskCustomFormValidators extends CustomFormValidators {

  static override passwordValidator(
    control: AbstractControl
  ): ValidationErrors | null {
    const password = control.value as string;

    console.log("Password ::" , password);
    return password && (!password.length || password.match(CUSTOM_PASSWORD_PATTERN))
      ? null
      : { cxInvalidPassword: true };
  }
}
