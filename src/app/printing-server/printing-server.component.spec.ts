import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingServerComponent } from './printing-server.component';

describe('PrintingServerComponent', () => {
  let component: PrintingServerComponent;
  let fixture: ComponentFixture<PrintingServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PrintingServerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintingServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
