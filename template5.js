// Показать формы для входа и регистрации
document.getElementById('show-login').addEventListener('click', function() {
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('register-form').style.display = 'none';
});

document.getElementById('show-register').addEventListener('click', function() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('register-form').style.display = 'block';
});

// Регистрация пользователя
document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const fullName = document.getElementById('full-name').value;
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const phoneNumber = document.getElementById('phone-number').value;
  const password = document.getElementById('password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  // Проверка паролей
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return;
  }

  // Сохраняем данные пользователя в localStorage
  const user = {
    fullName,
    username,
    email,
    phoneNumber,
    password,
  };

  localStorage.setItem('user', JSON.stringify(user));
  alert("Registration successful!");

  // Переход на форму логина после регистрации
  document.getElementById('login-form').style.display = 'block';
  document.getElementById('register-form').style.display = 'none';
});

// Вход пользователя
document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  // Получаем данные пользователя из localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  // Проверяем, совпадают ли введенные данные
  if (user && user.username === username && user.password === password) {
    alert(`Welcome back, ${user.fullName}!`);
    // Сохраняем сессию пользователя
    localStorage.setItem('isLoggedIn', 'true');
    // Здесь можно перенаправить на другую страницу или изменить содержимое страницы
  } else {
    alert("Invalid username or password!");
  }
});

// Проверка текущего статуса входа
window.addEventListener('load', function() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn === 'true') {
    alert("You are already logged in!");
    // Действия для аутентифицированного пользователя
  }
});
