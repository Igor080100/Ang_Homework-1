import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatesComponent } from './gates.component';

describe('GatesComponent', () => {
  let component: GatesComponent;
  let fixture: ComponentFixture<GatesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GatesComponent]
    });
    fixture = TestBed.createComponent(GatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
