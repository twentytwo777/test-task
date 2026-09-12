import Parser from 'rss-parser';

export abstract class BaseService<T = Record<string, any>, U = Record<string, any>> {
    constructor(private feedUrl: string, private parser: Parser<T, U>) {};

    protected parseURL(): Promise<T & Parser.Output<U>> {
        return this.parser.parseURL(this.feedUrl);
    };

    protected parseDate(s: string): number {
        return Date.parse(s);
    };

    public abstract fetch(): Promise<FeedResult>;
};