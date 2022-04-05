import { Component } from '@angular/core';
import { HOST } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app works!';

  constructor(private host: HOST) {
    console.log(this.host);
  }
  onTitleClicked($event) {
    console.log($event);
  }
}
