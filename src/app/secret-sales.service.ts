import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/merge';

@Injectable()
export class SecretSalesService {
  public appName: string;
  online$: Observable<boolean>;

  constructor() {
    this.online$ = Observable.merge(
      Observable.fromEvent(window, 'offline').map(() => false),
      Observable.fromEvent(window, 'online').map(() => true),
      Observable.create(sub => {
        sub.next(navigator.onLine);
        sub.complete();
      })
    );
  }
}
