<template>
  <div class="container">
    <h2>Вход</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required class="form-input" />
      </div>
      <div class="form-group">
        <label for="password">Пароль:</label>
        <input type="password" id="password" v-model="password" required class="form-input" />
      </div>
      <button type="submit" class="btn btn-primary">Войти</button>
      <p v-if="error" class="error">{{ error }}</p>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        error: '',
      };
    },
    methods: {
      async login() {
        try {
          console.log('Logging in with data:', {
            email: this.email,
            password: this.password,
          });
          const response = await fetch('https://node-production-579e.up.railway.app/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              email: this.email,
              password: this.password,
            }),
          });
          const data = await response.json();
          console.log('Login response:', data);

          if (response.ok) {
            // Сохраняем токен в localStorage
            localStorage.setItem('token', data.token);

            // Сначала перенаправляем на главную страницу
            this.$router.push('/');

            // Затем через небольшую задержку обновляем страницу
            setTimeout(() => {
              location.reload(); // Полная перезагрузка страницы
            }, 500); // Задержка в 500 миллисекунд
          } else {
            this.error = data.message || 'Ошибка входа';
          }
        } catch (err) {
          console.error('Error during login:', err);
          this.error = 'Ошибка сервера';
        }
      },
    },
  };
</script>

<style scoped>
  .container {
    width: 100%; /* Ширина контейнера */
    max-width: 400px; /* Максимальная ширина */
    margin: 0 auto; /* Выравнивание по центру по горизонтали */
    padding: 20px; /* Отступы внутри контейнера */
    text-align: center; /* Выравнивание текста по центру */
    position: absolute; /* Абсолютное позиционирование */
    top: 50%; /* Сдвигаем контейнер на 50% от верха */
    left: 50%; /* Сдвигаем контейнер на 50% от левого края */
    transform: translate(-50%, -50%); /* Смещение контейнера на половину его ширины и высоты */
  }

  .error {
    color: red;
    margin-top: 10px;
  }
</style>
