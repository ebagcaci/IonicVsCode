import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Platform, Slides, App } from 'ionic-angular';

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  selectedItem: any;
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;


  uImgWidth: string;
  aImgWidth: string;

  uImgHeight: string;
  aImgHeight: string;
  oHeight: string;
  articles: any[];

  @ViewChild('mySlider') slider: Slides;
  @ViewChild('mySliderVertical') sliderVertical: Slides;
  ngAfterViewInit() {
    //this.slider.autoplay = 2000;
    this.slider.pager = true;
    this.slider.autoplay = 0;
    this.slider.loop = false;
    this.slider.initialSlide = 0;
    this.slider.speed = 300;
    this.slider.slidesPerView = 'auto';
    this.slider.spaceBetween = 3;


    //this.sliderVertical.pager = true;
    //this.sliderVertical.autoplay = 0;
    //this.sliderVertical.loop = false;
    //this.sliderVertical.initialSlide = 0;
    //this.sliderVertical.speed = 300;
    //this.sliderVertical.direction = 'vertical';

  }


  constructor(public platform: Platform, public navCtrl: NavController, public navParams: NavParams) {


    platform.ready().then((readySource) => {
      this.uImgWidth = (platform.width()) + "px";
      this.uImgHeight = ((platform.height() - 56) * 0.7) + "px";
      this.aImgWidth = (platform.width()) + "px";
      this.aImgHeight = ((platform.height() - 56) * 0.3) + "px";

      this.oHeight = (platform.height() - 56) + "px";
    });

    this.articles = [
      {
        title: 'Lets not React',
        author: 'Craig Michaels',
        tags: ['React', 'JS'],
        img: 'm2.jpg'
      },
      {
        title: 'The Beauty of Ionic 2',
        author: 'Mark Ronson',
        tags: ['Hybrid', 'Mobile'],
        img: 'm1.jpg'
      },
      {
        title: 'Bi-Angular',
        author: 'James Coor',
        tags: ['Angular', 'JS'],
        img: 'm3.jpg'
      },
      {
        title: 'Its a Knockout',
        author: 'Geoff Jorge',
        tags: ['Knockout', 'JS'],
        img: 'm4.jpg'
      }
    ]

    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
      'american-football', 'boat', 'bluetooth', 'build'];

    this.items = [];
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }





    console.log("change of slidssse");
  }
  SlideChanged() {
    console.log("Page2<<e------------SlideChanged");
    try {
      // this.AdjustHeight();
      var index = this.slider.getActiveIndex();
      console.log("Page2-----------slide CHANGED", index);
      let currentIndex = this.sliderVertical.getActiveIndex();
      console.log("You are on Slide ", (currentIndex + 1));
    }
    catch (e) {
      console.log(<Error>e.message);
    }
  }

  updateNumbers(swiper: any) {
    console.log("change of slidssse");
  }
  onIonDrag(event) {
    console.log("change of slidexxxx");
    //this.sliderVertical = event;

  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListPage, {
      item: item
    });
  }
}
