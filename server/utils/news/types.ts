export type FeedItem = {
    link: string;
    title: string;
    description: string;
    cover: string;
    date: string;
};

export type FeedResult = {
    origin: string;
    items: FeedItem[];
};