window.addEventListener('scroll', () => {
  const homeSection = document.getElementById('home');
  const navLinks = document.querySelectorAll('.nav-links li a');
  const logo = document.querySelector('.logo');

  const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
  const scrolledPastHome = window.scrollY > homeBottom-50;

  navLinks.forEach(link => {
    if (scrolledPastHome) {
      link.classList.add('scrolled-color');
    } else {
      link.classList.remove('scrolled-color');
    }
  });

  if (logo) {
    if (scrolledPastHome) {
      logo.src = 'images/TexturaLogo-2.png';
    } else {
      logo.src = 'images/TexturaLogo.png';
    }
  }

  if (window.scrollY > homeBottom-70) {
    navLinks.forEach(link => link.classList.add("scrolled-color"));
    logo.classList.add("scrolled-logo");
  } else {
    navLinks.forEach(link => link.classList.remove("scrolled-color"));
    logo.classList.remove("scrolled-logo");
  }
});
