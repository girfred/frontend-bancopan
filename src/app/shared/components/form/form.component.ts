import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from 'src/app/core/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

	cadastro: FormGroup;

	constructor(private fb: FormBuilder, private usersService: UsersService, @Inject(MAT_DIALOG_DATA) public data: {action: string, index: number, user: User}) {
		switch (data.action) {
			case 'Atualizar':
				this.cadastro = this.fb.group({
					name: [data.user.name, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]],
					email: [data.user.email, [Validators.required, Validators.email]],
					phone: [data.user.phone, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
					cpf: [data.user.cpf, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
				});
				break;
			default:
				this.cadastro = this.fb.group({
					name: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(256)]],
					email: [null, [Validators.required, Validators.email]],
					phone: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
					cpf: [null, [Validators.required, Validators.minLength(11), Validators.maxLength(11)]],
				});
				break;
		}
	}

	submit(): void {
		this.cadastro.markAllAsTouched();
		if(this.cadastro.invalid) {
			return;
		}

		switch(this.data.action) {
			case 'Cadastrar':
				this.usersService.insert(this.cadastro.value);
				break;
			case 'Atualizar':
				this.usersService.update(this.data.index, this.cadastro.value);
				break;
		}
	}
}
