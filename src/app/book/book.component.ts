import { Component, OnInit } from '@angular/core';
import { BookDataService } from './shared/book-data.service';

@Component({
  selector: 'book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
})
export class BookComponent implements OnInit {
  text =
    'ökdjshväsaldfkhsädfljhasdäfljaälfjädalfgkjdäfglkjadgälkadjgfädalfgkjdäfglkjdfäglkjdfgälk';
  constructor(private service: BookDataService) {}

  ngOnInit() {
    this.service.initState();
  }
}
