import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mitarbeiter',
  templateUrl: './mitarbeiter.component.html',
  styleUrls: ['./mitarbeiter.component.scss'],
})
export class MitarbeiterComponent implements OnInit {
  mitarbeiterID = 5;
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    setInterval(() => this.mitarbeiterID++, 1500);
  }

  nav() {
    this.router.navigate(['4711'], { relativeTo: this.route });
  }
}
