document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.site-header nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.style.backgroundColor = '#444';
    }
  });

  console.log('Сайт Кобзарь Виктории загружен');
});
