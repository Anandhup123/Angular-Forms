import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuefetchComponent } from './valuefetch.component';

describe('ValuefetchComponent', () => {
  let component: ValuefetchComponent;
  let fixture: ComponentFixture<ValuefetchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuefetchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuefetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
