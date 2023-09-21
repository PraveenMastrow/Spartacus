
import { Product } from '@spartacus/core';

declare module '@spartacus/core' {
  interface Product {
    taskRating?: string;
    taskAugment?: string;
  
  }
}

declare module '@spartacus/storefront' {
  const enum LAUNCH_CALLER {
    TASK_FOOTER_DIALOG = 'TASK_FOOTER_DIALOG',
  }
}

// declare module '@spartacus/core/src/occ/occ-models/occ.models' {
//     export namespace Occ {
//       interface Product {
//         taskAttribute1?: string;
//       }
//     }
// }