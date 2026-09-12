import Parser from 'rss-parser';
import { BaseService } from '~~/server/utils/news/services/base';

type ItemCustomFields = {
    media?: Enclosure[];
};

export class Service extends BaseService {
    constructor() {
        super('https://mos.ru/rss', new Parser<{}, ItemCustomFields>({
            customFields: {
                item: [
                    ['enclosure', 'media', { keepArray: true }]
                ]
            }
        }));
    };

    public async fetch() {
        const feed = await this.parse();
        const items: FeedResult = [];
        for (let i = 0; i < feed.items.length; i++) {
            const item = feed.items[i];
            if (!item.link || !item.title || !item.contentSnippet || !item.media || !item.isoDate) {
                continue;
            };

            items.push({
                url: item.link,
                cover: item.media[item.media.length - 1].$.url,
                title: item.title,
                subtitle: item.contentSnippet,
                timestamp: Date.parse(item.isoDate)
            });
        };

        return items;
    };
};