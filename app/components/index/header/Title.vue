<script setup lang="ts">
import ReloadIcon from '~/assets/img/reload.svg?component';

const emit = defineEmits<{
  (e: 'reset'): void
}>();
</script>

<style scoped>
.header-title {
  min-width: max-content;

  display: flex;
  align-items: center;

  column-gap: var(--column-gap);
}

.header-title .title-value {
  font-size: 36px;
}

.header-title .title-reload {
  width: 40px;
  aspect-ratio: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.05),
    0px 2px 4px 0px rgba(0, 0, 0, 0.05);
  border-radius: 50%;
  background-color: #FFFFFF;
}

.title-reload svg {
  transition: 0.3s transform;
}

.title-reload:hover svg {
  transform: rotate(45deg);
}

.title-reload.loading svg {
  animation: loading 1s linear infinite;
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 576px) {
  .header-title {
    justify-content: space-between;
  }

  .header-title .title-value {
    font-size: 24px;
  }
}
</style>

<template>
  <div class="header-title">
    <h1 class="title-value select-none">Список новостей</h1>
    <button class="title-reload" @click="emit('reset')">
      <ReloadIcon />
    </button>
  </div>
</template>