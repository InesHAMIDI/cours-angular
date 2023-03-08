import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonneReactiveDetailsComponent } from './personne-reactive-details.component';

describe('PersonneReactiveDetailsComponent', () => {
  let component: PersonneReactiveDetailsComponent;
  let fixture: ComponentFixture<PersonneReactiveDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonneReactiveDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonneReactiveDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
