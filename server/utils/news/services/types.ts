export type Enclosure = {
    $: {
        url: string;
        type: string;
    };
};

export type FeedItem = {
    url: string;
    cover: string;
    title: string;
    subtitle: string;
    timestamp: number;
};

export type FeedResult = FeedItem[];