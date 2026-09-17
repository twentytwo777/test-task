<style scoped>
.header-submenu {
  display: flex;
  align-items: center;
  justify-content: space-between;

  grid-column: span 2;

  padding-top: 26px;
  border-top: 1px solid #E5E5E5;
}

@media (max-width: 576px) {
  .header-submenu {
    grid-column: initial;
  }
}
</style>

<template>
  <div class="header-submenu">
    <IndexHeaderSubmenuPortals />
    <IndexHeaderSubmenuView />
  </div>
</template>