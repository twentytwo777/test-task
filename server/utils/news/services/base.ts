import Parser from 'rss-parser';

export abstract class BaseService {
    constructor(private feedUrl: string, private parser: Parser) {};

    protected parse() {
        return this.parser.parseURL(this.feedUrl);
    };

    public abstract fetch(): Promise<FeedResult>;
};