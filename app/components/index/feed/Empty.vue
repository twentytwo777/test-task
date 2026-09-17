<style scoped>
.empty {
  display: grid;
  align-items: center;
  justify-content: center;
}

@media (max-width: 576px) {
  .empty .empty-title {
    font-size: 26px;
  }
}
</style>

<template>
  <div class="empty select-none">
    <h1 class="empty-title">Пустовато...</h1>
  </div>
</template>