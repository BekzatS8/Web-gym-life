const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('theme');

// Применение сохраненной темы при загрузке страницы
if (savedTheme) {
  document.body.classList.add(savedTheme);
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  
  if (savedTheme === 'dark-mode') {
    header.classList.add('dark-mode');
    footer.classList.add('dark-mode'); // Добавление класса для footer
  }
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const header = document.querySelector('header');
  header.classList.toggle('dark-mode');
  const footer = document.querySelector('footer');
  footer.classList.toggle('dark-mode');
  
  // Сохранение текущей темы
  if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark-mode');
  } else {
    localStorage.setItem('theme', '');
  }
});
