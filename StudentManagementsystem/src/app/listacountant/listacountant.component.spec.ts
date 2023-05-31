import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListacountantComponent } from './listacountant.component';

describe('ListacountantComponent', () => {
  let component: ListacountantComponent;
  let fixture: ComponentFixture<ListacountantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListacountantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListacountantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
