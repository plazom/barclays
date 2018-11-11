import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortabletableComponent } from './sortabletable.component';

describe('SortabletableComponent', () => {
  let component: SortabletableComponent;
  let fixture: ComponentFixture<SortabletableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortabletableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortabletableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
