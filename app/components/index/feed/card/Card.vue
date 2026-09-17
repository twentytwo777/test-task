<script setup lang="ts">
defineProps<{ item: FeedItem }>();
</script>

<style scoped>
.card {
  --padding: 30px;

  --cover-width: 200px;

  --footer-height: 30px;
  --footer-background: #FCFCFC;
  
  display: grid;
  grid-template-rows: 1fr calc(var(--footer-height) - 10px);

  gap: 20px;
  padding: var(--padding) var(--padding) calc(var(--padding) / 2);

  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.05),
    0px 2px 4px 0px rgba(0, 0, 0, 0.05);
  border-radius: var(--radius);
  background-color: var(--card);
}

.feed-list[data-view-mode="row"] .card {
  width: 100%;
  padding: var(--padding) 0 0 0;

  grid-template-rows: 1fr var(--footer-height);
  grid-template-columns: calc(var(--cover-width) + var(--padding)) 1fr;
}

.feed-list[data-view-mode="block"] .card {  
  min-height: var(--card-max-height);
}

@media (max-width: 576px) {
  .feed-list[data-view-mode="block"] .card {
    padding: var(--padding) 0 0;
    grid-template-rows: 1fr var(--footer-height);
  }

  .feed-list[data-view-mode="row"] .card {
    padding: calc(var(--padding) - 10px) 0 0;
    grid-template-rows: auto 1fr var(--footer-height);
    grid-template-columns: 1fr;
  }
}
</style>

<template>
  <div class="card">
    <IndexFeedCardCover :cover="item.cover" />
    <IndexFeedCardContent
      :url="item.url"
      :title="item.title"
      :subtitle="item.subtitle"
    />
    <IndexFeedCardFooter
      :hostname="item.hostname"
      :timestamp="item.timestamp"
    />
  </div>
</template>