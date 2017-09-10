import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

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

  constructor(
    private router: Router,
  ) {
    this.onSideNavClick = new EventEmitter<void>();
  }

  ngOnInit() {}

  sideNavClick() {
    this.onSideNavClick.emit();
  }

  routeTo(event: MouseEvent, path: string) {
    event.preventDefault();
    this.router.navigate([`/home/${path}`]);
  }
}
