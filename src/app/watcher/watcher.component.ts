import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-watcher',
  templateUrl: './watcher.component.html',
  styleUrls: ['./watcher.component.scss']
})
export class WatcherComponent implements OnInit {
  @ViewChild('player', { static: true }) player: ElementRef;
  videoSrc: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.videoSrc = params.v;

      const videoUrl = `https://www.youtube.com/embed/${this.videoSrc}?autoplay=1`;
      this.player.nativeElement.src = videoUrl;
    });
  }
}
