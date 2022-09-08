const openNav = document.getElementById('open-nav');
const closeNav = document.getElementById('close-nav');
const nav = document.getElementsByTagName('nav')[0];

closeNav.classList.add('hidden');

openNav.addEventListener('click', () => {
  nav.classList.remove('hidden');
  closeNav.classList.remove('hidden');
  openNav.classList.add('hidden');
  document.body.classList.add('stop-scrolling');
});

closeNav.addEventListener('click', () => {
  nav.classList.add('hidden');
  openNav.classList.remove('hidden');
  closeNav.classList.add('hidden');
  document.body.classList.remove('stop-scrolling');
});

nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A' || e.target.tagName === 'NAV') {
    nav.classList.add('hidden');
    openNav.classList.remove('hidden');
    closeNav.classList.add('hidden');
    document.body.classList.remove('stop-scrolling');
  }
});