import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MediaService } from '../shared/media.service';
import { BrowseItem } from '../browse/browse-item/browse-item.model';

@Component({
  selector: 'app-watcher',
  templateUrl: './watcher.component.html',
  styleUrls: ['./watcher.component.scss']
})
export class WatcherComponent implements OnInit {
  @ViewChild('player', { static: true }) player: ElementRef;
  videoSrc: string;
  videoItem: BrowseItem;
  relatedVideos: BrowseItem[];
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private mediaService: MediaService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.videoSrc = params.v;

      const videoUrl = `https://www.youtube.com/embed/${this.videoSrc}?autoplay=1`;
      this.player.nativeElement.src = videoUrl;
    });

    this.mediaService
      .fetchVideo(this.videoSrc)
      .subscribe((item: BrowseItem) => {
        this.videoItem = item;

        this.mediaService
          .fetchRelatedVideos(this.videoItem.id)
          .subscribe(relatedItems => {
            this.relatedVideos = relatedItems;
            this.isLoading = false;
          });
      });
  }
}
