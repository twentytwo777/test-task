<script setup lang="ts">
const viewStore = useViewStore();
defineProps<{
  items: FeedItem[];
}>();
</script>

<style scoped>
.feed-list {
  --gap: 20px;
  --card-max-height: calc(((var(--content-size) / 2) - 10px) / 2);

  display: grid;

  gap: 20px;
  padding: 4px 0 4px;

  align-content: flex-start;
  grid-template-columns: 1fr;
}

.feed-list[data-view-mode="block"] {
  --size: min(var(--content-size), var(--content-dynamic-size));
  --column-size: calc((var(--size) / 2) - 10px);

  grid-template-columns: repeat(auto-fill, minmax(var(--column-size), 1fr));
}

.feed-list:has(> .empty) {
  height: 100%;
  padding: 0;
  align-content: initial;
  grid-template-columns: 1fr;
}

@media (max-width: 576px) {
  .feed-list,
  .feed-list[data-view-mode="block"] {
    grid-template-columns: 1fr;
  }

  .feed-list[data-view-mode="block"] {
    grid-template-rows: initial;
  }
}
</style>

<template>
  <div class="feed-list" :data-view-mode="viewStore.mode">
    <IndexFeedCard v-if="items.length" v-for="item in items" :item="item" />
    <IndexFeedEmpty v-else />
  </div>
</template>