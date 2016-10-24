import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {Page1} from '../pages/page1/page1';
import {Page2} from '../pages/page2/page2';
import {Page3} from '../pages/page3/page3';
import {Page4} from '../pages/page4/page4';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Page1,
    Page2,
    Page3,
    Page4
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: 'Go back',
      backButtonIcon: 'arrow-back'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Page1,
    Page2,
    Page3,
    Page4
  ],
  providers: []
})
export class AppModule {}
