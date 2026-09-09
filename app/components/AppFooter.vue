<style scoped>
footer {
  position: sticky;
  bottom: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  column-gap: 24px;
  padding: 18px 0;

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

footer .pagination-button.active {
  pointer-events: none;
}

footer .pagination-separator {
  user-select: none;
  -webkit-user-select: none;
}
</style>

<template>
  <footer>
    <button class="pagination-button">1</button>
    <button class="pagination-button">2</button>
    <button class="pagination-button">3</button>
    <span class="pagination-separator">...</span>
    <button class="pagination-button">200</button>
  </footer>
</template>