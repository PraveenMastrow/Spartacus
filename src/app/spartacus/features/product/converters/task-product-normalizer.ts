// import { Injectable } from '@angular/core';
// import { Occ } from '@spartacus/core';
// import { Converter } from '@spartacus/core';
// import { TaskProduct } from './task-product';

// // @Injectable({
// //   providedIn:'root',
// //   })
// export class TaskProductNormalizer
//   implements Converter<Occ.Product, TaskProduct>
// {
//   constructor()
//   {
//     console.log('TaskProductNormalizer called');
//   }
//   convert(source: any, target: TaskProduct) {
//     // target.taskAugment
//     target.taskUOM = source.taskUOM;
//     console.log('Name', source.name);
//     console.log('TaskUOM', source.taskUOM);
//     target.taskRating = source.taskRating;
//     return target;
//   }
// }
