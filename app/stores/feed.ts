export const useFeedStore = defineStore('feed', () => {
  const pageParam = useRouteParams('page');
  const page = computed(() => Number(pageParam.value));
  const query = useRouteQuery<string | undefined>('q');
  const portals = useRouteQuery<string | undefined>('portals');
  const setPage = (newPage: number): void => {
    pageParam.value = `${Math.max(1, newPage)}`;
  };

  const setQuery = (newQuery?: string): void => {
    setPage(1);
    query.value = newQuery;
  };

  const setPortals = (newPortals?: string): void => {
    setPage(1);
    portals.value = newPortals;
  };

  const reset = () => {
    setPage(1);
    setQuery();
    setPortals();
  };

  setPage(1);
  return { page, query, portals, setPage, setQuery, setPortals, reset };
});