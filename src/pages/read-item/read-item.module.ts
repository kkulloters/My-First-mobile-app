import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadItemPage } from './read-item';

@NgModule({
  declarations: [
    ReadItemPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadItemPage),
  ],
})
export class ReadItemPageModule {}
