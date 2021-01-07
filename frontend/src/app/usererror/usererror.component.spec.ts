import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsererrorComponent } from './usererror.component';

describe('UsererrorComponent', () => {
  let component: UsererrorComponent;
  let fixture: ComponentFixture<UsererrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsererrorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsererrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
