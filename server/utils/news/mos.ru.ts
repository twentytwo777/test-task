import { parser } from '~~/server/utils/news/parser'

import type { FeedResult, FeedItem } from '~~/server/utils/news/types';

const url = 'https://mos.ru/rss';

export const fetchFeed = async (): Promise<FeedResult> => {
    const feed = await parser.parseURL(url);
    const items: FeedItem[] = [];
    for (let i = 0; i < feed.items.length; i++) {
        const item = feed.items[i];
        if (!item.link || !item.title || !item.contentSnippet || !item.media || !item.isoDate) {
            continue;
        };

        items.push({
            link: item.link,
            title: item.title,
            description: item.contentSnippet,
            cover: item.media[item.media.length - 1].$.url,
            date: item.isoDate
        });
    };

    return { origin: 'mos.ru', items };
};