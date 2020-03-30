import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  classTheme: {};
  @Input() theme: string;

  constructor() {}

  ngOnInit(): void {
    this.classTheme = { [this.theme]: true };
  }
}
