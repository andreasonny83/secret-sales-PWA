import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MdSnackBar } from '@angular/material';

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

  constructor(
    private http: HttpClient,
    public snackBar: MdSnackBar,
  ) {
    this.dealsUrl = 'https://public-api.wowcher.co.uk/v1/deal/national-deal/home';
  }

  ngOnInit(): void {
    this.http
      .get(this.dealsUrl)
      .subscribe((data: any) => {
        this.deals = data.deals;
        console.log(this.deals);
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
    console.log(dealId);
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
