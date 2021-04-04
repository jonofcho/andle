import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CollectionGridComponent } from './collection-grid.component';

describe('CollectionGridComponent', () => {
  let component: CollectionGridComponent;
  let fixture: ComponentFixture<CollectionGridComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
