import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKiComponent } from './edit-ki.component';

describe('EditKiComponent', () => {
  let component: EditKiComponent;
  let fixture: ComponentFixture<EditKiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditKiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditKiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
