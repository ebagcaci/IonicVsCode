import { StoriesPage } from "../stories/stories";
import { NewsPage } from "../news/news";
import { SportPage } from "../sport/sport";





export class myPages {

  categories={
    1:"",
    2:"haber",
    3:"spor"
  }
  pages = {
    1: StoriesPage,
    2: NewsPage,
    3: SportPage
  }
}


