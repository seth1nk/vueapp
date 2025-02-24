<template>
  <h1 class="container" style="display: inline-block;">Контакты</h1>
  <main class="container">
    <!-- Заголовок страницы -->
    <h1 class="page-title">Наша команда</h1>

    <!-- Карточки сотрудников -->
    <div class="row employees-row mt-5">
      <div class="col-md-4 employee-card" style="transform: rotate(-2deg);">
        <div class="card">
          <img src="/images/33.jpg" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Анна Иванова</h5>
            <p class="card-text"><strong>Должность:</strong> Менеджер по продажам</p>
            <p class="card-text"><strong>Стаж:</strong> 5 лет</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 employee-card" style="transform: rotate(1deg);">
        <div class="card">
          <img src="/images/55.webp" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Сергей Петров</h5>
            <p class="card-text"><strong>Должность:</strong> Ветеринарный врач</p>
            <p class="card-text"><strong>Стаж:</strong> 8 лет</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 employee-card" style="transform: rotate(-1deg);">
        <div class="card">
          <img src="/images/44.webp" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Мария Сидорова</h5>
            <p class="card-text"><strong>Должность:</strong> Консультант по питанию</p>
            <p class="card-text"><strong>Стаж:</strong> 3 года</p>
          </div>
        </div>
      </div>

      <!-- Второй ряд -->
      <div class="col-md-4 employee-card" style="transform: rotate(2deg); margin-top: 20px;">
        <div class="card">
          <img src="/images/11.jpg" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Александр Кузнецов</h5>
            <p class="card-text"><strong>Должность:</strong> Администратор магазина</p>
            <p class="card-text"><strong>Стаж:</strong> 6 лет</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 employee-card" style="transform: rotate(-1deg); margin-top: 30px;">
        <div class="card">
          <img src="/images/66.webp" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Екатерина Андреева</h5>
            <p class="card-text"><strong>Должность:</strong> Зоолог</p>
            <p class="card-text"><strong>Стаж:</strong> 7 лет</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 employee-card" style="transform: rotate(1deg); margin-top: 40px;">
        <div class="card">
          <img src="/images/22.jpeg" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Дмитрий Лебедев</h5>
            <p class="card-text"><strong>Должность:</strong> Специалист по уходу за животными</p>
            <p class="card-text"><strong>Стаж:</strong> 4 года</p>
          </div>
        </div>
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

  /* Стиль для заголовка "Главная" (слева) */
  .page-title {
    font-size: 2.5rem;
    margin-bottom: 20px;
  }

  /* Стиль для заголовка "Наша команда" (по центру) */
  .employees-row h2 {
    text-align: center; /* Выравниваем заголовок по центру */
    margin-bottom: 20px; /* Добавляем отступ снизу */
  }

  /* Стиль для карточек сотрудников */
  .employee-card {
    transition: transform 0.3s ease; /* Добавляем плавную анимацию */
  }

    .employee-card:hover {
      transform: scale(1.05) !important; /* Увеличиваем размер при наведении */
    }

  .card {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Добавляем тень для карточек */
    border-radius: 8px; /* Закругляем углы */
    overflow: hidden; /* Скрываем переполнение */
    background-color: white; /* Белый фон */
    max-width: 300px; /* Ограничиваем максимальную ширину */
    margin: 0 auto; /* Центрируем карточку в колонке */
  }

  .card-img-top {
    width: 100%; /* Ширина изображения равна ширине карточки */
    height: auto; /* Сохраняем пропорции */
    border-bottom: 2px solid #ddd; /* Добавляем границу под изображением */
  }

  .card-body {
    padding: 15px; /* Отступы внутри карточки */
    text-align: center; /* Центрируем текст */
  }

  .card-title {
    font-size: 1.2rem; /* Размер шрифта для имени сотрудника */
    margin-bottom: 10px; /* Отступ под именем */
  }

  .card-text strong {
    font-weight: bold; /* Жирный шрифт для меток */
    color: #333; /* Темно-серый цвет */
  }
</style>
