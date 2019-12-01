import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TownHouseComponent } from './town-house.component';

describe('TownHouseComponent', () => {
  let component: TownHouseComponent;
  let fixture: ComponentFixture<TownHouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TownHouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TownHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
