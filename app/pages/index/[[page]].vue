<script setup lang="ts">
import { useViewStore } from '~/stores/view';

const viewStore = useViewStore();
</script>

<style scoped>
.content {
  --gap: 20px;
  --card-max-height: calc(((var(--content-size) / 2) - 10px) / 2);
  
  flex: 1;

  display: grid;

  gap: 20px;
  padding: 4px 0 4px;

  align-content: flex-start;
  grid-template-columns: 1fr;
}

.content.block {
  grid-template-columns: repeat(auto-fit, minmax(calc(
    (min(var(--content-size), var(--content-dynamic-size)) / 2) - 10px
  ), 1fr));
}

.content .card {
  display: grid;
  grid-template-rows: 1fr 20px;

  gap: 20px;
  padding: 30px;

  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.05),
    0px 2px 4px 0px rgba(0, 0, 0, 0.05);
  border-radius: var(--radius);
  background-color: var(--card);
}

.content:not(.block) .card {
  width: 100%;
  grid-template-columns: 200px 1fr;
}

.content.block .card {  
  min-height: var(--card-max-height);
}

.card .card-cover {
  width: 200px;
  aspect-ratio: 2 / 1;

  object-fit: cover;
  border-radius: var(--radius);
}

.content.block .card-cover {
  display: none;
}

.card .card-content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  row-gap: 20px;
}

.card-content .content-title {
  font-size: 18px;
}

.content.block .content-title {
  -webkit-line-clamp: 3;
}

.card-content .content-subtitle {
  font-size: 14px;
  font-weight: 400;
}

.content.block .content-subtitle {
  -webkit-line-clamp: 2;
}

.card-content .content-href {
  font-size: 14px;
}

.content:not(.block) .content-href {
  display: none;
}

.card .card-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.content:not(.block) .card-footer {
  grid-column: span 2;
}

.card-footer .footer-origin,
.card-footer .footer-date {
  color: #DCDCDC;
  font-size: 14px;
}

@media (max-width: 576px) {
  .content,
  .content.block {
    grid-template-columns: 1fr;
  }

  .content.block {
    grid-template-rows: initial;
  }

  .content.block .card {
    max-height: initial;
    aspect-ratio: initial;
  }

  .content:not(.block) .card {
    grid-template-rows: auto 1fr 20px;
    grid-template-columns: 1fr;
  }

  .card .card-cover {
    width: 100%;
  }

  .content.block .content-title,
  .content.block .content-subtitle {
    -webkit-line-clamp: initial;
  }

  .content:not(.block) .content-href {
    display: block;
  }

  .content:not(.block) .card-footer {
    grid-column: initial;
  }
}
</style>

<template>
  <div :class="['content', { 'block': viewStore.mode === 'block' }]">
    <div v-for="_ in 6" class="card">
      <img src="https://avatars.githubusercontent.com/u/51849001?s=60&v=4" alt="card-cover" class="card-cover">
      <div class="card-content">
        <h1 class="content-title line-clamp">
          Первые земельные участки реализованы на специальных торгах для малого и среднего бизнеса
        </h1>
        <h2 class="content-subtitle line-clamp">
          На каждый участок претендовали в среднем шесть участников. Стоимость одной из сделок выросла в ходе аукциона в 26 раз.
        </h2>
        <a href="https://google.com/" target="_blank" class="content-href">Подробнее</a>
      </div>
      <div class="card-footer">
        <a href="https://google.com/" target="_blank" class="footer-origin">www.lenta.ru</a>
        <span class="footer-date">12.01.2020</span>
      </div>
    </div>
  </div>
</template>