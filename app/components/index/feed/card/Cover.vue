<script setup lang="ts">
defineProps<{
  cover: string;
}>();
</script>

<style scoped>
.card-cover {
  width: var(--cover-width);
  aspect-ratio: 2 / 1;

  justify-self: flex-end;

  object-fit: cover;
  border-radius: var(--radius);
}

.feed-list[data-view-mode="block"] .card-cover {
  display: none;
}

@media (max-width: 576px) {
  .feed-list[data-view-mode="row"] .card-cover {
    width: calc(100% - calc(var(--padding) - 10px));
    justify-self: center;
  }
}
</style>

<template>
  <img :src="cover" alt="cover" class="card-cover select-none">
</template>