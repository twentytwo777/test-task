<script setup lang="ts">
const store = useFeedStore();

const { data } = useFetch('/api/feed/portals');
const selected = ref<Set<string>>(
  typeof store.portals === 'string' ? stringToSet(store.portals) : new Set() 
);
const isAllActive = computed(() => selected.value.size === 0);

const reset = (): void => {
  selected.value.clear();
  store.setPortals();
};

const isActive = (id: string): boolean => {
  return selected.value.has(id);
};

const toggle = (id: string): void => {
  const isExist = selected.value.has(id);
  if (isExist && selected.value.size === 1) {
    return store.setPortals();
  };

  isExist ? selected.value.delete(id) : selected.value.add(id);
  store.setPortals(setToString(selected.value));
};

defineExpose({ reset })
</script>

<style scoped>
.submenu-portals {
  display: flex;
  column-gap: 15px;
}
</style>

<template>
  <div class="submenu-portals">
    <IndexHeaderSubmenuPortalsItem value="Все" :isActive="isAllActive" :disabled="isAllActive" @click="reset" />
    <IndexHeaderSubmenuPortalsItem
      v-for="{ id, name } in data"
      :key="id"
      :value="name"
      :isActive="isActive(id)"
      @click="toggle(id)"
    />
  </div>
</template>