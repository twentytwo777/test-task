<script setup lang="ts">
import { capitalize } from 'vue';

const route = useRoute();
const portals = route.query.portals
const selected = ref<Set<string>>(
  typeof portals === 'string' ? stringToSet(portals) : new Set() 
);
const isAllActive = computed(() => selected.value.size === 0);
const { data } = useFetch('/api/feed/portals');

const navigate = (portals?: string): void => {
  navigateTo({ query: { ...route.query, portals } }, { replace: true });
};

const reset = (): void => {
  selected.value.clear();
  navigate();
};

const isActive = (id: string): boolean => {
  return selected.value.has(id);
};

const toggle = (id: string): void => {
  const isExist = selected.value.has(id);
  if (isExist && selected.value.size === 1) {
    return reset();
  };

  isExist ? selected.value.delete(id) : selected.value.add(id);
  navigate(setToString(selected.value));
};
</script>

<style scoped>
.submenu-portals {
  display: flex;
  column-gap: 15px;
}
</style>

<template>
  <div class="submenu-portals">
    <IndexHeaderSubmenuPortalsItem value="Все" :is-active="isAllActive" @click="reset" />
    <IndexHeaderSubmenuPortalsItem
      v-for="{ id, name } in data"
      :key="id"
      :value="capitalize(name)"
      :is-active="isActive(id)"
      @click="toggle(id)"
    />
  </div>
</template>