type GetFeedPageResult = {
  items: FeedItem[];
  totalPages: number;
};

const fetchFeed = defineCachedFunction(
  (portalId: PortalKeys): Promise<FeedItem[]> => {
    return PORTALS[portalId].service.fetch();
  },
  {
    name: 'news/portal',
    getKey: (portalId) => portalId,
    maxAge: 10 * 60
  }
);

const fetchFeeds = async (...portalIds: PortalKeys[]): Promise<FeedItem[]> => {
  const list = new Set<PortalKeys>(portalIds.length ? portalIds : PORTALS_KEYS);
  const promises: Promise<FeedItem[]>[] = [];
  for (const id of list) {
    promises.push(fetchFeed(id));
  };

  return (await Promise.all(promises)).flat();
};

export const getFeedPage = async (
  page: number,
  query: string | undefined,
  limit: number,
  ...portalIds: PortalKeys[]
): Promise<GetFeedPageResult> => {
  let feed = await fetchFeeds(...portalIds);
  if (query) {
    const desired = query.toLowerCase();
    feed = feed.filter(({ title, subtitle }) => (
      title.toLowerCase().includes(desired) || subtitle.toLowerCase().includes(desired)
    ));
  };

  const sorted = feed.sort((a, b) => b.timestamp - a.timestamp);
  const offset = (page - 1) * limit;
  return {
    items: sorted.slice(offset, offset + limit),
    totalPages: Math.ceil(sorted.length / limit)
  };
};