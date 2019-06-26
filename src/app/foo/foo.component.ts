import { Component, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'eis-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {
  @Output() moin = new Subject();
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      this.moin.next('Moin!');
    }, 1500);
  }
}
