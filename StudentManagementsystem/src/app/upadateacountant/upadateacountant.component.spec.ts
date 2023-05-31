import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpadateacountantComponent } from './upadateacountant.component';

describe('UpadateacountantComponent', () => {
  let component: UpadateacountantComponent;
  let fixture: ComponentFixture<UpadateacountantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpadateacountantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpadateacountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
