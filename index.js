const fileImages = [
  './images/hero1.png',
  './images/hero2.png',
  './images/hero3.png',
  './images/hero4.png',
  './images/hero5.png',
  './images/hero6.png',
  './images/hero7.png',
  './images/hero8.png',
  './images/hero9.png',
  './images/hero10.png',
  './images/hero11.png',
  './images/hero12.png',
  './images/hero13.png',
  './images/hero14.png',
  './images/hero15.png',
  './images/hero16.png',
  './images/hero17.png',
  './images/hero18.png',
  './images/hero19.png',
  './images/hero20.png',
  './images/hero21.png',
  './images/hero22.png',
  './images/hero23.png',
  './images/hero24.png',
  './images/hero25.png',
  './images/hero26.png',
  './images/hero27.png',
  './images/hero28.png',
  './images/hero29.png',
  './images/hero30.png',
  './images/hero31.png',
  './images/hero32.png',
];

const heroEls = document.querySelectorAll('.heroes .hero');

const heroImages = document.querySelectorAll('.image');

heroImages.forEach(
  (v, idx) => (v.style.backgroundImage = `url(${fileImages[idx]})`)
);
