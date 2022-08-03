import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  
  @Input() id: number = 0;
  @Input() nome: string = '';
  @Input() cpf: string = '';
  @Input() email: string = '';
  @Input() phone: string = '';

  @Output() click: EventEmitter<string> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  clickBotoes(acao: string) {
    this.click.emit(acao);
  }
}
