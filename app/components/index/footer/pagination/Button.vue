<script setup lang="ts">
defineProps<{
  value: number;
  isActive?: boolean;
}>();
</script>

<style scoped>
.pagination-button {
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
}

.pagination-button {
  transition: 0.3s color;
}

.pagination-button:hover,
.pagination-button.active {
  color: var(--accent-foreground);
}
</style>

<template>
  <NuxtLink
    :to="`/${value}`"
    class="pagination-button"
    :class="[{ 'active pointer-none': isActive }]"
  >
    {{ value }}
  </NuxtLink>
</template>