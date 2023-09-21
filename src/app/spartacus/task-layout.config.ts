import { LayoutConfig, layoutConfig } from '@spartacus/storefront';

export const tasklayoutConfig: LayoutConfig = { 
  ...layoutConfig,
  layoutSlots: {
    
    MultiStepCheckoutSummaryPageTemplate: {
        header: {
            slots: ['SiteLogo', 'MiniCart'],
          },
      slots: ['TopContent', 'BodyContent', 'SideContent', 'BottomContent'],
    },


    
    ContentPage1Template: {
        // header:{
        //     slots: [],
        // },
        slots: ['Section2C'],
      },
  },
};
