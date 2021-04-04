import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CollectionContainerComponent } from './collection-container.component';

describe('CollectionContainerComponent', () => {
  let component: CollectionContainerComponent;
  let fixture: ComponentFixture<CollectionContainerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CollectionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
