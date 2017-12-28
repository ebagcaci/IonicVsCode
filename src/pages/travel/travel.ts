import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BrowserTab } from '@ionic-native/browser-tab';


/**
 * Generated class for the TravelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-travel',
  templateUrl: 'travel.html',
})
export class TravelPage {

  constructor(private browserTab: BrowserTab,
    public navCtrl: NavController,
    public navParams: NavParams) {
   
      // browserTab.isAvailable()
      // .then((isAvailable: boolean) => {

      //   if (isAvailable) {

      //     browserTab.openUrl('https://ionic.io');

      //   } else {

      //     // open URL with InAppBrowser instead or SafariViewController

      //   }

      // });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TravelPage');
  }

}
