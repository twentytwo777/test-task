import Parser from 'rss-parser';

export type Item<U> = U & Parser.Item;

export abstract class BaseService<T = Record<string, any>, U = Record<string, any>> {
  private parser: Parser<T, U>;
  protected hostname: string;
  constructor(private readonly feedUrl: string, options: Parser.ParserOptions<T, U>) {
    const parsedUrl = URL.parse(this.feedUrl);
    if (!parsedUrl) {
      throw new Error(`Invalid feed URL provided: "${this.feedUrl}". Please ensure it is a valid absolute URL.`);
    };

    this.parser = new Parser(options);
    this.hostname = parsedUrl.hostname;
  };

  protected parseURL(): Promise<T & Parser.Output<U>> {
    return this.parser.parseURL(this.feedUrl);
  };

  protected abstract transformItem(item: Item<U>): FeedItem | null;

  protected parseDate(s: string): number {
    return Date.parse(s);
  };

  public async fetch(): Promise<FeedItem[]> {
    const { items } = await this.parseURL();
    return items.reduce<FeedItem[]>((accumulator, item) => {
      const transformed = this.transformItem(item);
      if (transformed) {
        accumulator.push(transformed);
      };
      return accumulator;
    }, []);
  };
};