const translations = {
        en: {
          // Navigation
          'nav-projects': 'Projects',
          'nav-experience': 'Experience',
          'nav-about': 'About Me',
          'nav-contact': 'Contact',

          // Profile
          'profile-greeting': 'Hi, I\'m',
          'profile-role': 'Frontend Developer ⛏',
          'btn-download-cv': 'Download CV',
          'btn-contact': 'Contact Info',

          // Projects
          'projects-subtitle': 'Browse my recent',
          'projects-title': 'Projects',

           // Experience
          'experience-subtitle': 'Know My',
          'experience-title': 'Experience',
          'frontend-title': 'Frontend Development',
          'backend-title': 'Backend Development',
          'skill-advanced': 'Advanced',
          'skill-intermediate': 'Intermediate',
          'skill-beginner': 'Beginner',

          // About Me
          'about-subtitle': 'Learn more',
          'about-title': 'About Me',
          'about-exp-title': 'Experience',
          'about-exp-desc': '3+ years<br>Websites<br>Frontend Development',
          'about-edu-title': 'Education',
          'about-edu-desc': 'Certification in HTML, CSS & JS<br>EDteam. <br>Self-taught <br>English A-2',
          'about-description': "I'm a Software Developer with 3 years of experience in building websites, driven by curiosity and a passion for creating things that solve problems and bring both impact and satisfaction. I'm self-taught, and I've learned through Google marathons, Udemy courses, YouTube tutorials 🎬, timeless resources like Eloquent JavaScript 📚, and lately, by exploring the world of AI.<br>Along the way, I've built all kinds of projects from fun shopping cart UX experiments to a Halo Infinite demo site. My most recent one? An E-commerce website. I focused on making it sleek, easy to use, and ready to grow.",

          // Contact
          'contact-subtitle': "I'm available for consultations",
          'contact-title': 'Contact Me',

          // Footer
          'footer-text': '2025 My Portfolio | Made with love🧡'
        },

        es: {
          'nav-projects': 'Proyectos',
          'nav-experience': 'Experiencia',
          'nav-about': 'Sobre Mi',
          'nav-contact': 'Contacto',

          // Perfil
          'profile-greeting': 'Hola, soy',
          'profile-role': 'Desarrollador Frontend ⛏',
          'btn-download-cv': 'Descargar CV',
          'btn-contact': 'Contacto Info',

          // Proyectos
          'projects-subtitle': 'Explora mis recientes',
          'projects-title': 'Proyectos',

          // Experiencia
          'experience-subtitle': 'Conoce Mi',
          'experience-title': 'Experiencia',
          'frontend-title': 'Desarrollo Frontend',
          'backend-title': 'Desarrollo Backend',
          'skill-advanced': 'Avanzado',
          'skill-intermediate': 'Intermedio',
          'skill-beginner': 'Principiante',

          // Acerca de
          'about-subtitle': 'Conoce más',
          'about-title': 'Acerca de Mí',
          'about-exp-title': 'Experiencia',
          'about-exp-desc': '3+ años<br>Sitios Web<br>Desarrollo Frontend',
          'about-edu-title': 'Educación',
          'about-edu-desc': 'Certificación en HTML, CSS y JS<br>EDteam. <br>Autodidacta <br>Inglés A-2',
          'about-description': 'Soy Desarrollador de Software con 3 años de experiencia en creación de sitios web, impulsado por la curiosidad y un interes por crear cosas que solucionen problemas que generen impacto y sastifaccion. Soy autodidacta, y he ido aprendiendo con maratones de Google, cursos en Udemy, tutoriales de YouTube 🎬, clásicos como Eloquent JavaScript 📚, y últimamente, explorando el mundo de la IA.<br>En el camino construí todo tipo de proyectos desde experimentos divertidos de UX con carritos de compras hasta un sitio demo de Halo Infinite. ¿Mi último proyecto? Un sitio web de E-commerce. Me enfoqué en hacerlo elegante, fácil de usar y listo para crecer.',

          // Contacto
          'contact-subtitle': "Estoy disponible para consultas",
          'contact-title': 'Contáctame',

          // Footer
          'footer-text': '2025 Mi Portafolio | Hecho con amor🧡'
        }
      };

      //Idioma actual
    let currentLanguage = 'en';

function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

 // Dark / light mode

const btn = document.querySelector('#modeToggle');
const btn2 = document.querySelector('#modeToggle2');
const themeIcons = document.querySelectorAll('.icon');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
  setDarkMode();
}

btn.addEventListener('click', function () {
  setTheme();
});

btn2.addEventListener('click', function () {
  setTheme();
});

function setTheme() {
  let currentTheme = document.body.getAttribute('theme')

  if (currentTheme === 'dark') {
    setLightMode();
  } else {
    setDarkMode();
  }
}
function setDarkMode() {
  document.body.setAttribute('theme', 'dark');
  localStorage.setItem('theme', 'dark');

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute('src-dark');
  });
}

function setLightMode() {
  document.body.removeAttribute('theme');
  localStorage.setItem('theme', 'light');

  themeIcons.forEach((icon) => {
    icon.src = icon.getAttribute('src-light');
  });
}

function changeLanguage(lang) {
  if (lang === currentLanguage) return;

  // 2. Agrega efecto visual de transición
  const content = document.getElementById('contentWrapper');
  content.classList.add('changing');

  // 3. Cambia el idioma despues de un breve retraso (150ms)
  setTimeout(() => {
    currentLanguage = lang;

    // 4. Actualiza todos los elementos con data-translate
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      if (translations[lang][key]) {
        element.innerHTML = translations[lang][key];
      }
    });
    //5. Actualiza el atributo lang del html (para accesibilidad)
    document.documentElement.lang = lang;

    //6. Resalta el boton del idioma activo
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.remove('active');
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('active');
      }
    });

    // Quitar efecto de trasición
    content.classList.remove('changing');
  }, 150);
}