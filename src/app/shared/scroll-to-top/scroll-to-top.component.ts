import { Component, OnInit, Input } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss']
})
export class ScrollToTopComponent implements OnInit {
  @Input()
  public target: string;

  @Input()
  public threshold: number;

  public visible: boolean;

  constructor() {
    this.threshold = this.threshold || 300;
  }

  ngOnInit(): void {
    const content = document.querySelector(this.target);

    Observable.fromEvent(content, 'scroll')
      .map(() => content.scrollTop)
      .subscribe((yPos: number) => this.toggleElement(yPos));
  }

  toggleElement(yPos: number) {
    this.visible = yPos > this.threshold ? true : false;
  }

  public scrollToTop(): void {
    if (!this.target) {
      return;
    }

    this.scrollLoop();
  }

  private scrollLoop(): void {
    setTimeout(() => {
      const elPos = document.querySelector(this.target).scrollTop;

      if (elPos > 0) {
        document.querySelector(this.target).scrollTop -= (50 + (elPos / 25));
        return this.scrollLoop();
      }
    }, 1);
  }
}
