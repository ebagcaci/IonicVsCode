import { Directive, ElementRef, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Gesture } from 'ionic-angular/gestures/gesture';
import { Events } from 'ionic-angular';
declare var Hammer: any
@Directive({
    selector: '[longPress]'
})
export class PressDirective implements OnInit, OnDestroy {
    @Output() onSwipeUp = new EventEmitter();
    @Output() onSwipeDown = new EventEmitter();

    el: HTMLElement;
    pressGesture: Gesture;
    private swipeGesture: Gesture;

    constructor(el: ElementRef) {
        this.el = el.nativeElement;
      
    }

    ngOnInit() {
        this.pressGesture = new Gesture(this.el);
        this.pressGesture.listen();
        this.pressGesture.on('press', e => {
            console.log('pressed!!');
        })

        this.swipeGesture = new Gesture(this.el, {
            recognizers: [
                [Hammer.Swipe, { direction: Hammer.DIRECTION_VERTICAL }]
            ]
        });
        this.swipeGesture.listen()
        this.swipeGesture.on('swipeup', e => {
            this.onSwipeUp.emit({ el: this.el });
            console.log('up!!!!!!!');
          
        });
        this.swipeGesture.on('swipedown', e => {
            this.onSwipeDown.emit({ el: this.el });
            console.log('up!!!!!!!');
          
        });

    }

    ngOnDestroy() {
        this.pressGesture.destroy();
    }
}