import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildparentdataComponent } from './childparentdata.component';

describe('ChildparentdataComponent', () => {
  let component: ChildparentdataComponent;
  let fixture: ComponentFixture<ChildparentdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildparentdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildparentdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
