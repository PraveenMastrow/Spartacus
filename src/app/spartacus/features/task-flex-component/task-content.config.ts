import { CmsPageConfig } from '@spartacus/core';
import { CmsStructureConfig } from '@spartacus/core';

import {
  CmsSearchBoxComponent,
  ContentSlotComponentData,
} from '@spartacus/core';


export const taskComponents: {[key: string]: ContentSlotComponentData | any;} = {

  // create flexcomponent frontend instead of impex (backend)
  SearchBoxComponent: {
    typeCode: 'SearchBoxComponent',
    flexType: 'SearchBoxComponent',
    displayProducts: true,
    displaySuggestions: true,
    maxProducts: 5,
    displayProductImages: true,
  } as CmsSearchBoxComponent,
};

export const taskPages: CmsPageConfig[] = [
  {
    // ignoreBackend: true,
    pageId: '/contact',
    template: 'ContentPage1Template',
    slots: {
      Section2C: {
        componentIds: ['SearchBoxComponent'],
      },
    },
  },
];

export const taskCmsConfig: CmsStructureConfig = {
  cmsStructure: {
    components: {
      ...taskComponents,
    },
    slots: {},
    pages: taskPages,
  },
};
