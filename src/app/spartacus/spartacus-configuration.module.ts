import { NgModule } from '@angular/core';
import { translationChunksConfig, translations } from '@spartacus/assets';
import {
  ConfigModule,
  FeaturesConfig,
  I18nConfig,
  OccConfig,
  ProductScope,
  SiteContextConfig,
  provideConfig,
} from '@spartacus/core';
import {
  OutletPosition,
  PDFModule,
  VideoModule,
  defaultCmsContentProviders,
  layoutConfig,
  mediaConfig,
  provideOutlet,
} from '@spartacus/storefront';
import { tasklayoutConfig } from './task-layout.config';
import {
  customTranslationChunksConfig,
  customTranslations,
} from 'src/assets/translation/translation';
import { CartOutlets } from '@spartacus/cart/base/root';
import { TaskCartItemListComponent } from './features/cart/base/components/cart-shared/cart-item-list/cart-item-list.component';

@NgModule({
  declarations: [],
  imports: [VideoModule, PDFModule],
  providers: [
    provideConfig(layoutConfig),
    provideConfig(mediaConfig),
    provideConfig(tasklayoutConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: 'https://localhost:9002',
          prefix: '/occ/v2/',
          endpoints: {
            product: {
              default:
                'products/${productCode}?fields=DEFAULT,averageRating,images(FULL),classifications,manufacturer,numberOfReviews,categories(FULL),baseOptions,baseProduct,variantOptions,variantType',
              list: 'products/${productCode}?fields=DEFAULT',
              details: 'products/${productCode}?fields=DEFAULT',
              variants: 'products/${productCode}?fields=DEFAULT',
            },
          },
          loadingScopes: {
            product: {
              details: {
                include: [ProductScope.LIST, ProductScope.VARIANTS],
              },
            },
          },
        },
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
        baseSite: ['electronics-spa', 'apparel-uk-spa', 'powertools-spa'],
        currency: ['USD', 'GBP'],
      },
      
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: customTranslations,
        chunks: customTranslationChunksConfig,
        fallbackLang: 'en',
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '6.3',
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),
  ],
})
export class SpartacusConfigurationModule {}
