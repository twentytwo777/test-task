<script setup>
import ReloadIcon from '~/assets/img/reload.svg';
import SearchIcon from '~/assets/img/search.svg';
</script>

<style scoped>
header {
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 18px 0;

  background-color: var(--background);
  border-bottom: 1px solid #E5E5E5;
}

header .header-title {
  display: flex;
  column-gap: 30px;
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
</style>

<template>
  <header>
    <div class="header-title">
      <h1 class="title-value">Список новостей</h1>
      <button class="title-reload">
        <ReloadIcon />
      </button>
    </div>
    <div class="header-search">
      <input type="text">
      <SearchIcon />
    </div>
  </header>
</template>