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
  constructor(private cdr: ChangeDetectorRef) {}
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    console.log(this.book.title, 'ngOnChanges', changes);
  }
  ngAfterViewChecked(): void {
    console.log(this.book.title, 'ngAfterViewChecked');
  }
  ngAfterContentChecked(): void {
    console.log(this.book.title, 'ngAfterContentChecked');
    this.cdr.detectChanges();
  }

  ngOnInit() {}
}
