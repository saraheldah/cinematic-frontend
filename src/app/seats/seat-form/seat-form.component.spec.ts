import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatFormComponent } from './seat-form.component';

describe('SeatFormComponent', () => {
  let component: SeatFormComponent;
  let fixture: ComponentFixture<SeatFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeatFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeatFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
