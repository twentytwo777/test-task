<script setup lang="ts">
const store = useFeedStore();
const props = defineProps<{
  totalPages: number;
}>();
const limit = 6;
const size = limit - 2;

const getPageNumber = (n: number): number => {
  const page = clamp(1, store.page, props.totalPages - size);
  return Math.max(0, page - 2) + n;
};

const isActive = (page: number): boolean => {
  return store.page === page;
};
</script>

<style scoped>
footer {
  width: 100%;

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
    <template v-for="n in clamp(0, totalPages, size)" :key="n">
      <IndexFooterPaginationButton
        :value="getPageNumber(n)"
        :isActive="isActive(getPageNumber(n))"
        @click="store.setPage(getPageNumber(n))"
      />
    </template>
    <template v-if="totalPages >= limit">
      <IndexFooterPaginationSeparator v-if="store.page < (totalPages - size)" />
      <IndexFooterPaginationButton v-else
        :value="totalPages - 1"
        :isActive="isActive(totalPages - 1)"
        @click="store.setPage(totalPages - 1)"
      />
    </template>
    <IndexFooterPaginationButton v-if="totalPages >= limit - 1"
      :value="totalPages"
      :isActive="isActive(totalPages)"
      @click="store.setPage(totalPages)"
    />
  </footer>
</template>