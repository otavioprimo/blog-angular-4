import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTutoriaisComponent } from './card-tutoriais.component';

describe('CardTutoriaisComponent', () => {
  let component: CardTutoriaisComponent;
  let fixture: ComponentFixture<CardTutoriaisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardTutoriaisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTutoriaisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
