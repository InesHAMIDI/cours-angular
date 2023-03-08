import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneReactiveComponent } from './personne-reactive.component';

describe('PersonneReactiveComponent', () => {
  let component: PersonneReactiveComponent;
  let fixture: ComponentFixture<PersonneReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonneReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
