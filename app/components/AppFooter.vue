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

footer .pagination-button,
footer .pagination-separator {
  font-size: 18px;
  font-weight: 700;
}

footer .pagination-button {
  transition: 0.3s color;
}

footer .pagination-button:hover,
footer .pagination-button.active {
  color: var(--accent-foreground);
}

footer .pagination-separator {
  user-select: none;
  -webkit-user-select: none;
}
</style>

<template>
  <footer>
    <button v-for="i in 4" class="pagination-button">{{ i }}</button>
    <span class="pagination-separator">...</span>
    <button class="pagination-button">200</button>
  </footer>
</template>