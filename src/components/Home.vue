<template>
  <h1 class="container" style="display: inline-block;">Главная</h1>
  <main class="container text-center">
    <!-- Заголовок страницы -->
    <h1 class="page-title">Зоомагазин «ЗООРАЙ»</h1>

    <!-- Блок 1: Текст слева, картинка справа -->
    <div class="row align-items-center mb-5">
      <div class="col-md-6">
        <div class="text-container">
          <p class="fs-5">
            Добро пожаловать в наш зоомагазин — место, где ваши питомцы найдут всё необходимое для комфортной и здоровой жизни! Мы предлагаем широкий ассортимент товаров для домашних животных: корма премиум-класса, аксессуары, игрушки, средства гигиены и многое другое.
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <img src="/images/1.jpg" class="img-fluid rounded border border-dark img-block large-image">
      </div>
    </div>

    <!-- Блок 2: Текст справа, картинка слева -->
    <div class="row align-items-center mb-5 flex-row-reverse">
      <div class="col-md-6">
        <div class="text-container">
          <p class="fs-5">
            В нашем магазине вы найдете товары для собак, кошек, грызунов, птиц, рептилий и других любимцев. Наши консультанты помогут вам подобрать оптимальные решения для ухода за вашими питомцами, основываясь на их потребностях и особенностях.
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <img src="/images/2.webp" class="img-fluid rounded border border-dark img-block large-image">
      </div>
    </div>

    <!-- Блок 3: Текст слева, картинка справа -->
    <div class="row align-items-center mb-5">
      <div class="col-md-6">
        <div class="text-container">
          <p class="fs-5">
            Мы заботимся о здоровье ваших животных и сотрудничаем только с проверенными производителями, гарантируя высокое качество каждого продукта. Покупая у нас, вы можете быть уверены, что делаете правильный выбор для своих четвероногих друзей.
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <img src="/images/3.webp" class="img-fluid rounded border border-dark img-block large-image">
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'Home',
  };
</script>

<style scoped>
  /* Стили для основного контента */
  main {
    max-width: 1200px; /* Ограничиваем ширину контейнера */
    margin: 0 auto; /* Центрируем контейнер */
    text-align: left; /* Выравниваем текст по левому краю внутри контейнера */
  }

  /* Стиль для изображений */
  .large-image {
    max-width: 600px; /* Ограничиваем максимальную ширину */
    display: block; /* Делаем изображение блочным элементом */
    margin: 0 auto; /* Центрируем изображение горизонтально */
  }

  /* Выравнивание текста внутри блоков */
  .text-container {
    text-align: center; /* Выравниваем текст внутри блоков по центру */
  }

  /* Стиль для заголовка страницы */
  .page-title {
    text-align: center; /* Выравниваем заголовок "Зоомагазин «ЗООРАЙ»" по центру */
    font-size: 2.5rem;
    margin-bottom: 20px;
  }
</style>
