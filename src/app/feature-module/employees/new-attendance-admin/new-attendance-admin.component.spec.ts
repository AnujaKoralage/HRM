import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAttendanceAdminComponent } from './new-attendance-admin.component';

describe('NewAttendanceAdminComponent', () => {
  let component: NewAttendanceAdminComponent;
  let fixture: ComponentFixture<NewAttendanceAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewAttendanceAdminComponent]
    });
    fixture = TestBed.createComponent(NewAttendanceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
