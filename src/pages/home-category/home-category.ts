import { Component, ViewChild, Input, Output } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Slides, Tabs } from 'ionic-angular';
import { NewsPage } from '../news/news';
import { ScrollableTabs } from '../../components/scrollable-tabs/scrollable-tabs';
import { SportPage } from '../sport/sport';
import { TravelPage } from '../travel/travel';
/**
 * Generated class for the HomeCategoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()

@Component({
  selector: 'page-home-category',
  templateUrl: 'home-category.html',
})
export class HomeCategoryPage {
  @Output() myEvent = new ScrollableTabs();
  @Input('scrollable-tabs') ionTabs: Tabs;
  @ViewChild('pageSlider') pageSlider: Slides;
  NewsRoot: any = NewsPage;
  SportRoot: any = SportPage;
  TravelRoot: any = TravelPage;

  tabsColor: string = "default";
  tabsMode: string = "md";
  tabsPlacement: string = "top";
  scrollableTabsopts: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private toastCtrl: ToastController) {
  }

  ionViewDidEnter() {

  }

  changeWillSlide(a){
   
    a.selectedIndex=2;
    a._tabs[2].isSelected=true
  
  }


  refreshScrollbarTabs() {
    this.scrollableTabsopts = { refresh: true };
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomeCategoryPage');
  }

}
