import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividulUserComponent } from './individul-user.component';

describe('IndividulUserComponent', () => {
  let component: IndividulUserComponent;
  let fixture: ComponentFixture<IndividulUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividulUserComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividulUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
