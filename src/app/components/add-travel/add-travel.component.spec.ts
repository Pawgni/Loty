import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTravelComponent } from './add-travel.component';

describe('AddTravelComponent', () => {
  let component: AddTravelComponent;
  let fixture: ComponentFixture<AddTravelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTravelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTravelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
