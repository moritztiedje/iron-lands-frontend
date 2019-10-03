import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationMenuMobileComponent } from './navigation-menu-mobile.component';

describe('NavigationMenuMobileComponent', () => {
  let component: NavigationMenuMobileComponent;
  let fixture: ComponentFixture<NavigationMenuMobileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationMenuMobileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationMenuMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
