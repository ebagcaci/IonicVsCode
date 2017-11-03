import { Component, ViewChild } from '@angular/core';
import { NavController, Slides, ModalController, Platform } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('mySlider') slider: Slides;
  @ViewChild('mySlider1') slider1: Slides;
  sliderOptions: any;
  sliderOptions1: any;
  slideCount: number;
  articleOpen: boolean;
  articles: any[];

  uImgWidth:string;
  aImgWidth:string;
  
  uImgHeight:string;
  aImgHeight:string;
  
  


  constructor(public navCtrl: NavController, 
              public modalCtrl: ModalController,
              public platform: Platform) {

                platform.ready().then((readySource) => {
                  this.uImgWidth=(platform.width()-50) + "px";
                  this.uImgHeight=((platform.height()-50)*0.7) + "px";
                  this.aImgWidth=(platform.width()-50) + "px";
                  this.aImgHeight=((platform.height()-50)*0.3) + "px";
                });

    
    this.slideCount = 1;
    this.sliderOptions = {
      pager: true,
      autoplay: 0,
      loop: false,
      initialSlide: 0,
      speed: 300,
     // slidesPerView: 2,
      slidesPerView: 'auto',
    //  direction: 'vertical'
    spaceBetween: 3,
    }

    this.sliderOptions1 = {
      pager: true,
      autoplay: 0,
      loop: false,
      initialSlide: 0,
      speed: 300,
      direction: 'vertical'

    }

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

  }

  ngAfterViewInit() {
    //this.slider.autoplay = 2000;
     this.slider.pager= true;
    this.slider.autoplay= 0;
     this.slider.loop= false;
     this.slider.initialSlide= 0;
     this.slider.speed= 300;
     this.slider.slidesPerView= 'auto';
     this.slider.spaceBetween= 3;
 
 
     this.slider1.pager= true;
     this.slider1.autoplay= 0;
     this.slider1.loop= false;
     this.slider1.initialSlide= 0;
     this.slider1.speed= 300;
     this.slider1.direction='vertical';
 
 }
  ionViewDidLoad() {
    console.log('Hello FeedPage Page');
  }

  openArticle(article) {
    this.articleOpen = true;
 //   let modal = this.modalCtrl.create(ArticleComponent, {article: article});
  //  setTimeout(() => {
   //   modal.present();
    //  this.articleOpen = false;
   // }, 500)
  }

  setClass() {
    let classes = {
      'article-open': this.articleOpen
    };
    return classes;
  }

  onSlideChanged(index) {
    this.slideCount = index + 1;
  }

}
