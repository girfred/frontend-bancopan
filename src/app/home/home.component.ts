import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UsersService } from '../core/users.service';
import { FormComponent } from '../shared/components/form/form.component';
import { User } from '../shared/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users: User[] = [];
  
  constructor(
    public dialog: MatDialog,
    private usersService: UsersService
  ) { }

  ngOnInit(): void {
    const storage = this.usersService.getLocal();
    if(storage) {
      this.users = JSON.parse(storage);
    } else {
      this.usersService.getApi().subscribe((users: User[]) => {
        this.users.push(...users);
        this.usersService.insert(JSON.stringify(this.users));
      });
    }

    this.usersService.checkStorage().subscribe((status: string) => {
      const storage = this.usersService.getLocal();
      if(storage) {
        this.users = JSON.parse(storage);
      }
    });
  }

  clickCard(event: string, index: number) {
    switch(event) {
      case 'edit':
        this.editUsuario(index, this.users[index]);
        break;
      case 'delete':
        this.deletaUsuario(index);
        break;
    }
  }

  adicionaUsuario() {
    this.dialog.open(FormComponent, {
      data: { action: 'Cadastrar' },
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '95%',
    });
  }

  editUsuario(id: number, user: User) {
    this.dialog.open(FormComponent, {
      data: { action: 'Atualizar', index: id, user: user },
      maxWidth: '100vw',
      maxHeight: '100vh',
      width: '95%',
    });
  }

  deletaUsuario(id: number) {
    this.users.splice(id, 1);
    this.usersService.delete(JSON.stringify(this.users));
  }

  limpaBanco() {
    this.usersService.clear();
  }
}
