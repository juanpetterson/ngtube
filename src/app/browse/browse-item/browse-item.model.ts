export class BrowseItem {
  public id: string;
  public title: string;
  public channel: string;
  public views: string;
  public published: string;
  public thumbnail: string;

  constructor(
    id: string,
    title: string,
    channel: string,
    views: string,
    published: string,
    thumbnail: string
  ) {
    this.id = id;
    this.title = title;
    this.channel = channel;
    this.views = views;
    this.published = published;
    this.thumbnail = thumbnail;
  }
}
