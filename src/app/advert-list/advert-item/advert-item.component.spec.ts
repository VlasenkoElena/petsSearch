import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertItemComponent } from './advert-item.component';

describe('AdvertItemComponent', () => {
  let component: AdvertItemComponent;
  let fixture: ComponentFixture<AdvertItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdvertItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvertItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
