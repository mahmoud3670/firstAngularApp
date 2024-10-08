import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividulServerComponent } from './individul-server.component';

describe('IndividulServerComponent', () => {
  let component: IndividulServerComponent;
  let fixture: ComponentFixture<IndividulServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IndividulServerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndividulServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
