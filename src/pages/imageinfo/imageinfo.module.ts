import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageinfoPage } from './imageinfo';

@NgModule({
  declarations: [
    ImageinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(ImageinfoPage),
  ],
})
export class ImageinfoPageModule {}
