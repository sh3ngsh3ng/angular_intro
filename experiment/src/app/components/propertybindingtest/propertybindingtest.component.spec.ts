import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertybindingtestComponent } from './propertybindingtest.component';

describe('PropertybindingtestComponent', () => {
  let component: PropertybindingtestComponent;
  let fixture: ComponentFixture<PropertybindingtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertybindingtestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertybindingtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
