import { Product } from '@spartacus/core';

export interface TaskProduct extends Product {
  taskUOM?: string;
  taskRating?: string;
}