export class BrowseItem {
  public id: string;
  public title: string;
  public channel: string;
  public channelId: string;
  public channelThumbnail: string;
  public views: string;
  public published: string;
  public thumbnail: string;

  constructor(
    id: string,
    title: string,
    channel: string,
    channelId: string,
    channelThumbnail: string,
    views: string,
    published: string,
    thumbnail: string
  ) {
    this.id = id;
    this.title = title;
    this.channel = channel;
    this.channelId = channelId;
    this.channelThumbnail = channelThumbnail;
    this.views = views;
    this.published = published;
    this.thumbnail = thumbnail;
  }
}
