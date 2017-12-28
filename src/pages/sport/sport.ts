import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
import { myIndex } from '../list/pIndex';
import { myPages } from '../list/pWith';


/**
 * Generated class for the SportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sport',
  templateUrl: 'sport.html',
})
export class SportPage {

  constructor(private app: App,
    public navCtrl: NavController,
    public navParams: NavParams,
    private myIndex: myIndex) {
  }

  onSwipeUp(e) {
    console.log(e);
    console.log("gelen index" +this.myIndex.index);
  
    let w=this.myIndex.index+1;
    console.log("gösterilen index" + w);
    this.myIndex.index=w;
   
    var a=new myPages();
   


    this.app.getRootNav().setRoot(a.pages[w]);
    
  
    
  }


  onSwipeDown(e) {
    let w = this.myIndex.index - 1;
    this.myIndex.index = w;

    var a = new myPages();
    this.app.getRootNav().setRoot(a.pages[w]);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SportPage');
  }

}
