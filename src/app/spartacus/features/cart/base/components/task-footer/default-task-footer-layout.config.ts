/*
 * SPDX-FileCopyrightText: 2023 SAP Spartacus team <spartacus-team@sap.com>
 *
 * SPDX-License-Identifier: Apache-2.0
 */

import { LayoutConfig, DIALOG_TYPE } from "@spartacus/storefront";
import { TaskFooterDialogComponent } from "src/app/spartacus/features/shared/components/anonymous-consents-dialog";


export const defaultTaskFooterLayoutConfig: LayoutConfig = {
  launch: {
    TASK_FOOTER_DIALOG: {
      inlineRoot: true,
      component: TaskFooterDialogComponent,
      dialogType: DIALOG_TYPE.DIALOG,
    },
  },
};
