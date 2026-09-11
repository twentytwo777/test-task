import Parser from 'rss-parser';

type MediaItem = {
    $: {
        url: string;
        type: string;
    };
};

type Item = {
    media?: MediaItem[];
};

export const parser = new Parser<{}, Item>({
    customFields: {
        item: [
            ['enclosure', 'media', { keepArray: true }]
        ]
    }
});