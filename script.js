
document.addEventListener('DOMContentLoaded', function () {
  const menu = document.getElementById('mobile-menu');
  const navList = document.querySelector('.nav-list');
  menu.addEventListener('click', () => {
    navList.classList.toggle('active');
  });
});
