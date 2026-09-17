<script setup lang="ts">
defineProps < {
  value: string;
  isActive?: boolean;
}>();
</script>

<style scoped>
.portals-item {
  font-weight: 700;
  transition: 0.3s color;
}

.portals-item:hover,
.portals-item.active {
  color: var(--accent-foreground);
}
</style>

<template>
  <button :class="['portals-item', { 'active': isActive }]">{{ value }}</button>
</template>