import { BaseService } from '~~/server/utils/feed/services/base';

type ItemFields = {
  enclosures?: EnclosureWrapper[];
};

export class StandardService extends BaseService<{}, ItemFields> {
  constructor(feedUrl: string) {
    super(feedUrl, {
      customFields: {
        item: [
          ['enclosure', 'enclosures', { keepArray: true }]
        ]
      }
    })
  };

  protected transformItem(item: Item<ItemFields>): FeedItem | null {
    const { link: url, enclosures, title, contentSnippet: subtitle, isoDate } = item;
    if (!url || !enclosures || !title || !subtitle || !isoDate) {
      return null;
    };

    const cover = enclosures[enclosures.length - 1].$.url;
    return {
      url, cover, title,
      subtitle, hostname: this.hostname, timestamp: this.parseDate(isoDate)
    };
  };
};