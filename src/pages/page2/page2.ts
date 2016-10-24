import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the Page2 page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Page2 Page');
  }
  goBack() {
    this.navCtrl.pop();
  }

}
