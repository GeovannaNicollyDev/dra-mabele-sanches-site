/* Interações locais e seguras: sem eval, HTML dinâmico ou dependências externas. */
(() => {
  'use strict';

  /* Utilitários */
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

  /* Cabeçalho e menu mobile */
  const header = $('.header');
  const menu = $('#menu');
  const menuToggle = $('.menu-toggle');
  const backToTopButton = $('#back-top');

  function updateScrollState() {
    header.classList.toggle('scrolled', window.scrollY > 24);
    backToTopButton.classList.toggle('show', window.scrollY > 500);
  }

  function closeMenu() {
    menu.classList.remove('open');
    menuToggle.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('no-scroll');
  }

  window.addEventListener('scroll', updateScrollState, { passive: true });
  updateScrollState();

  menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');

    menuToggle.classList.toggle('active', isOpen);
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    document.body.classList.toggle('no-scroll', isOpen);
  });

  $$('#menu a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  /* Animações ao rolar */
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.15 }
  );

  $$('[data-reveal]').forEach((element) => {
    revealObserver.observe(element);
  });

  /* Slider de depoimentos */
  const testimonials = $$('.testimonial');
  const previousButton = $('#previous');
  const nextButton = $('#next');
  const slideCount = $('#slide-count');
  let currentSlide = 0;
  let sliderTimer;

  function showSlide(nextSlide) {
    testimonials[currentSlide].classList.remove('active');

    currentSlide = (nextSlide + testimonials.length) % testimonials.length;

    testimonials[currentSlide].classList.add('active');

    slideCount.textContent =
      `${String(currentSlide + 1).padStart(2, '0')} / ` +
      `${String(testimonials.length).padStart(2, '0')}`;
  }

  function stopAutoSlide() {
    window.clearInterval(sliderTimer);
  }

  previousButton.addEventListener('click', () => {
    showSlide(currentSlide - 1);
    stopAutoSlide();
  });

  nextButton.addEventListener('click', () => {
    showSlide(currentSlide + 1);
    stopAutoSlide();
  });

  sliderTimer = window.setInterval(() => {
    showSlide(currentSlide + 1);
  }, 7000);

  /* Comparador antes e depois */
 /* Comparador antes e depois */
const beforeAfterSlider = $('#before-after-slider');
const beforeLayer = $('#ba-before');
const beforeImage = $('#ba-before-image');
const divider = $('#ba-divider');
const comparisonRange = $('#ba-range');

function updateComparison() {
  const value = Number(comparisonRange.value);

  beforeLayer.style.width = `${value}%`;
  divider.style.left = `${value}%`;

  /* Mantém a imagem “Antes” no tamanho total do quadro. */
  beforeImage.style.width = `${beforeAfterSlider.clientWidth}px`;
}

comparisonRange.addEventListener('input', updateComparison);

window.addEventListener('resize', updateComparison);

updateComparison();

  /* Lightbox da galeria */
/* Lightbox da galeria */
const lightbox = $('#lightbox');
const lightboxImage = $('#lightbox-image');
const lightboxCaption = $('#lightbox-caption');
const lightboxCloseButton = $('.lightbox-close');

$$('.gallery-item').forEach((item) => {
  item.addEventListener('click', () => {
    const image = $('img', item);

    lightboxImage.src = item.dataset.image;
    lightboxImage.alt = image.alt;
    lightboxCaption.textContent = item.dataset.gallery;

    lightbox.showModal();
  });
});

lightboxCloseButton.addEventListener('click', () => {
  lightbox.close();
});

lightbox.addEventListener('click', (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

  /* Ano automático no rodapé */
  $('#year').textContent = String(new Date().getFullYear());

  /* Banner de cookies */
  const cookieBanner = $('#cookie-banner');
  const acceptCookiesButton = $('#cookie-accept');
  const rejectCookiesButton = $('#cookie-reject');
  const consentKey = 'mabele-cookie-consent';

  function getCookieConsent() {
    try {
      return localStorage.getItem(consentKey);
    } catch (error) {
      return null;
    }
  }

  function saveCookieConsent(value) {
    try {
      localStorage.setItem(consentKey, value);
    } catch (error) {
      /* Mesmo se o navegador bloquear o armazenamento, o banner será fechado. */
    }

    cookieBanner.hidden = true;
    cookieBanner.classList.add('cookie-dismissed');
  }

  if (!getCookieConsent()) {
    cookieBanner.hidden = false;
  }

  acceptCookiesButton.addEventListener('click', () => {
    saveCookieConsent('accepted');
  });

  rejectCookiesButton.addEventListener('click', () => {
    saveCookieConsent('essential-only');
  });

  /* Tela de carregamento */
  window.addEventListener('load', () => {
    $('#loader').classList.add('is-hidden');
  });
})();