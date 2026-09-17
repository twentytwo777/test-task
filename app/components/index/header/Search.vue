<script setup lang="ts">
import SearchIcon from '~/assets/img/search.svg?component';

const [model] = defineModel({ required: true });
</script>

<style scoped>
.header-search {
  min-width: 0;
  height: 40px;

  display: flex;
  justify-content: space-between;

  padding: 10px;
  column-gap: 10px;

  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.05),
    0px 2px 4px 0px rgba(0, 0, 0, 0.05);
  border-radius: var(--radius);
  background-color: var(--card);
}

.header-search .search-input {
  min-width: inherit;

  font-size: 16px;

  flex: 1;
}

@media (max-width: 576px) {
  .header-search {
    width: 100%;
  }
}
</style>

<template>
  <label for="query" class="header-search">
    <input
      id="query"
      name="query"
      type="text"
      class="search-input"
      v-model.trim="model"
    >
    <SearchIcon />
  </label>
</template>