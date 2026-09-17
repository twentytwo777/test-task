<script setup lang="ts">
const store = useFeedStore();
const { page, query, portals } = storeToRefs(store);
const { data } = useFetch('/api/feed', {
  key: 'feed:data',
  query: { page, query, portals },
  default: () => ({ items: [], totalPages: 0 })
});
</script>

<template>
  <IndexHeader />
  <div class="content-container ">
    <IndexFeedList :items="data.items" />
  </div>
  <IndexFooter :totalPages="data.totalPages" />
</template>