<script setup lang="ts">
const store = useFeedStore();
const search = ref<string | undefined>(store.query);
const submenuRef = useTemplateRef('submenu');

const onReset = () => {
  search.value = undefined;
  store.reset();
  submenuRef.value?.portalsRef?.reset();
};

const debouncedSetQuery = useDebounceFn((value: string) => {
  if (value.length < 3 && !store.query) {
    return;
  };

  return store.setQuery(value.length < 3 ? undefined : value);
}, 300, { maxWait: 1000 });

const onUpdateSearch = (value: string): void => {
  const { isPending, cancel } = debouncedSetQuery;
  if (isPending.value) {
    cancel();
  };

  debouncedSetQuery(value);
};
</script>

<style scoped>
header {
  --column-gap: clamp(10px, 2.14dvw, 30px);

  width: 100%;

  position: sticky;
  top: 0;

  display: grid;
  justify-content: center;

  background-color: var(--background);
}

header > .content-container  {
  display: grid;
  grid-template-rows: repeat(2, 40px);
  grid-template-columns: 1fr minmax(0, 320px);

  padding: 36px 0 28px;
  gap: 26px var(--column-gap);
}

@media (max-width: 576px) {
  header > .content-container  {
    align-items: initial;

    grid-template-columns: 1fr;
    grid-template-rows: initial;

    row-gap: 20px;
    padding: 36px 0 17px;
  }
}
</style>

<template>
  <header>
    <div class="content-container ">
      <IndexHeaderTitle @reset="onReset" />
      <IndexHeaderSearch v-model="search" @update:model-value="onUpdateSearch" />
      <IndexHeaderSubmenu ref="submenu" />
    </div>
  </header>
</template>