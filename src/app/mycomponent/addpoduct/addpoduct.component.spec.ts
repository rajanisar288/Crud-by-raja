import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpoductComponent } from './addpoduct.component';

describe('AddpoductComponent', () => {
  let component: AddpoductComponent;
  let fixture: ComponentFixture<AddpoductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddpoductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpoductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
