<script setup lang="ts">
import RowIcon from '~/assets/img/list/row.svg?component';
import BlockIcon from '~/assets/img/list/block.svg?component';

const viewModes: {
  id: ViewModes;
  icon: SVGComponent;
}[] = [
  { id: 'row', icon: RowIcon },
  { id: 'block', icon: BlockIcon },
];
const viewStore = useViewStore();
</script>

<style scoped>
.submenu-view {
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
</style>

<template>
  <div class="submenu-view">
    <button
      v-for="{ id, icon } in viewModes"
      :key="id"
      :class="['view-button', { 'active pointer-none': viewStore.mode === id }]"
      @click="viewStore.setMode(id)"
    >
      <component :is="icon" />
    </button>
  </div>
</template>