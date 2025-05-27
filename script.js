
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
<script>
  setTimeout(() => {
    document.getElementById('splash-screen').style.display = 'none';
  }, 1500);
</script>
