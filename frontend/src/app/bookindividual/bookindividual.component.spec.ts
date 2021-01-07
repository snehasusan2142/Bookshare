import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookindividualComponent } from './bookindividual.component';

describe('BookindividualComponent', () => {
  let component: BookindividualComponent;
  let fixture: ComponentFixture<BookindividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookindividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookindividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
