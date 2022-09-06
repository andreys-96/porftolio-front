import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskCompoentComponent } from './task-compoent.component';

describe('TaskCompoentComponent', () => {
  let component: TaskCompoentComponent;
  let fixture: ComponentFixture<TaskCompoentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskCompoentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskCompoentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
