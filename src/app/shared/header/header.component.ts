import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  public appName: string;

  @Output()
  onSideNavClick: EventEmitter<void>;

  constructor() {
    this.onSideNavClick = new EventEmitter<void>();
  }

  ngOnInit() {}

  sideNavClick() {
    this.onSideNavClick.emit();
  }
}
