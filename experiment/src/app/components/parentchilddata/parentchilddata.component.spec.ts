import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentchilddataComponent } from './parentchilddata.component';

describe('ParentchilddataComponent', () => {
  let component: ParentchilddataComponent;
  let fixture: ComponentFixture<ParentchilddataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentchilddataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentchilddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
