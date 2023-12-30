import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelsListComponent } from './travels-list.component';

describe('TravelsListComponent', () => {
  let component: TravelsListComponent;
  let fixture: ComponentFixture<TravelsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
