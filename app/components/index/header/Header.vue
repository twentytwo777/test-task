<script setup lang="ts">
const searchQuery = useRouteQuery<string | undefined>('q');
const search = ref<string | undefined>(searchQuery.value);
const { reset, setQuery } = useFeedStore();
const THRESHOLD_LENGTH = 3;

const onReset = (): void => {
  search.value = undefined;
  reset();
};

const debouncedSetQuery = useDebounceFn((newQuery: string) => {
  searchQuery.value = newQuery;
  setQuery(newQuery);
}, 300, { maxWait: 1000 });

const onUpdateSearch = (value: string): void => {
  const { isPending, cancel } = debouncedSetQuery;
  if (isPending.value) {
    cancel();
  };

  if (value.length < THRESHOLD_LENGTH) {
    searchQuery.value = undefined;
    return setQuery();
  };

  debouncedSetQuery(value);
};
</script>

<style scoped>
header {
  --column-gap: clamp(10px, 2.14dvw, 30px);

  position: sticky;
  top: 0;

  display: grid;
  grid-template-rows: repeat(2, 40px);
  grid-template-columns: 1fr minmax(0, 320px);

  gap: 26px var(--column-gap);
  padding: 36px 0 28px;

  background-color: var(--background);
}

@media (max-width: 576px) {
  header {
    align-items: initial;

    grid-template-columns: 1fr;
    grid-template-rows: initial;

    row-gap: 20px;
    padding: 36px 0 17px;
  }
}
</style>

<template>
  <header>
    <IndexHeaderTitle @reset="onReset" />
    <IndexHeaderSearch v-model="search" @update:model-value="onUpdateSearch" />
    <IndexHeaderSubmenu />
  </header>
</template>