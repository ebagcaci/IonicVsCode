import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthorChoiceService } from '../../serviceprovider/authorChoice.service';
import { Author } from '../../entities/author';
import { NativeStorage } from '@ionic-native/native-storage';

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad AuthorChoicesPage');
    this.getAuthorList();
  }

  authorChange(a, b) {
    console.log('s')
    console.log(b.Id);
    console.log(b.checked);
    this.author.find(x=>x.id==b.id).checked==b.checked;
    console.log(this.author);
    
    this.nativeStorage.setItem('s_author', this.author)
                          .then(() => console.log('Stored item!'),
                             error => console.error('Error storing item', error)
                          );

  }

  getAuthorList() {

    this.authorChoiceService.getServiceAuthor()
      .subscribe(p => {
        console.log(p);
        this.author = p
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
                    element.checked=true;
                  });
                  this.newMethod();
                }
              }, (error) => {
                console.log('hata');
                this.author.forEach(element => {
                  element.checked=true;                 
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
