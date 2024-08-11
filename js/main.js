let faBars = document.querySelector('.fa-bars');


faBars.addEventListener('click', () => {
  let menu = document.querySelector('.menu');
  let mode = document.querySelector(".mode")
  menu.classList.toggle('show');
  mode.classList.toggle('show');
})

window.addEventListener('click', (e) => {

  if (!e.target.classList.contains('fa-bars')) {
    let menu = document.querySelector('.menu');
    let mode = document.querySelector(".mode")
    menu.classList.remove('show');
    mode.classList.remove('show');
  }  
})
