import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {DomSanitizer,SafeResourceUrl,} from '@angular/platform-browser';
/**
 * Generated class for the BrowsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-browse',
  templateUrl: 'browse.html',
})
export class BrowsePage {
  link: SafeResourceUrl;

  constructor(public sanitizer:DomSanitizer,public navCtrl: NavController, public navParams: NavParams) {
   this.link= this.sanitizer.bypassSecurityTrustResourceUrl(navParams.get('item'));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BrowsePage');
  }

}
