const sections = document.querySelectorAll('section[id]');
const home = document.querySelector('.home');
const about = document.querySelector('.about');
const toTop = document.querySelector('.top');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.add('active-link');
    } else {
      document.querySelector(`.nav__menu a[href*=${sectionId}]`).classList.remove('active-link');
    }
  })
}

function scrollHeader() {
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
}

function parallax(e) {
  this.querySelectorAll('.layer').forEach((layer) => {
    const speed = layer.getAttribute('data-speed');
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  })
}
function rotate(e) {
  this.querySelectorAll('.layer').forEach((layer) => {
    const x = ((window.innerWidth - e.pageX) / 100) + 20;
    const y = ((window.innerHeight - e.pageY) / 100) + 30;
    layer.style.transform = `rotateX(${x}deg) rotateY(${y}deg)`;
  })
}

window.addEventListener('scroll', () => {
  scrollActive();
  scrollHeader();
  scrollY > 500 ? toTop.style.opacity = 1 : toTop.style.opacity = 0;
});

home.addEventListener('mousemove', parallax);
about.addEventListener('mousemove', rotate);
toTop.addEventListener('click', () => {
  scrollTo(0, 0);
})

$('.pic > li').hoverdir();
