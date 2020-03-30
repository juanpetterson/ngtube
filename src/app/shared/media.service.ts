import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

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
        description: string;
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
      statistics?: {
        viewCount: string;
        likeCount: string;
        dislikeCount: string;
      };
    }
  ];
}

@Injectable({ providedIn: 'root' })
export class MediaService {
  constructor(private http: HttpClient) {}

  fetchListVideos() {
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
                item.snippet.description,
                item.snippet.channelTitle,
                item.snippet.channelId,
                '',
                item.statistics.viewCount,
                item.statistics.likeCount,
                item.statistics.dislikeCount,
                item.snippet.publishedAt,
                item.snippet.thumbnails.medium.url
              )
            );
          });

          return listVideos;
        }),
        tap(listVideos => {
          this.fetchChannels(channelsIds).subscribe(resChannelsUrls => {
            listVideos.map(item => {
              return (item.channelThumbnail = resChannelsUrls.get(
                item.channelId
              ));
            });
          });
        })
      );
  }

  fetchVideo(videoId: string) {
    let params = new HttpParams();
    params = params.set('part', 'snippet, statistics');
    params = params.set('id', videoId);

    return this.http
      .get<YoutubeResponseData>(
        `https://www.googleapis.com/youtube/v3/videos?key=${environment.youtubeApiKey}`,
        { params }
      )
      .pipe(
        map(response => {
          return response.items[0];
        }),
        map(item => {
          return new BrowseItem(
            item.id,
            item.snippet.title,
            item.snippet.description,
            item.snippet.channelTitle,
            item.snippet.channelId,
            '',
            item.statistics.viewCount,
            item.statistics.likeCount,
            item.statistics.dislikeCount,
            item.snippet.publishedAt,
            item.snippet.thumbnails.medium.url
          );
        }),
        tap(item => {
          this.fetchChannels([item.channelId]).subscribe(resChannelsUrls => {
            item.channelThumbnail = resChannelsUrls.get(item.channelId);
          });
        })
      );
  }

  fetchRelatedVideos(videoId: string) {
    let params = new HttpParams();
    params = params.set('part', 'snippet');
    params = params.set('relatedToVideoId', videoId);
    params = params.set('type', 'video');
    params = params.set('maxResults', '10');

    return this.http
      .get<YoutubeResponseData>(
        `https://www.googleapis.com/youtube/v3/search?key=${environment.youtubeApiKey}`,
        { params }
      )
      .pipe(
        map(response => {
          return response.items;
        }),
        map(items => {
          return items.map(item => {
            return new BrowseItem(
              item.id,
              item.snippet.title,
              item.snippet.description,
              item.snippet.channelTitle,
              item.snippet.channelId,
              '',
              '',
              '',
              '',
              item.snippet.publishedAt,
              item.snippet.thumbnails.medium.url
            );
          });
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
          const channelsThumbnailUrl = new Map();
          items.map(item => {
            channelsThumbnailUrl.set(
              item.id,
              item.snippet.thumbnails.default.url
            );
          });

          return channelsThumbnailUrl;
        })
      );
  }
}
