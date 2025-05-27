
function toggleMenu() {
  document.querySelector('.menu').classList.toggle('active');
}
window.onload = function () {
  const splash = document.querySelector('.splash-screen');
  if (splash) {
    setTimeout(() => {
      splash.style.display = 'none';
    }, 2000);
  }
};
