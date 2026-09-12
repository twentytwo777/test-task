const makeRequests = (): Promise<FeedResult[]> => {
    const values = Object.values(PORTALS);
    const promises: Promise<FeedResult>[] = [];
    for (let i = 0; i < values.length; i++) {
        promises.push(values[i].service.fetch())
    };

    return Promise.all(promises);
};

const fetchRawFeeds = async (): Promise<FeedResult> => {
    const feeds = await makeRequests();
    return feeds.flat().sort((a, b) => b.timestamp - a.timestamp);
};

export const fetchFeeds = defineCachedFunction(fetchRawFeeds, {
    name: 'cache',
    getKey: () => 'feeds',
    maxAge: 10 * 60
});