<template>
  <h1 class="container" style="display: inline-block;">Питание для питомцев</h1>
  <div class="app-container">
    <h1 class="page-title">Список питания</h1>
    <div class="table-container">
      <table class="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Название</th>
            <th>Вид</th>
            <th>Бренд</th>
            <th>Вес (г)</th>
            <th>Описание</th>
            <th>Цена (₽)</th>
            <th>В наличии</th>
            <th>Изображение</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in paginatedItems" :key="item._id" class="table-row">
            <td>{{ (currentPage - 1) * pageSize + index + 1 }}</td> <!-- Порядковый номер -->
            <td>{{ item.name }}</td>
            <td>{{ item.vid }}</td>
            <td>{{ item.brand }}</td>
            <td>{{ item.weight }} г</td>
            <td>{{ item.description || 'N/A' }}</td>
            <td>{{ item.price }} ₽</td>
            <td>
              <span :class="['status', item.in_stock ? 'available' : 'unavailable']">
                {{ item.in_stock ? 'Да' : 'Нет' }}
              </span>
            </td>
<td>
  <img v-if="item.img"
       :src="`${backendUrl}${item.img}`"
       alt="Pitanie Image"
       class="pitanie-image" />
  <span v-else>N/A</span>
</td>
          </tr>
        </tbody>
      </table>
      <p v-if="!paginatedItems.length" class="no-pets-message">Нет доступных товаров.</p>

      <!-- Пагинация -->
      <div class="pagination" v-if="totalPages > 1">
        <button @click="prevPage" :disabled="currentPage === 1">← Предыдущая</button>
        <span>Страница {{ currentPage }} из {{ totalPages }}</span>
        <button @click="nextPage" :disabled="currentPage === totalPages">Следующая →</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  data() {
    return {
      pitanie: [],
      currentPage: 1,
      pageSize: 10,
      backendUrl: 'https://node-production-579e.up.railway.app',
    };
  },
    computed: {
      // Вычисляемое свойство для получения данных текущей страницы
      paginatedItems() {
        const start = (this.currentPage - 1) * this.pageSize;
        const end = start + this.pageSize;
        return this.pitanie.slice(start, end);
      },
      // Вычисляемое свойство для определения общего количества страниц
      totalPages() {
        return Math.ceil(this.pitanie.length / this.pageSize);
      },
    },
    async created() {
      await this.fetchPitanie(); // Получаем список питания при создании компонента
    },
    methods: {
      async fetchPitanie() {
        try {
          const response = await fetch('https://node-production-579e.up.railway.app/api/pitanies'); // Запрос к API
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json(); // Парсим JSON-ответ
          console.log(data); // Временно добавляем лог для проверки данных
          this.pitanie = data; // Сохраняем данные в массив
        } catch (err) {
          console.error('Error fetching pitanie:', err);
        }
      },
      // Переключение на предыдущую страницу
      prevPage() {
        if (this.currentPage > 1) {
          this.currentPage--;
        }
      },
      // Переключение на следующую страницу
      nextPage() {
        if (this.currentPage < this.totalPages) {
          this.currentPage++;
        }
      },
    },
  };
</script>

<style scoped>
  /* Общий контейнер */
  .app-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #800020, #400020);
    color: #ffffff;
    padding: 20px;
  }

  /* Стиль для заголовка */
  .page-title {
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 20px;
    color: #ffffff;
  }

  /* Контейнер таблицы */
  .table-container {
    width: 100%;
    max-width: 1200px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 16px; /* Закругленные углы контейнера */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    padding: 20px;
  }

  /* Стиль для таблицы */
  .styled-table {
    width: 100%;
    border-collapse: separate; /* Разделяем границы ячеек */
    border-spacing: 0;
    border-radius: 16px; /* Закругленные углы таблицы */
    overflow: hidden;
    margin-top: 20px;
  }

    /* Стиль для заголовков таблицы */
    .styled-table th {
      background: linear-gradient(135deg, #c70039, #800040); /* Градиент для заголовков */
      color: #ffffff;
      font-weight: bold;
      padding: 15px;
      text-align: center;
      border-bottom: none;
      border-right: none;
    }

    /* Стиль для обычных ячеек */
    .styled-table td {
      background: rgba(255, 255, 255, 0.1); /* Полупрозрачный белый фон */
      color: #ffffff;
      padding: 15px;
      text-align: center;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      border-right: 1px solid rgba(255, 255, 255, 0.1);
    }

      /* Убираем правую границу у последнего столбца */
      .styled-table th:last-child,
      .styled-table td:last-child {
        border-right: none;
      }

    /* Убираем нижнюю границу у последней строки */
    .styled-table tbody tr:last-child td {
      border-bottom: none;
    }

    /* Эффект при наведении на строку */
    .styled-table tbody tr:hover {
      background-color: rgba(255, 255, 255, 0.05); /* Легкий затемненный фон */
      cursor: pointer;
    }

  /* Стиль для изображений товаров */
  .product-image {
    max-width: 100px;
    max-height: 100px;
    border-radius: 8px;
  }

  /* Выравнивание текста в заголовке "Нет доступных товаров" */
  .no-pets-message {
    text-align: center;
    font-size: 1.2rem;
    margin-top: 20px;
  }

  /* Стиль для статуса доступности */
  .status {
    display: inline-block;
    padding: 5px 10px;
    border-radius: 5px;
    font-weight: bold;
    color: #ffffff;
  }

    .status.available {
      background: #32a852; /* Зеленый цвет для доступных товаров */
    }

    .status.unavailable {
      background: #c70039; /* Красный цвет для недоступных товаров */
    }

  /* Стиль для пагинации */
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 10px;
  }

    .pagination button {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background 0.3s ease;
    }

      .pagination button:disabled {
        background: rgba(255, 255, 255, 0.05);
        cursor: not-allowed;
      }

      .pagination button:hover:not(:disabled) {
        background: rgba(255, 255, 255, 0.2);
      }
</style>
