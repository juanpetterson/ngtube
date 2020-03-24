import { Component, OnInit, OnDestroy } from '@angular/core';
import { MediaService } from 'src/app/shared/media.service';
import { BrowseItem } from '../browse-item/browse-item.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-browse-list',
  templateUrl: './browse-list.component.html',
  styleUrls: ['./browse-list.component.scss']
})
export class BrowseListComponent implements OnInit, OnDestroy {
  constructor(private mediaService: MediaService) {}
  listVideos: BrowseItem[] = [];
  subsription: Subscription;

  ngOnInit(): void {
    this.subsription = this.mediaService
      .fetchVideos()
      .subscribe(responseData => {
        // console.log(data);
        this.listVideos = responseData;
      });
  }

  ngOnDestroy() {
    this.subsription.unsubscribe();
  }
}
