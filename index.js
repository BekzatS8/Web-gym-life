const openPopup = document.getElementById('openPopup');
const closePopup = document.getElementById('closePopup');
const popup = document.getElementById('popup');

openPopup.addEventListener('click', () => {
    popup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    popup.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
});
/---------------------------------------------------------------------------------/
function getGreeting() {
  const now = new Date();
  const hours = now.getHours();

  if (hours < 12) {
    return "Доброе утро";
  } else if (hours < 18) {
    return "Добрый день";
  } else {
    return "Добрый вечер";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const greetingElement = document.getElementById("greeting");
  greetingElement.textContent = getGreeting();
});
/---------------------------------------------------------------------------------/
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
/---------------------------------------------------------------------------------/