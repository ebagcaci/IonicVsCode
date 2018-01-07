import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthorChoiceService } from '../../serviceprovider/authorChoice.service';
import { Author } from '../../entities/author';
import { NativeStorage } from '@ionic-native/native-storage';
import { reorderArray } from 'ionic-angular';
/**
 * Generated class for the AuthorChoicesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-author-choices',
  templateUrl: 'author-choices.html',
  providers: [AuthorChoiceService]
})
export class AuthorChoicesPage {
  author: Author[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private authorChoiceService: AuthorChoiceService,
    private nativeStorage: NativeStorage) {
  }

  reorderItems(indexes) {
    console.log(JSON.stringify(indexes))   

   this.author = reorderArray(this.author, indexes);
  let s=1;
   this.author.forEach(element => {
    element.OrderNo=s;      
    s=s+1;           
  });
  this.nativeStorage.setItem('s_author', this.author)
                          .then(() => console.log('Stored item!'),
                             error => console.error('Error storing item', error)
                          );
    console.log(JSON.stringify(this.author))
    //console.log('element' + this.author[indexes.from])
   
   // let element = this.author[indexes.from];
   // this.author.splice(indexes.from, 1);
    //this.author.splice(indexes.to, 0, element);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthorChoicesPage');
    this.getAuthorList();
  }

  authorChange(a, b) {
    console.log('s')
    console.log(b.Id);
    console.log(b.Checked);
    this.author.find(x=>x.Id==b.Id).Checked==b.Checked;
    console.log(this.author);
    
    this.nativeStorage.setItem('s_author', this.author)
                          .then(() => console.log('Stored item!'),
                             error => console.error('Error storing item', error)
                          );

  }

  getAuthorList() {

    // sayfa ilk istendiğinde servise gidiliyor. this.author dolduruluyor
    //sonra storage bakılıyor. 
        //kayıt var ise this.author storage den yenileniyor
        // kayıt yok veya sotage hata alırsa ise this.author hepsi selected true yapılıyor.
    this.authorChoiceService.getServiceAuthor()
      .subscribe(p => {
        console.log(p);
        this.author = p

        this.author.forEach(element => {
          element.OrderNo=element.Id;
        });

        this.nativeStorage.getItem('s_author')
              .then((data) => {
                if (data) {
                  console.log('data:'+ data.author);
                  
                 this.author=data;
                 this.newMethod();
                 console.log('author:'+ this.author);
                } else {
                  console.log('hepsi true');
                  this.author.forEach(element => {
                    element.Checked=true;
                  });
                  this.newMethod();
                }
              }, (error) => {
                console.log('hata');
                this.author.forEach(element => {
                  element.Checked=true;                 
                });
                this.newMethod();
              });     
             
      })

  }


  private newMethod() {
    console.log('authorx:' + this.author);
    this.nativeStorage.setItem('s_author', this.author)
      .then(() => console.log('Stored item!'), error => console.error('Error storing item', error));
  }
}
