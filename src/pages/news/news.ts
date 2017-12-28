import { Component, Input, ViewChild, Host, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides, App } from 'ionic-angular';
import { PressDirective } from '../../components/Directive/PressDirective';
import { myPages } from '../list/pWith';
import { ListPage } from '../list/list';
import { myIndex } from '../list/pIndex';
import { CategoryListService } from '../../serviceprovider/categoryList.service';
import { CategoryList } from '../../entities/categoryList';
import { StoriesPage } from '../stories/stories';
import { BrowsePage } from '../browse/browse';



@IonicPage()

@Component({
  selector: 'page-news',
  templateUrl: 'news.html',
  providers:[CategoryListService]
})
export class NewsPage {
  uImgWidth: string;
  aImgWidth: string;

  uImgHeight: string;
  aImgHeight: string;
  

  firstArticles1:CategoryList[];
  articles1:CategoryList[];

  baslik:string;
 
  @Input() oHeight;
  constructor(private app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    private myIndex: myIndex,
    private categoryListService: CategoryListService) {
    
  }
  
  onSwipeUp(e) {
    console.log(e);
    console.log("gelen index" +this.myIndex.index);
  
    let w=this.myIndex.index+1;
    console.log("gösterilen index" + w);
    this.myIndex.index=w;
   
    var a=new myPages();
   


    //this.app.getRootNav().setRoot(a.pages[w]);
    this.app.getRootNav().setRoot(NewsPage);
  }

  onSwipeDown(e) {    
    let w=this.myIndex.index-1;
    this.myIndex.index=w;
    
    var a=new myPages();    
   // this.app.getRootNav().setRoot(a.pages[w]);    

   if (this.myIndex.index==1) {
    this.app.getRootNav().setRoot(StoriesPage); 
   }
  else { 
    this.app.getRootNav().setRoot(NewsPage); 
  }
  }

  ionViewDidLoad() {   
    console.log('ionViewDidLoad NewsPage');
    this.getCategoryList();
  }

  getCategoryList() {
    let a=new myPages();
    let c=a.categories[this.myIndex.index];
    console.log('ionViewDidLoad NewsPage' +c);
    this.categoryListService.getServiceCategoryList(c)
      .subscribe(p => {
        this.articles1 = p.slice(1, 10);
        this.firstArticles1 = p.slice(0, 1);
        this.baslik=this.firstArticles1[0].category;
      })

  }

  itemTapped1(event, item) {
    
     this.navCtrl.push(BrowsePage, {
       item: item
     });
   }
}
