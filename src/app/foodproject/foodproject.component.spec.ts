import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodprojectComponent } from './foodproject.component';

describe('FoodprojectComponent', () => {
  let component: FoodprojectComponent;
  let fixture: ComponentFixture<FoodprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
