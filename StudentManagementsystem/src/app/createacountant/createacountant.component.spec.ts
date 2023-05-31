import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateacountantComponent } from './createacountant.component';

describe('CreateacountantComponent', () => {
  let component: CreateacountantComponent;
  let fixture: ComponentFixture<CreateacountantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateacountantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateacountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
