<script setup lang="ts">
defineProps<{
  url: string;
  title: string;
  subtitle: string;
}>();
</script>

<style scoped>
.card-content {
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  row-gap: 20px;
}

.feed-list[data-view-mode="row"] .card-content {
  width: calc(100% - var(--padding));
}

.feed-list[data-view-mode="block"] .card-content {
  justify-content: space-between;
}

.card-content .content-title {
  color: var(--accent-foreground);
  font-size: 18px;
  font-weight: 700;

  text-decoration: none;
  -webkit-line-clamp: 3;
}

.card-content .content-subtitle {
  font-size: 14px;
  font-weight: 400;
  -webkit-line-clamp: 2;
}

.card-content .content-href {
  font-size: 14px;
}

.feed-list[data-view-mode="row"] .content-href {
  display: none;
}

@media (max-width: 576px) {
  .card-content {
    justify-self: center;
  }

  .feed-list[data-view-mode="block"] .card-content {
    width: calc(100% - var(--padding));
  }

  .card-content .content-title,
  .card-content .content-subtitle {
    -webkit-line-clamp: initial;
  }

  .feed-list[data-view-mode="row"] .content-href {
    display: block;
  }
}
</style>

<template>
  <div class="card-content">
    <a :href="url" class="content-title line-clamp">{{ title }}</a>
    <h2 class="content-subtitle line-clamp">{{ subtitle }}</h2>
    <a :href="url" target="_blank" class="content-href select-none">Подробнее</a>
  </div>
</template>