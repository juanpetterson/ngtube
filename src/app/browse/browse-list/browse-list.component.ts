import { Component, OnInit, OnDestroy, Input } from '@angular/core';
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
  @Input() browseItems: BrowseItem[];
  channelsIds: string[] = [];
  channelsUrls: string[] = [];
  subscription: Subscription;

  ngOnInit(): void {
    this.browseItems.map((browseItem: BrowseItem) => {
      this.channelsIds.push(browseItem.channelId);
    });
    this.loadChannels();
  }

  loadChannels() {
    this.mediaService
      .fetchChannels(this.channelsIds)
      .subscribe(channelsUrls => {
        this.channelsUrls = channelsUrls;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
