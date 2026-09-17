import Parser from 'rss-parser';

type CustomItems = Partial<{
  enclosures: Enclosure[];
}>;

type Item<U> = Parser.Item & (
  [U] extends [never] ? CustomItems : U
);

type Output<U> = Omit<Parser.Output<{}>, 'items'> & {
  items: Item<U>[];
};

type ParseResult<T, U = never> = T & Output<U>;

export abstract class BaseService<
  T extends Record<string, any> = Record<string, any>,
  U extends Record<string, any> = never
> {
  private readonly parser: Parser<T, U>;
  private readonly origin: string;
  constructor(private readonly feedUrl: string, options?: Parser.ParserOptions<T, U>) {
    this.parser = new Parser({
      customFields: {
        item: [
          ['enclosure', 'enclosures', { keepArray: true }]
        ]
      }
    });
    this.origin = 'mos.ru';
  };

  protected parseURL(): Promise<ParseResult<T, U>> {
    return this.parser.parseURL(this.feedUrl);
  };

  protected parseDate(s: string): number {
    return Date.parse(s);
  };

  public async fetch(): Promise<FeedItem[]> {
    const feed: ParseResult<T> = await this.parseURL();
    return feed.items.reduce<FeedItem[]>((accumulator, currentValue) => {
      const { link: url, enclosures, title, contentSnippet: subtitle, isoDate } = currentValue;
      if (!url || !enclosures || !title || !subtitle || !isoDate) {
        return accumulator;
      };

      const cover = enclosures[enclosures.length - 1].$.url;
      const timestamp = this.parseDate(isoDate);
      accumulator.push({ url, origin: this.origin, cover, title, subtitle, timestamp });
      return accumulator;
    }, []);
  };
};