import { TranslationChunksConfig, TranslationResources } from '@spartacus/core';
import { es } from './es';
import { en } from './en';

export const customTranslations: TranslationResources = {
  es,
  en,
};

export const customTranslationChunksConfig: TranslationChunksConfig = {
  taskTranslate: ['miniCart'],
  common: ['searchBox', 'productCarousel'],
};
