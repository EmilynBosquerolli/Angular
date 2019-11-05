import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodJokesComponent } from './good-jokes.component';

describe('GoodJokesComponent', () => {
  let component: GoodJokesComponent;
  let fixture: ComponentFixture<GoodJokesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodJokesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
