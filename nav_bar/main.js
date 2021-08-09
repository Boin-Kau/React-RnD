const toggleBtn = document.querySelector('.nav_toggleBtn')
const menu = document.querySelector('.nav_list')
const icons = document.querySelector('.nav_icons')

toggleBtn.addEventListener('click', ()=> {
  menu.classList.toggle('active');
  icons.classList.toggle('active');

});