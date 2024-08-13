import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreezingManagementComponent } from './freezing-management.component';

describe('FreezingManagementComponent', () => {
  let component: FreezingManagementComponent;
  let fixture: ComponentFixture<FreezingManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreezingManagementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FreezingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
