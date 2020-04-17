import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'eis-einer',
  templateUrl: './einer.component.html',
  styleUrls: ['./einer.component.scss'],
})
export class EinerComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    console.log(this.route.snapshot.params.id);
    this.route.params.subscribe((params) => console.log(params));
  }
}
