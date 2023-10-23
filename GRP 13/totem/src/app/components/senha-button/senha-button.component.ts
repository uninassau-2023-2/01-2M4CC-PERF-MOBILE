import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-senha-button',
  templateUrl: './senha-button.component.html',
  styleUrls: ['./senha-button.component.scss'],
})
export class SenhaButtonComponent {
  @Input() label: string = '';
  @Output() senhaClick = new EventEmitter<string>();

  constructor() {}

  emitSenha() {
    this.senhaClick.emit(this.label);
  }
}
