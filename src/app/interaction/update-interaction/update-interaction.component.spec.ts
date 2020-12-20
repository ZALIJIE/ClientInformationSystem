import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInteractionComponent } from './update-interaction.component';

describe('UpdateInteractionComponent', () => {
  let component: UpdateInteractionComponent;
  let fixture: ComponentFixture<UpdateInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInteractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
