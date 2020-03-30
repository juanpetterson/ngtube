import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngtube';
  theme = 'light';

  constructor(private location: Location) {}

  ngOnInit() {
    if (this.location.path().includes('watch')) {
      this.theme = 'dark';
    }
  }
}
