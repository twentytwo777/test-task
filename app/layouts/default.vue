<style>
.template {
  width: 100dvw;
  min-height: 100dvh;

  display: flex;
  align-items: center;
  flex-direction: column;
}

.template > * {
  width: calc(100% - 12%);
}

.template main {
  flex: 1;
  padding-top: 18px;
}
</style>

<template>
  <div class="template">
    <AppHeader />
    <main>
      <slot />
    </main>
    <AppFooter />
  </div>
</template>