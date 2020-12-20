import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteInteractionComponent } from './delete-interaction.component';

describe('DeleteInteractionComponent', () => {
  let component: DeleteInteractionComponent;
  let fixture: ComponentFixture<DeleteInteractionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteInteractionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteInteractionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
