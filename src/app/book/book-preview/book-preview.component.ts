import {
  Component,
  OnInit,
  Input,
  OnChanges,
  AfterContentChecked,
  AfterViewChecked,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'eis-book-preview',
  templateUrl: './book-preview.component.html',
  styleUrls: ['./book-preview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookPreviewComponent
  implements OnInit, OnChanges, AfterViewChecked, AfterContentChecked {
  @Input() book: Book;
  oldbook: Book;
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    console.log(this.book.title, 'ngOnChanges', changes);
    this.oldbook = { ...this.book };
  }
  ngAfterViewChecked(): void {}
  ngAfterContentChecked(): void {
    if (JSON.stringify(this.oldbook) !== JSON.stringify(this.book)) {
      console.log(this.book.title, 'ngAfterContentChecked');
      this.oldbook = { ...this.book };
      this.cdr.detectChanges();
    }
    // console.log(Object.is(this.oldbook, this.book));
  }

  ngOnInit() {}
}
