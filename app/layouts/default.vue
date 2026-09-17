<style scoped>
#default {
  --layout-padding: 20px;
  --content-size: 1060px;
  --content-dynamic-size: calc(100dvw - (var(--layout-padding) * 2));

  width: 100dvw;
  min-height: 100dvh;

  display: grid;
  /*
    value: 170px
    calcs:
    - subtract 8px, because on the layout we have 520x256, but true ratio 2 / 1 is 520x260,
      256x2 = 512, 260x2 = 520, 520 - 512 = 8px
    - subtract 8px, because added additional padding-(top/bottom) for card box-shadow in
      content block
    result: 154px
  */
  grid-template-rows: 154px 1fr 40px;
  justify-content: center;
}

#default > * {
  width: min(var(--content-dynamic-size), var(--content-size));
}

/* #default main {
  height: 100%;

  display: flex;
  flex-direction: column;
}

@media (max-width: 576px) {
  #default {
    grid-template-rows: auto 1fr 40px;
  }
} */
</style>

<template>
  <div id="default">
    <slot />
  </div>
</template>