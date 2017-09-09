import { Component, OnInit } from '@angular/core';
import { SecretSalesService } from './secret-sales.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  appName: string;

  constructor(
    private secretSalesService: SecretSalesService,
  ) {
    this.secretSalesService.appName = 'Secret Sales';
  }

  ngOnInit() {
    this.appName = this.secretSalesService.appName;
  }
}
