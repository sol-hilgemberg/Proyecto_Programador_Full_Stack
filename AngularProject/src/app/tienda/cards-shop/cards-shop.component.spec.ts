import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsShopComponent } from './cards-shop.component';

describe('CardsShopComponent', () => {
  let component: CardsShopComponent;
  let fixture: ComponentFixture<CardsShopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardsShopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardsShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
