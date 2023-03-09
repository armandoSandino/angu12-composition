import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgMovieDetailComponent } from './ng-movie-detail.component';

describe('NgMovieDetailComponent', () => {
  let component: NgMovieDetailComponent;
  let fixture: ComponentFixture<NgMovieDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgMovieDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgMovieDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
