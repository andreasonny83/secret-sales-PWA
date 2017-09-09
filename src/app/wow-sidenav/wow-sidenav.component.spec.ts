import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WowSidenavComponent } from './wow-sidenav.component';

describe('WowSidenavComponent', () => {
  let component: WowSidenavComponent;
  let fixture: ComponentFixture<WowSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WowSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WowSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
