<script setup lang="ts">
import { useViewStore } from '~/stores/view';

import ReloadIcon from '~/assets/img/reload.svg';
import SearchIcon from '~/assets/img/search.svg';
import RowIcon from '~/assets/img/list/row.svg';
import BlockIcon from '~/assets/img/list/block.svg';

import type { ViewModes } from '~/stores/view';

type ViewMode = {
  id: ViewModes;
  icon: SVGComponent;
};

const viewModes: ViewMode[] = [
  { id: 'row', icon: <SVGComponent><never>RowIcon }, // typescript moment..
  { id: 'block', icon: <SVGComponent><never>BlockIcon }
];
const viewStore = useViewStore();
</script>

<style scoped>
header {
  --column-gap: clamp(10px, 2.14dvw, 30px);

  position: sticky;
  top: 0;

  display: grid;
  grid-template-rows: repeat(2, 40px);
  grid-template-columns: 1fr minmax(0, 320px);

  gap: 26px var(--column-gap);
  padding: 36px 0 28px;

  background-color: var(--background);
}

header .header-title {
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

header .header-search {
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

header .header-submenu {
  display: flex;
  align-items: center;
  justify-content: space-between;

  grid-column: span 2;

  padding-top: 26px;
  border-top: 1px solid #E5E5E5;
}

.header-submenu .submenu-portals {
  display: flex;
  column-gap: 15px;
}

.submenu-portals .portals-item {
  font-weight: 700;
  transition: 0.3s color;
}

.submenu-portals .portals-item:hover,
.submenu-portals .portals-item.active {
  color: var(--accent-foreground);
}

.header-submenu .submenu-view {
  display: flex;
  column-gap: 10px;
}

.view-button svg {
  color: #C4C4C4;
  transition: 0.3s color;
}

.view-button:hover svg,
.view-button.active svg {
  color: var(--accent-foreground);
}

@media (max-width: 576px) {
  header {
    grid-template-columns: 1fr;
    grid-template-rows: initial;
    align-items: initial;

    row-gap: 20px;
    padding: 36px 0 17px;
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

  header .header-submenu {
    grid-column: initial;
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
    <div class="header-submenu">
      <div class="submenu-portals">
        <button class="portals-item">Все</button>
        <button class="portals-item">Lenta.ru</button>
        <button class="portals-item">Mos.ru</button>
      </div>
      <div class="submenu-view">
        <button v-for="mode in viewModes"
          :key="mode.id"
          :class="[
            'view-button',
            { 'active pointer-none': viewStore.mode === mode.id }
          ]"
          @click="viewStore.setMode(mode.id)"
        >
          <component :is="mode.icon" />
        </button>
      </div>
    </div>
  </header>
</template>