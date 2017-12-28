import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from "@angular/http";
import { ScrollableTabs } from '../components/scrollable-tabs/scrollable-tabs';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ObjectFitImagesModule } from 'heilbaum-ionic-object-fit-images';
import { HomeCategoryPage } from '../pages/home-category/home-category';
import { NewsPage } from '../pages/news/news';
import { SportPage } from '../pages/sport/sport';
import { TravelPage } from '../pages/travel/travel';
import { StoriesPage } from '../pages/stories/stories';
import { PressDirective } from '../components/Directive/PressDirective';
import { myIndex } from '../pages/list/pIndex';

import { BrowserTab } from '@ionic-native/browser-tab';
import { BrowsePage } from '../pages/browse/browse';
import { AuthorChoicesPage } from '../pages/author-choices/author-choices';

import { NativeStorage } from '@ionic-native/native-storage';

//import { ChildComponent } from '../components/Directive/ChildComponent';
//import { SwipeVertical } from '../components/Directive/SwipeVerticalDirective';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    AuthorChoicesPage,
    HomeCategoryPage,
    NewsPage,
    SportPage,
    TravelPage,
    ScrollableTabs,
    StoriesPage,
    PressDirective,
    BrowsePage
   
    // ChildComponent
  //  SwipeVertical
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    ObjectFitImagesModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HomeCategoryPage,
    NewsPage,
    SportPage,
    TravelPage,
    StoriesPage,
    BrowsePage,
    AuthorChoicesPage
    
  ],
  providers: [
    {provide:"apiUrl",useValue:"http://www.bagcaci.somee.com/Publish/api/"},
    //{provide:"apiUrl",useValue:"http://localhost:52400/api/"},
    BrowserTab,
    StatusBar,
    SplashScreen,
    myIndex,
    NativeStorage,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
