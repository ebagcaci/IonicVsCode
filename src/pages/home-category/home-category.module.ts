import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeCategoryPage } from './home-category';

@NgModule({
  declarations: [
    HomeCategoryPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeCategoryPage),
  ],
})
export class HomeCategoryPageModule {}
