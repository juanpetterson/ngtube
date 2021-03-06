import { Component, OnInit } from '@angular/core';
import { MediaService } from '../shared/media.service';
import { BrowseItem } from './browse-item/browse-item.model';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  isLoading = true;
  browseLists: BrowseItem[][] = [];

  constructor(private mediaService: MediaService) {}

  ngOnInit(): void {
    this.mediaService.fetchListVideos().subscribe(listVideos => {
      while (this.browseLists.length < 5) {
        this.browseLists.push(listVideos);
      }
      this.isLoading = false;
    });
  }
}
