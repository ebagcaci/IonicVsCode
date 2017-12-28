import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform, Slides, App } from 'ionic-angular';
import { StoriesPage } from '../stories/stories';
import { NewsPage } from '../news/news';
import { myIndex } from './pIndex';




@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  public pageIndex: number = 1;
  tab1 = StoriesPage;
  tab2 = NewsPage;


  selectedItem: any;


  uImgWidth: string;
  aImgWidth: string;

  uImgHeight: string;
  aImgHeight: string;
  oHeight: string;

 
  @ViewChild('myNav') nav: NavController
  // @ViewChild('mySlider') slider: Slides;
  @ViewChild('mySliderVertical') sliderVertical: Slides;
  ngAfterViewInit() {
    //this.slider.autoplay = 2000;
    // this.slider.pager = true;
    //this.slider.autoplay = 0;
    //this.slider.loop = false;
    //this.slider.initialSlide = 0;
    //this.slider.speed = 300;
    //this.slider.slidesPerView = 'auto';
    //this.slider.spaceBetween = 3;


    // this.sliderVertical.pager = true;
    // this.sliderVertical.autoplay = 0;
    // this.sliderVertical.loop = false;
    // this.sliderVertical.initialSlide = 0;
    // this.sliderVertical.speed = 300;
    // this.sliderVertical.direction = 'vertical';

  }


  constructor(

    public platform: Platform,
    public navCtrl:
      NavController,
    public navParams: NavParams,
    private myIndex: myIndex) {


    myIndex.index = 1;
    console.log('eeeeeeeeeeee' + myIndex.index);
    // console.log(this.sp);
    // this.sp.userChanged.subscribe(x => {
    // console.log('eeeeeeeeeeee');
    // this.engin();
    // })

    platform.ready().then((readySource) => {
      this.uImgWidth = (platform.width()) + "px";
      this.uImgHeight = ((platform.height() - 56) * 0.7) + "px";
      this.aImgWidth = (platform.width()) + "px";
      this.aImgHeight = ((platform.height() - 56) * 0.3) + "px";

      this.myIndex.cardImgHeight = (platform.height() - 56) + "px";
    });



    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies







    console.log("change of slidssse");
  }
  public engin() {
    console.log("sssssssssssssssrrrrrrrrrrr");
    this.nav.push(this.tab2);

  }
  someMethod(event) {
    console.log("sssssssssssssssrrrrrrrrrrrtttt");
  }


}
