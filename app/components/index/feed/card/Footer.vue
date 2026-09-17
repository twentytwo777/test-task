<script setup lang="ts">
const props = defineProps<{
  hostname: string;
  timestamp: number;
}>();
const href = 'https://' + props.hostname;
</script>

<style scoped>
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: 0 0 var(--radius) var(--radius);
}

.feed-list[data-view-mode="row"] .card-footer {
  grid-column: span 2;

  padding: 0 30px;

  border-radius: 0 0 var(--radius) var(--radius);
  background-color: var(--footer-background);
}

.card-footer .footer-origin,
.card-footer .footer-date {
  color: #DCDCDC;
  font-size: 14px;
}

@media (max-width: 576px) {
  .feed-list[data-view-mode="row"] .card-footer {
    grid-column: initial;
  }

  .feed-list[data-view-mode="block"] .card-footer {
    padding: 0 var(--padding);
    background-color: var(--footer-background);
    border-radius: 0 0 var(--radius) var(--radius);
  }
}
</style>

<template>
  <div class="card-footer select-none">
    <a :href="href" target="_blank" class="footer-origin">{{ hostname }}</a>
    <NuxtTime
      class="footer-date"
      day="2-digit"
      month="2-digit"
      year="numeric"
      locale="ru-RU"
      :datetime="timestamp"
    />
  </div>
</template>