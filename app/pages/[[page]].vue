<script setup lang="ts">
const store = useFeedStore();
const { page, query } = storeToRefs(store);
const { data } = useFetch('/api/feed', {
  key: 'feed:data',
  query: { page, query },
  default: () => ({ items: [], totalPages: 0 })
});
</script>

<template>
  <IndexHeader />
  <IndexFeedList :items="data.items" />
  <IndexFooter :totalPages="data.totalPages" />
</template>