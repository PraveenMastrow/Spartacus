import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, CmsStructureConfig } from '@spartacus/core';
import { taskCmsConfig } from './task-content.config';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig(taskCmsConfig as CmsStructureConfig),
  ]
})
export class TaskFlexComponentModule { }
