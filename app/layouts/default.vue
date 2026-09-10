<style scoped>
.default {
  width: 100dvw;
  min-height: 100dvh;

  display: flex;
  align-items: center;
  flex-direction: column;
}

.default > * {
  /* 40px is padding for left/right side (20px for each) */
  width: min(calc(100dvw - 40px), 1060px);
}

.default main {
  flex: 1;

  display: flex;
  flex-direction: column;
}
</style>

<template>
  <div class="default">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>