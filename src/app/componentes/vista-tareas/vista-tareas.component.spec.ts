import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaTareasComponent } from './vista-tareas.component';

describe('VistaTareasComponent', () => {
  let component: VistaTareasComponent;
  let fixture: ComponentFixture<VistaTareasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaTareasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
