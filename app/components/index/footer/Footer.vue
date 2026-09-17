<script setup lang="ts">
const props = defineProps<{
  totalPages: number;
}>();
const store = useFeedStore();
const { setPage } = store;

const limit = 6;
const size = limit - 2;

const getPageNumber = (n: number): number => {
  const max = clamp(1, store.page, props.totalPages - size);
  return Math.max(0, max - 2) + n;
};

const isSeparator = (n: number): boolean => {
  const isGreaterThanLimit = props.totalPages >= limit;
  const isPenultimate = n === limit - 1;
  const isClamped = store.page < (props.totalPages - size);
  return isGreaterThanLimit && isPenultimate && isClamped;
};

const isActive = (page: number): boolean => {
  return page === store.page;
};
</script>

<style scoped>
footer {
  position: sticky;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 24px;

  background-color: var(--background);
}
</style>

<template>
  <footer>
    <template v-for="n in Math.min(limit - 1, totalPages)" :key="getPageNumber(n)">
      <IndexFooterPaginationSeparator v-if="isSeparator(n)" />
      <IndexFooterPaginationButton
        v-else
        :value="getPageNumber(n)"
        :isActive="isActive(getPageNumber(n))"
      />
    </template>
  </footer>
</template>