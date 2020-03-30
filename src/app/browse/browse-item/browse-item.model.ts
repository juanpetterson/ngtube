export class BrowseItem {
  public id: string;
  public title: string;
  public description: string;
  public channel: string;
  public channelId: string;
  public channelThumbnail: string;
  public views: string;
  public likes: string;
  public dislikes: string;
  public published: string;
  public thumbnail: string;

  constructor(
    id: string,
    title: string,
    description: string,
    channel: string,
    channelId: string,
    channelThumbnail: string,
    views: string,
    likes: string,
    dislikes: string,
    published: string,
    thumbnail: string
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.channel = channel;
    this.channelId = channelId;
    this.channelThumbnail = channelThumbnail;
    this.views = views;
    this.likes = likes;
    this.dislikes = dislikes;
    this.published = published;
    this.thumbnail = thumbnail;
  }
}
