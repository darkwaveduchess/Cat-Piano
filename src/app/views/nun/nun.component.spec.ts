import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NunComponent } from './nun.component';

describe('NunComponent', () => {
  let component: NunComponent;
  let fixture: ComponentFixture<NunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NunComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
