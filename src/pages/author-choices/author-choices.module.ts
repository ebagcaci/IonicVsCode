import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthorChoicesPage } from './author-choices';

@NgModule({
  declarations: [
    AuthorChoicesPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthorChoicesPage),
  ],
})
export class AuthorChoicesPageModule {}
