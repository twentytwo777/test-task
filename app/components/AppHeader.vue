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

  column-gap: 30px;
  padding: 18px 0;

  background-color: var(--background);
  border-bottom: 1px solid #E5E5E5;
}

header .header-title {
  display: flex;
  flex-shrink: 0;
  align-items: center;

  column-gap: 30px;
}

.header-title .title-value {
  font-size: 36px;
}

.header-title .title-reload {
  min-width: 40px;
  max-width: 40px;
  max-height: 40px;
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

header .header-search {
  width: 320px;
  min-width: 0;

  height: 40px;

  display: flex;
  flex-shrink: 1;
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
  header {
    align-items: initial;
    flex-direction: column;

    row-gap: 20px;
  }

  header .header-title {
    justify-content: space-between;
  }

  .header-title .title-value {
    font-size: 24px;
  }

  header .header-search {
    width: 100%;
  }
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
    <label for="search" class="header-search">
      <input name="search" id="search" type="text" class="search-input">
      <SearchIcon />
    </label>
  </header>
</template>