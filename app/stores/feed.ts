export const useFeedStore = defineStore('feed', () => {
  const searchQuery = useRouteQuery<string | undefined>('q');
  const page = ref<number>(1);
  const query = ref<string | undefined>(searchQuery.value);
  const portals = ref<string | undefined>();
  const setPage = (newPage: number): void => {
    page.value = newPage;
  };

  const setQuery = (newQuery?: string) => {
    query.value = newQuery;
  };

  const setPortals = (newPortals?: string) => {
    portals.value = newPortals
  };

  const reset = () => {
    page.value = 1;
    query.value = undefined;
    portals.value = undefined;
  };

  return { page, query, setPage, setQuery, setPortals, reset };
});