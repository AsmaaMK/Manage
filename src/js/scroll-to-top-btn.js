const scrollToTopBtn = document.getElementById('scroll-top');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 80) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});