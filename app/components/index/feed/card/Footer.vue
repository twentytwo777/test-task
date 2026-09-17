<script setup lang="ts">
const dateFormat = new Intl.DateTimeFormat(
  'ru-RU',
  { day: '2-digit', month: '2-digit', year: 'numeric' }
);

defineProps<{
  origin: string;
  timestamp: number;
}>();
</script>

<style scoped>
.card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
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
    <a href="https://google.com" target="_blank" class="footer-origin">{{ origin }}</a>
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