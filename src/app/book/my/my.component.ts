import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'eis-my',
  template: `<input type="text" [value]="name" (input)="setName($event)" />`,
})
export class MyComponent {
  @Input() name: string = '';
  @Output() nameChange = new EventEmitter<string>();
  constructor() {}

  setName(elem: InputEvent): void {
    console.log((elem.target as HTMLInputElement).value);
    this.nameChange.emit((elem.target as HTMLInputElement).value);
  }
}
