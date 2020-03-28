import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-watcher',
  templateUrl: './watcher.component.html',
  styleUrls: ['./watcher.component.scss']
})
export class WatcherComponent implements OnInit {
  @ViewChild('player', { static: true }) player: ElementRef;
  constructor() {}

  ngOnInit(): void {
    this.player.nativeElement.src =
      'https://www.youtube.com/watch?v=mzdQXyL61ak';
  }
}
