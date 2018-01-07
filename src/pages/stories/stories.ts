import { Component, Input, ViewChild, Host, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, App, Platform } from 'ionic-angular';
import { PressDirective } from '../../components/Directive/PressDirective';
import { myPages } from '../list/pWith';
import { ListPage } from '../list/list';
import { NewsPage } from '../news/news';
import { SportPage } from '../sport/sport';
import { myIndex } from '../list/pIndex';
import { CategoryListService } from '../../serviceprovider/categoryList.service';
import { CategoryList } from '../../entities/categoryList';
import { BrowsePage } from '../browse/browse';
import { NativeStorage } from '@ionic-native/native-storage';
import { NewsService } from '../../serviceprovider/NewsService';
//import { SwipeVertical } from '../../components/Directive/SwipeVerticalDirective';


@IonicPage()
@Component({
  selector: 'page-stories',
  templateUrl: 'stories.html',
  providers: [CategoryListService,NewsService]
})
export class StoriesPage {

  @Output()
  uploaded: EventEmitter<string> = new EventEmitter();
  public userChanged = new EventEmitter();


  @ViewChild('mySlider') slider: Slides;
  @Input() uImgWidth;
  @Input() uImgHeight;
  @Input() aImgWidth;
  @Input() aImgHeight;
  firstArticles1: CategoryList[];
  articles1: CategoryList[];
  articles: any[];
  icons: string[];
  items: Array<{ title: string, note: string, icon: string }>;

//NativeStorage bir nevi session. authorsları hangilerini seçmiş ise oradan alıyoruz.author-changes.ts de NativeStorage yazıyoruz. buradan okuyarak webservice gönderiyorz.
  constructor(public platform: Platform,
    private app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    private myIndex: myIndex,
    private categoryListService: CategoryListService,
    private newsService: NewsService,
    private nativeStorage: NativeStorage) {

    platform.ready().then((readySource) => {
      this.uImgHeight = ((platform.height() - 56) * 0.7) + "px";
      this.aImgHeight = ((platform.height() - 56) * 0.3) + "px";

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



  }

  onSwipeUp(e) {
    console.log(e);
    console.log("sssssssssssssss");
    console.log(this.navCtrl.parent);
    console.log("sssssssssssssss");
    // this.uploaded.emit('complete');
    // this.userChanged.emit('this.userName');
    //  this.listPage.engin();
    // this.navCtrl.parent.getRootNav();
    let w = this.myIndex.index + 1;
    this.myIndex.index = w;
    console.log(w);
    var a = new myPages();
    let yy = a.pages[3];

    console.log("sgggggggggggggg" + yy);
    console.log("sgggggggggggggg" + NewsPage);
    //this.app.getRootNav().setRoot(a.pages[w]);
    //this.app.getRootNav().setRoot(SportPage);
    this.app.getRootNav().setRoot(NewsPage)

  }
  onSwipeDown(e) {
    if (this.myIndex.index > 1) {
      let w = this.myIndex.index - 1;
      this.myIndex.index = w;

      var a = new myPages();
      //this.app.getRootNav().setRoot(a.pages[w]); 
     
    }
  }

  mySwipeUpAction() {
    console.log("up");

  }
  mySwipeDownAction() {
    console.log("down");

  }

  ngAfterViewInit() {
    //  this.slider.autoplay = 2000;
    this.slider.pager = true;
    this.slider.autoplay = 0;
    this.slider.loop = false;
    this.slider.initialSlide = 0;
    this.slider.speed = 300;
    this.slider.slidesPerView = 'auto';
    this.slider.spaceBetween = 3;
  }

  SlideChanged() {
    console.log("Page2<<e------------SlideChanged");
    try {
      // this.AdjustHeight();
      var index = this.slider.getActiveIndex();
      console.log("Page2-----------slide CHANGED", index);
      //  let currentIndex = this.sliderVertical.getActiveIndex();
      //console.log("You are on Slide ", (currentIndex + 1));
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
    this.navCtrl.push(StoriesPage, {
      item: item
    });
  }

  itemTapped1(event, item) {
   
    this.navCtrl.push(BrowsePage, {
      item: item
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoriesPage');
    this.getCategoryList();
  }

  getCategoryList1(data) {

    this.newsService.getServiceNewsList(data)
    .subscribe(p => {
      this.articles1 = p.slice(1, 10);
      this.firstArticles1 = p.slice(0, 1);
    })


  };

  getCategoryList1eski(data) {

    this.categoryListService.getServiceCategoryList()
    .subscribe(p => {
      this.articles1 = p.slice(1, 10);
      this.firstArticles1 = p.slice(0, 1);
    })


  };
  getCategoryList() {
    
    this.nativeStorage.getItem('s_author')
    .then((data) => {
      if (data) {
        console.log(data[0])
        console.log(data[0].Id);
       console.log(data[0].authorName);
       console.log(data.Checked);
       this.getCategoryList1(data);

      } else {
       console.log('data boş')
      }
    }, (error) => {
    //  if(error.code.code==2) //item bulunamadı
      console.error(error);
      console.log("Error: " +error.code.code);
      console.log("Error getting item: " + error.code + " -- " + error.source + " -- " + error.exception);
      console.log('hata')
    });

   

  }

}
