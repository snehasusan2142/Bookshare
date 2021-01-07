import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorindividualComponent } from './authorindividual.component';

describe('AuthorindividualComponent', () => {
  let component: AuthorindividualComponent;
  let fixture: ComponentFixture<AuthorindividualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthorindividualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorindividualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
