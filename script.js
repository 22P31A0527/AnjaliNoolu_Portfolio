// script.js
document.addEventListener('DOMContentLoaded', function() {
  // Navigation
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
  });

  // Project Filters
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
      button.addEventListener('click', () => {
          filterButtons.forEach(btn => btn.classList.remove('active'));
          button.classList.add('active');

          const filter = button.dataset.filter;
          projectCards.forEach(card => {
              if (filter === 'all' || card.dataset.category === filter) {
                  card.style.display = 'block';
              } else {
                  card.style.display = 'none';
              }
          });
      });
  });

  // Contact Form
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(contactForm);
      // You can add your logic here to send the form data
      console.log(Object.fromEntries(formData));
      alert('Form submitted!');
  });

  // Certifications Carousel
  const carousel = document.getElementById('ltrCarousel');
  const track = carousel.querySelector('.carousel-track');
  const cards = Array.from(track.children);
  const prevButton = carousel.querySelector('.prev-button');
  const nextButton = carousel.querySelector('.next-button');
  const indicatorsContainer = carousel.querySelector('.carousel-indicators');

  let cardWidth = cards[0].offsetWidth;
  let currentIndex = 0;

  function updateTrack() {
      track.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
      updateIndicators();
  }

  function updateIndicators() {
      const indicators = Array.from(indicatorsContainer.children);
      indicators.forEach((indicator, index) => {
          indicator.classList.toggle('active', index === currentIndex);
      });
  }

  cards.forEach((_, index) => {
      const indicator = document.createElement('button');
      indicator.classList.add('carousel-indicator');
      indicator.addEventListener('click', () => {
          currentIndex = index;
          updateTrack();
      });
      indicatorsContainer.appendChild(indicator);
  });

  updateIndicators();

  nextButton.addEventListener('click', () => {
      if (currentIndex < cards.length - 1) {
          currentIndex++;
          updateTrack();
      }
  });

  prevButton.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
          updateTrack();
      }
  });

  window.addEventListener('resize', () => {
      cardWidth = cards[0].offsetWidth;
      updateTrack();
  });

  // Lucide Icons
  lucide.createIcons();
});
