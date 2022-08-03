import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule, HttpClientModule ],
      declarations: [ FormComponent ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Qtd Campos Form', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#cadastro');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(4);
  });

  it('Valor inicial', () => {
    const formGroup = component.cadastro;
    const formValues = {
      name: null,
      email: null,
      cpf: null,
      phone: null
    }
    expect(formGroup.value).toEqual(formValues);
  });

  it('Form Válido', () => {
    const formName: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#cadastro').querySelectorAll('input')[0];
    const formEmail: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#cadastro').querySelectorAll('input')[1];
    const formCPF: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#cadastro').querySelectorAll('input')[2];
    const formPhone: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#cadastro').querySelectorAll('input')[3];

    formName.value = 'Tobias';
    formEmail.value = 'teste@teste.com';
    formCPF.value = '12345678910';
    formPhone.value = '11999999999';

    formName.dispatchEvent(new Event('input'));
    formEmail.dispatchEvent(new Event('input'));
    formCPF.dispatchEvent(new Event('input'));
    formPhone.dispatchEvent(new Event('input'));

    const isValid = component.cadastro.valid;

    fixture.whenStable().then(() => {
      expect(isValid).toBeTruthy();
    });
  });

  it('Form Inválido', () => {
    const formName: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#cadastro').querySelectorAll('input')[0];
    const formPhone: HTMLInputElement = fixture.debugElement.nativeElement.querySelector('#cadastro').querySelectorAll('input')[3];

    formName.value = 'Tobias';
    formPhone.value = '11999999999';

    formName.dispatchEvent(new Event('input'));
    formPhone.dispatchEvent(new Event('input'));
    
    const isValid = component.cadastro.valid;

    fixture.whenStable().then(() => {
      expect(isValid).toBeFalsy();
    });
  });
});
