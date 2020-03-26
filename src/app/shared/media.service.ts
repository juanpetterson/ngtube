import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { BrowseItem } from '../browse/browse-item/browse-item.model';

export interface YoutubeResponseData {
  kind: string;
  etag: string;
  nextPageToken: string;
  pageInfo: {
    totalResults: number;
    resulstPerPage: number;
  };
  items: [
    {
      id: string;
      snippet: {
        title: string;
        channelTitle: string;
        channelId: string;
        publishedAt: string;
        thumbnails: {
          default: {
            url: string;
          };
          medium: {
            url: string;
          };
        };
      };
      statistics: {
        viewCount: string;
      };
    }
  ];
}

@Injectable({ providedIn: 'root' })
export class MediaService {
  constructor(private http: HttpClient) {}

  fetchVideos() {
    let params = new HttpParams();
    params = params.set('part', 'snippet, statistics');
    params = params.set('chart', 'mostPopular');
    params = params.set('maxResults', '8');

    const channelsIds: string[] = [];

    return this.http
      .get<YoutubeResponseData>(
        `https://www.googleapis.com/youtube/v3/videos?key=${environment.youtubeApiKey}`,
        { params }
      )
      .pipe(
        map(responseData => {
          return responseData.items;
        }),
        map(items => {
          const listVideos: BrowseItem[] = [];
          items.map(item => {
            channelsIds.push(item.snippet.channelId);
            listVideos.push(
              new BrowseItem(
                item.id,
                item.snippet.title,
                item.snippet.channelTitle,
                item.snippet.channelId,
                '',
                item.statistics.viewCount,
                item.snippet.publishedAt,
                item.snippet.thumbnails.medium.url
              )
            );
          });

          return listVideos;
        }),
        map(items => {
          let channelsUrls: string[] = [];
          this.fetchChannels(channelsIds).subscribe(resChannelsUrls => {
            channelsUrls = resChannelsUrls;

            items.map((item, index) => {
              return (item.channelThumbnail = channelsUrls[index]);
            });
          });

          return items;
        })
      );
  }

  fetchChannels(channelsIds: string[]) {
    let params = new HttpParams();
    params = params.set('part', 'snippet');
    params = params.set('id', channelsIds.join(',') + '');

    return this.http
      .get<YoutubeResponseData>(
        `https://www.googleapis.com/youtube/v3/channels?key=${environment.youtubeApiKey}`,
        { params }
      )
      .pipe(
        map(responseData => {
          return responseData.items;
        }),
        map(items => {
          const channelsThumbnailUrl = [];
          items.map(item => {
            channelsThumbnailUrl.push(item.snippet.thumbnails.default.url);
          });

          return channelsThumbnailUrl;
        })
      );
  }
}
