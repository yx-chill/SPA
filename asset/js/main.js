const sections = document.querySelectorAll('section[id]');
const home = document.querySelector('.home');

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
  this.querySelectorAll('.layer').forEach((layer => {
    const speed = layer.getAttribute('data-speed');
    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerHeight - e.pageY * speed) / 100;
    layer.style.transform = `translateX(${x}px) translateY(${y}px)`
  }))
}

window.addEventListener('scroll', () => {
  scrollActive();
  scrollHeader();
});

home.addEventListener('mousemove', parallax);