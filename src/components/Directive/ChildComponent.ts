import { Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'child-comp',

  })
  export class ChildDirective {
    @Output()
    uploaded:EventEmitter<string> = new EventEmitter();
  
    uploadComplete() {
      this.uploaded.emit('complete');
    }
}