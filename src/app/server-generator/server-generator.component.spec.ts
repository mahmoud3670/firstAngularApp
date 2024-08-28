import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServerGeneratorComponent } from './server-generator.component';

describe('ServerGeneratorComponent', () => {
  let component: ServerGeneratorComponent;
  let fixture: ComponentFixture<ServerGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServerGeneratorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServerGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
