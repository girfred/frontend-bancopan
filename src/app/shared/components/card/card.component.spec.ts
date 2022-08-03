import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CpfPipe } from '../../pipes/cpf.pipe';
import { PhonePipe } from '../../pipes/phone.pipe';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent, CpfPipe, PhonePipe ],
      providers: [ CpfPipe, PhonePipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
