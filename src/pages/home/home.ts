import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import {Page1} from "../page1/page1";
import {Page2} from "../page2/page2";
import {Page3} from "../page3/page3";
import {Page4} from "../page4/page4";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToPage1() {
    this.navCtrl.push(Page1);
  }
  goToPage2() {
    this.navCtrl.push(Page2);
  }
  goToPage3() {
    this.navCtrl.push(Page3);
  }
  goToPage4() {
    this.navCtrl.push(Page4);
  }
}
