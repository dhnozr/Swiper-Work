import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {
  grabCursor: true,
  speed: 1000,
  effect: 'slide',
  loop: true,
  mousewheel: {
    invert: true,
    sensitivity: 1,
  },
});

swiper.enable();

document.addEventListener('DOMContentLoaded', function () {
  // Select all elements with the class 'text'
  const texts = document.querySelectorAll('.text');

  // Iterate over each element
  texts.forEach(text => {
    // Split the text into characters and wrap each character in a span
    const chars = text.innerText
      .split('')
      .map(char => `<span class="char">${char}</span>`)
      .join('');
    text.innerHTML = chars;

    // Animate each character
    gsap.fromTo(
      text.querySelectorAll('.char'),
      {
        opacity: 0, // Start with characters hidden
        y: 20, // Start 20 pixels below their final position
      },
      {
        opacity: 1, // Animate to fully visible
        y: 0, // Move to original position
        duration: 0.5, // Each animation takes 0.5 seconds
        stagger: 0.05, // Start each character's animation 0.05 seconds after the previous one
        ease: 'power2.out', // Use a smooth easing function
      }
    );
  });
});
