import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MdSnackBar } from '@angular/material';
import { SecretSalesService } from '../secret-sales.service';
import { ActivatedRoute, ParamMap, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/switchMap';

interface IDeals {
  id: number;
  expiryDate: number;
  headline: string;
  title: string;
  urlPath: string;
  images: any[];
  discountPercentage: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dealsUrl: string;
  deals: IDeals[];
  dateNow: Date;

  private categoryName: any;
  private parentUrl: string;
  private firstRun: boolean;

  constructor(
    private http: HttpClient,
    public snackBar: MdSnackBar,
    private route: ActivatedRoute,
    private router: Router,
    private secretSalesService: SecretSalesService,
  ) {
    this.firstRun = true;
    this.dealsUrl = 'https://public-api.wowcher.co.uk/v1/deal/national-deal/home';
  }

  ngOnInit(): void {
    if (!/deal/.test(this.router.routerState.snapshot.url)) {
      this.parentUrl = this.router.routerState.snapshot.url;
    }

    this.fetchDeals();

    this.router
      .events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          if (/deal/.test(event.url)) {
            return;
          }

          if (event.url === this.parentUrl) {
            return;
          }

          this.parentUrl = event.url;
          this.deals = null;
          this.fetchDeals();
        }
      });

      this.secretSalesService.online$.subscribe((val) => {
        if (!val) {
          this.snackBar.open('You have lost your Internet connection.', null, {
            duration: 2000,
          });
        } else if (!this.firstRun) {
          this.snackBar.open('You are back online!', null, {
            duration: 2000,
          });
        }

        this.firstRun = false;

        if (!!val && !this.deals) {
          this.fetchDeals();
        }
      });
  }

  fetchDeals() {
    this.http
      .get(this.dealsUrl)
      .delay(2000)
      .subscribe((data: any) => {
        this.deals = data.deals;
      });

    this.startTimer();
  }

  startTimer() {
    setTimeout(() => {
      this.dateNow = new Date();
      this.startTimer();
    }, 1000);
  }

  selectDeal(dealId: number) {
    this.router.navigate([`${this.router.routerState.snapshot.url}/deal/${dealId}`]);
  }

  likeDeal(event) {
    event.stopPropagation();

    this.snackBar.open('Deal saved to favourites', null, {
      duration: 2000,
    });
  }

  convertDate(timestamp) {
    if (!this.dateNow) {
      return;
    }

    const time = new Date(timestamp);
    const hours: number = 24 - this.dateNow.getHours();
    const minutes: number = 60 - this.dateNow.getMinutes();
    const seconds: number = 60 - this.dateNow.getSeconds();
    let days: number = time.getDate();
    let msg: string;

    days = days > 7 ? 7 : days;
    msg = `${days} days and`;

    if (days === 0) {
      msg = 'Today, in';
    }

    return `${msg} ${hours}:${minutes}:${seconds}`;
  }

}
