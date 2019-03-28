import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdRowComponent } from './third-row.component';

describe('ThirdRowComponent', () => {
  let component: ThirdRowComponent;
  let fixture: ComponentFixture<ThirdRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
