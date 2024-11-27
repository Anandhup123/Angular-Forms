import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuepassComponent } from './valuepass.component';

describe('ValuepassComponent', () => {
  let component: ValuepassComponent;
  let fixture: ComponentFixture<ValuepassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValuepassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValuepassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
