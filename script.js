// =======================
// script.js
// =======================

// Enhanced Language System inspired by top-rated portfolios
const translations = {
  en: {
    // Navigation
    nav_about: "About",
    nav_portfolio: "Portfolio", 
    nav_skills: "Skills",
    nav_testimonials: "Testimonials",
    nav_contact: "Contact",
    
    // Hero Section
    hero_title: "Theodora Fouda",
    hero_subtitle: "Building Modern Web Experiences",
    hero_intro: "I craft responsive, user-focused websites and web apps that help brands and people shine online.",
    hero_cta: "Contact Me",
    
    // About Section
    about_title: "About Me",
    about_desc: "I'm Theodora Fouda, a passionate web developer dedicated to building modern, accessible, and high-performing websites. I blend technical expertise with creative problem-solving to deliver digital experiences that make an impact.",
    about_years: "Years Experience",
    about_projects: "Projects Completed", 
    about_tools: "Tools Mastered",
    about_cv: "Download My CV",
    
    // Skills Section
    skills_title: "Skills & Tools",
    skills_frontend: "Frontend",
    skills_backend: "Backend", 
    skills_design: "Design",
    skills_tools: "Tools",
    
    // Portfolio Section
    portfolio_title: "My Projects",
    portfolio_filter_all: "All",
    portfolio_filter_web: "Web",
    portfolio_filter_design: "Design", 
    portfolio_filter_app: "App",
    
    // Project Details
    project_logo_title: "Logo Design",
    project_logo_desc: "Professional logo and brand identity design for businesses and startups. Created modern, memorable logos that enhance brand recognition and establish strong visual identities for clients.",
    project_website_title: "Portfolio Website",
    project_website_desc: "A modern, responsive portfolio website to showcase my work and skills. Features dark mode, multilingual support, interactive elements, and a professional design that adapts perfectly to all devices.",
    project_healthcare_title: "Student Healthcare System",
    project_healthcare_desc: "A comprehensive web application for managing student healthcare records and appointments. Features secure data management, appointment scheduling, and administrative dashboard for healthcare staff.",
    project_cosmetic_title: "Cosmetic Website",
    project_cosmetic_desc: "A beautiful, responsive website for my personal cosmetic brand, featuring product galleries, contact forms, and an elegant design that showcases products effectively while maintaining excellent user experience.",
    read_more: "Read More",
    
    // Modal Details
    modal_technologies: "Technologies",
    modal_role: "Role",
    modal_results: "Results",
    modal_done: "Done",
    
    // Technology Tags
    tech_html5: "HTML5",
    tech_css3: "CSS3",
    tech_javascript: "JavaScript",
    tech_bootstrap: "Bootstrap",
    tech_php: "PHP",
    tech_mysql: "MySQL",
    tech_illustrator: "Adobe Illustrator",
    tech_photoshop: "Adobe Photoshop",
    tech_brand_identity: "Brand Identity",
    tech_logo_design: "Logo Design",
    tech_responsive_design: "Responsive Design",
    tech_web_application: "Web Application",
    tech_database_design: "Database Design",
    tech_ecommerce: "E-commerce",
    
    // Roles
    role_designer: "Designer",
    role_developer_designer: "Developer & Designer",
    role_full_stack: "Full Stack Developer",
    
    // Results
    result_brand_recognition: "Enhanced brand recognition",
    result_online_presence: "Increased online presence",
    result_healthcare_management: "Streamlined healthcare management",
    result_brand_visibility: "Improved brand visibility",
    
    // Testimonials Section
    testimonials_title: "Testimonials",
    testimonials_instruction: "Swipe or use arrows to see more testimonials",
    
    // Testimonial quotes
    testimonial_1: "Theodora's professionalism and attention to detail are unmatched. She delivered our project on time and exceeded expectations.",
    testimonial_2: "Working with Theodora was a fantastic experience. Her creative solutions brought our vision to life beautifully.",
    testimonial_3: "I highly recommend Theodora for any web project. Her expertise and dedication are truly impressive.",
    testimonial_4: "Theodora's work ethic and communication made the whole process smooth and enjoyable. Outstanding results!",
    testimonial_5: "From start to finish, Theodora was attentive, creative, and reliable. I couldn't be happier with the outcome.",
    
    // Contact Section
    contact_title: "Contact Me",
    contact_subtitle: "Let's work together on your next project",
    contact_name: "Your Name",
    contact_email: "Your Email",
    contact_message: "Your Message",
    contact_send: "Send Message",
    
    // Footer
    footer_home: "Home",
    footer_about: "About",
    footer_projects: "Projects",
    footer_skills: "Skills",
    footer_testimonials: "Testimonials",
    footer_contact: "Contact",
    footer_copyright: "© 2025 Theodora Fouda. All rights reserved.",
    
    // Modal Details
    modal_close: "Close"
  },
  
  fr: {
    // Navigation
    nav_about: "À propos",
    nav_portfolio: "Portfolio",
    nav_skills: "Compétences", 
    nav_testimonials: "Témoignages",
    nav_contact: "Contact",
    
    // Hero Section
    hero_title: "Theodora Fouda",
    hero_subtitle: "Création d'expériences web modernes",
    hero_intro: "Je crée des sites web et applications responsives centrés sur l'utilisateur qui aident les marques et les personnes à briller en ligne.",
    hero_cta: "Contactez-moi",
    
    // About Section
    about_title: "À propos de moi",
    about_desc: "Je suis Theodora Fouda, une développeuse web passionnée dédiée à la création de sites web modernes, accessibles et performants. Je combine expertise technique et résolution créative de problèmes pour livrer des expériences numériques qui ont un impact.",
    about_years: "Années d'expérience",
    about_projects: "Projets terminés",
    about_tools: "Outils maîtrisés", 
    about_cv: "Télécharger mon CV",
    
    // Skills Section
    skills_title: "Compétences & Outils",
    skills_frontend: "Frontend",
    skills_backend: "Backend",
    skills_design: "Design", 
    skills_tools: "Outils",
    
    // Portfolio Section
    portfolio_title: "Mes Projets",
    portfolio_filter_all: "Tous",
    portfolio_filter_web: "Web",
    portfolio_filter_design: "Design",
    portfolio_filter_app: "App",
    
    // Project Details
    project_logo_title: "Design de Logo",
    project_logo_desc: "Design professionnel de logo et identité de marque pour entreprises et startups.",
    project_website_title: "Site Portfolio",
    project_website_desc: "Un site portfolio moderne et responsive pour présenter mon travail et mes compétences.",
    project_healthcare_title: "Système de Santé Étudiant",
    project_healthcare_desc: "Une application web pour gérer les dossiers et rendez-vous de santé des étudiants.",
    project_cosmetic_title: "Site Cosmétique",
    project_cosmetic_desc: "Un beau site responsive pour ma marque cosmétique personnelle, avec galeries de produits et formulaires de contact.",
    read_more: "En savoir plus",
    
    // Modal Details
    modal_technologies: "Technologies :",
    modal_role: "Rôle :",
    modal_results: "Résultats :",
    modal_done: "Terminé",
    
    // Technology Tags
    tech_html5: "HTML5",
    tech_css3: "CSS3",
    tech_javascript: "JavaScript",
    tech_bootstrap: "Bootstrap",
    tech_php: "PHP",
    tech_mysql: "MySQL",
    tech_illustrator: "Adobe Illustrator",
    tech_photoshop: "Adobe Photoshop",
    tech_brand_identity: "Identité de Marque",
    tech_logo_design: "Design de Logo",
    tech_responsive_design: "Design Responsif",
    tech_web_application: "Application Web",
    tech_database_design: "Design de Base de Données",
    tech_ecommerce: "E-commerce",
    
    // Roles
    role_designer: "Designer",
    role_developer_designer: "Développeur & Designer",
    role_full_stack: "Développeur Full Stack",
    
    // Results
    result_brand_recognition: "Amélioration de la reconnaissance de la marque",
    result_online_presence: "Présence en ligne augmentée",
    result_healthcare_management: "Gestion simplifiée de la santé",
    result_brand_visibility: "Visibilité de la marque améliorée",
    
    // Testimonials Section
    testimonials_title: "Témoignages",
    testimonials_instruction: "Faites glisser ou utilisez les flèches pour voir plus de témoignages",
    
    // Testimonial quotes
    testimonial_1: "La professionnalité et l'attention au détail d'Theodora sont incomparables. Elle a livré notre projet à temps et a dépassé les attentes.",
    testimonial_2: "Travailler avec Theodora a été une expérience fantastique. Ses solutions créatives ont donné vie à notre vision avec beauté.",
    testimonial_3: "Je recommande vivement Theodora pour tout projet web. Son expertise et sa détermination sont vraiment impressionnantes.",
    testimonial_4: "L'esprit d'équipe et la communication d'Theodora ont rendu le processus fluide et agréable. Des résultats remarquables !",
    testimonial_5: "De début à fin, Theodora a été attentive, créative et fiable. Je ne suis pas plus heureux du résultat.",
    
    // Contact Section
    contact_title: "Contactez-moi",
    contact_subtitle: "Travaillons ensemble sur votre prochain projet",
    contact_name: "Votre nom",
    contact_email: "Votre email",
    contact_message: "Votre message",
    contact_send: "Envoyer le message",
    
    // Footer
    footer_home: "Accueil",
    footer_about: "À propos",
    footer_projects: "Projets",
    footer_skills: "Compétences",
    footer_testimonials: "Témoignages",
    footer_contact: "Contact",
    footer_copyright: "© 2025 Theodora Fouda. Tous droits réservés.",
    
    // Modal Details
    modal_close: "Fermer"
  },
  
  es: {
    // Navigation
    nav_about: "Sobre mí",
    nav_portfolio: "Portafolio",
    nav_skills: "Habilidades",
    nav_testimonials: "Testimonios", 
    nav_contact: "Contacto",
    
    // Hero Section
    hero_title: "Theodora Fouda",
    hero_subtitle: "Construyendo experiencias web modernas",
    hero_intro: "Creo sitios web y aplicaciones responsivas centradas en el usuario que ayudan a marcas y personas a brillar en línea.",
    hero_cta: "Contáctame",
    
    // About Section
    about_title: "Sobre mí",
    about_desc: "Soy Theodora Fouda, una desarrolladora web apasionada dedicada a construir sitios web modernos, accesibles y de alto rendimiento. Combino experiencia técnica con resolución creativa de problemas para entregar experiencias digitales que causan impacto.",
    about_years: "Años de experiencia",
    about_projects: "Proyectos completados",
    about_tools: "Herramientas dominadas",
    about_cv: "Descargar mi CV",
    
    // Skills Section
    skills_title: "Habilidades & Herramientas",
    skills_frontend: "Frontend",
    skills_backend: "Backend",
    skills_design: "Diseño",
    skills_tools: "Herramientas",
    
    // Portfolio Section
    portfolio_title: "Mis Proyectos",
    portfolio_filter_all: "Todos",
    portfolio_filter_web: "Web",
    portfolio_filter_design: "Diseño",
    portfolio_filter_app: "App",
    
    // Project Details
    project_logo_title: "Diseño de Logo",
    project_logo_desc: "Diseño profesional de logo e identidad de marca para empresas y startups.",
    project_website_title: "Sitio Portfolio",
    project_website_desc: "Un portfolio moderno y responsivo para mostrar mi trabajo y habilidades.",
    project_healthcare_title: "Sistema de Salud Estudiantil",
    project_healthcare_desc: "Una aplicación web para gestionar registros y citas de salud estudiantil.",
    project_cosmetic_title: "Sitio Cosmético",
    project_cosmetic_desc: "Un hermoso sitio responsivo para mi marca cosmética personal, con galerías de productos y formularios de contacto.",
    read_more: "Leer más",
    
    // Modal Details
    modal_technologies: "Tecnologías:",
    modal_role: "Rol:",
    modal_results: "Resultados:",
    modal_done: "Hecho",
    
    // Technology Tags
    tech_html5: "HTML5",
    tech_css3: "CSS3",
    tech_javascript: "JavaScript",
    tech_bootstrap: "Bootstrap",
    tech_php: "PHP",
    tech_mysql: "MySQL",
    tech_illustrator: "Adobe Illustrator",
    tech_photoshop: "Adobe Photoshop",
    tech_brand_identity: "Identidad de Marca",
    tech_logo_design: "Diseño de Logo",
    tech_responsive_design: "Diseño Responsivo",
    tech_web_application: "Aplicación Web",
    tech_database_design: "Diseño de Base de Datos",
    tech_ecommerce: "E-commerce",
    
    // Roles
    role_designer: "Diseñador",
    role_developer_designer: "Desarrollador & Diseñador",
    role_full_stack: "Desarrollador Full Stack",
    
    // Results
    result_brand_recognition: "Reconocimiento de marca mejorado",
    result_online_presence: "Presencia en línea aumentada",
    result_healthcare_management: "Gestión de salud simplificada",
    result_brand_visibility: "Visibilidad de marca mejorada",
    
    // Testimonials Section
    testimonials_title: "Testimonios",
    testimonials_instruction: "Desliza o usa las flechas para ver más testimonios",
    
    // Testimonial quotes
    testimonial_1: "La profesionalidad y la atención al detalle de Theodora son incomparables. Entregó nuestro proyecto a tiempo y superó las expectativas.",
    testimonial_2: "Trabajar con Theodora fue una experiencia fantástica. Sus soluciones creativas dieron vida a nuestra visión con elegancia.",
    testimonial_3: "¡Recomiendo encarecidamente a Theodora para cualquier proyecto web! Su expertise y dedicación son realmente impresionantes.",
    testimonial_4: "El espíritu de equipo y la comunicación de Theodora hicieron que todo el proceso fuera fluido y agradable. ¡Resultados sobresalientes!",
    testimonial_5: "Desde el principio hasta el final, Theodora fue atenta, creativa y fiable. ¡No podría estar más feliz con el resultado.",
    
    // Contact Section
    contact_title: "Contáctame",
    contact_subtitle: "Trabajemos juntos en tu próximo proyecto",
    contact_name: "Tu nombre",
    contact_email: "Tu correo",
    contact_message: "Tu mensaje",
    contact_send: "Enviar mensaje",
    
    // Footer
    footer_home: "Inicio",
    footer_about: "Sobre mí",
    footer_projects: "Proyectos",
    footer_skills: "Habilidades",
    footer_testimonials: "Testimonios",
    footer_contact: "Contacto",
    footer_copyright: "© 2025 Theodora Fouda. Todos los derechos reservados.",
    
    // Modal Details
    modal_close: "Cerrar"
  },
  
  de: {
    // Navigation
    nav_about: "Über mich",
    nav_portfolio: "Portfolio",
    nav_skills: "Fähigkeiten",
    nav_testimonials: "Referenzen",
    nav_contact: "Kontakt",
    
    // Hero Section
    hero_title: "Theodora Fouda",
    hero_subtitle: "Moderne Web-Erlebnisse schaffen",
    hero_intro: "Ich erstelle responsive, benutzerorientierte Websites und Web-Apps, die Marken und Menschen online zum Glänzen bringen.",
    hero_cta: "Kontakt aufnehmen",
    
    // About Section
    about_title: "Über mich",
    about_desc: "Ich bin Theodora Fouda, eine leidenschaftliche Webentwicklerin, die sich der Erstellung moderner, zugänglicher und leistungsstarker Websites widmet. Ich kombiniere technische Expertise mit kreativer Problemlösung, um digitale Erlebnisse zu liefern, die Eindruck hinterlassen.",
    about_years: "Jahre Erfahrung",
    about_projects: "Abgeschlossene Projekte",
    about_tools: "Beherrschte Tools",
    about_cv: "Meinen Lebenslauf herunterladen",
    
    // Skills Section
    skills_title: "Fähigkeiten & Tools",
    skills_frontend: "Frontend",
    skills_backend: "Backend",
    skills_design: "Design",
    skills_tools: "Tools",
    
    // Portfolio Section
    portfolio_title: "Meine Projekte",
    portfolio_filter_all: "Alle",
    portfolio_filter_web: "Web",
    portfolio_filter_design: "Design",
    portfolio_filter_app: "App",
    
    // Project Details
    project_logo_title: "Logo-Design",
    project_logo_desc: "Professionelles Logo- und Markendesign für Unternehmen und Startups.",
    project_website_title: "Portfolio-Website",
    project_website_desc: "Eine moderne, responsive Portfolio-Website zur Präsentation meiner Arbeit und Fähigkeiten.",
    project_healthcare_title: "Studenten-Gesundheitssystem",
    project_healthcare_desc: "Eine Webanwendung zur Verwaltung von Studentengesundheitsakten und Terminen.",
    project_cosmetic_title: "Kosmetik-Website",
    project_cosmetic_desc: "Eine schöne, responsive Website für meine persönliche Kosmetikmarke mit Produktgalerien und Kontaktformularen.",
    read_more: "Mehr erfahren",
    
    // Modal Details
    modal_technologies: "Technologien:",
    modal_role: "Rolle:",
    modal_results: "Ergebnisse:",
    modal_done: "Fertig",
    
    // Technology Tags
    tech_html5: "HTML5",
    tech_css3: "CSS3",
    tech_javascript: "JavaScript",
    tech_bootstrap: "Bootstrap",
    tech_php: "PHP",
    tech_mysql: "MySQL",
    tech_illustrator: "Adobe Illustrator",
    tech_photoshop: "Adobe Photoshop",
    tech_brand_identity: "Markenidentität",
    tech_logo_design: "Logo-Design",
    tech_responsive_design: "Responsives Design",
    tech_web_application: "Web-Anwendung",
    tech_database_design: "Datenbank-Design",
    tech_ecommerce: "E-Commerce",
    
    // Roles
    role_designer: "Designer",
    role_developer_designer: "Entwickler & Designer",
    role_full_stack: "Full Stack Entwickler",
    
    // Results
    result_brand_recognition: "Markenbekanntheit verbessert",
    result_online_presence: "Online-Präsenz erhöht",
    result_healthcare_management: "Gesundheitsverwaltung vereinfacht",
    result_brand_visibility: "Markenwahrnehmbarkeit verbessert",
    
    // Testimonials Section
    testimonials_title: "Referenzen",
    testimonials_instruction: "Fahren Sie mit der linken oder rechten Pfeiltaste weiter, um mehr Referenzen zu sehen",
    
    // Testimonial quotes
    testimonial_1: "Die Professionalität und die Aufmerksamkeit auf Details bei Theodora sind einzigartig. Sie haben unser Projekt pünktlich und überzeugend abgeliefert.",
    testimonial_2: "Mit Theodora war eine fantastische Erfahrung. Ihre kreativen Lösungen haben unsere Vision mit Eleganz zum Leben erweckt.",
    testimonial_3: "Ich empfehle Theodora sehr empfehlen. Ihre Expertise und ihre Verbundenheit sind wirklich beeindruckend.",
    testimonial_4: "Das Team-Spielfeld und die Kommunikation bei Theodora machten das ganze Prozess flüssig und angenehm. Ausgezeichnete Ergebnisse!",
    testimonial_5: "Von Anfang bis Ende war Theodora aufmerksam, kreativ und zuverlässig. Ich bin mit dem Ergebnis sehr zufrieden.",
    
    // Contact Section
    contact_title: "Kontaktieren Sie mich",
    contact_subtitle: "Lassen Sie uns zusammen an Ihrem nächsten Projekt arbeiten",
    contact_name: "Ihr Name",
    contact_email: "Ihre E-Mail",
    contact_message: "Ihre Nachricht",
    contact_send: "Nachricht senden",
    
    // Footer
    footer_home: "Startseite",
    footer_about: "Über mich",
    footer_projects: "Projekte",
    footer_skills: "Fähigkeiten",
    footer_testimonials: "Referenzen",
    footer_contact: "Kontakt",
    footer_copyright: "© 2025 Theodora Fouda. Alle Rechte vorbehalten.",
    
    // Modal Details
    modal_close: "Schließen"
  }
};

// Language order for cycling
const langOrder = ["en", "fr", "es", "de"];

// Enhanced language toggle function
function setLanguage(lang) {
  localStorage.setItem('lang', lang);
  
  // Update all elements with data-i18n attribute
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
  
  // Update placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if (translations[lang][key]) {
      el.setAttribute('placeholder', translations[lang][key]);
    }
  });
  
  // Update modal content
  updateModalContent(lang);
  
  // Update current language display
  const currentLangElement = document.getElementById('currentLang');
  if (currentLangElement) {
    currentLangElement.textContent = lang.toUpperCase();
  }
  
  // Update chatbot language
  currentChatLang = lang;
  updateChatbotLanguage();
}

// Function to update modal content based on language
function updateModalContent(lang) {
  // Update modal titles
  const modalTitles = document.querySelectorAll('.modal-title');
  modalTitles.forEach((title, index) => {
    const projectKeys = ['project_logo_title', 'project_website_title', 'project_healthcare_title', 'project_cosmetic_title'];
    if (projectKeys[index]) {
      title.textContent = translations[lang][projectKeys[index]];
    }
  });
  
  // Update modal descriptions
  const modalDescs = document.querySelectorAll('.modal-body p');
  modalDescs.forEach((desc, index) => {
    const descKeys = ['project_logo_desc', 'project_website_desc', 'project_healthcare_desc', 'project_cosmetic_desc'];
    if (descKeys[index]) {
      desc.textContent = translations[lang][descKeys[index]];
    }
  });
  
  // Update modal labels
  const techLabels = document.querySelectorAll('.modal-tech-label');
  techLabels.forEach(label => {
    label.textContent = translations[lang]['modal_technologies'];
  });
  
  const roleLabels = document.querySelectorAll('.modal-role-label');
  roleLabels.forEach(label => {
    label.textContent = translations[lang]['modal_role'];
  });
  
  const resultLabels = document.querySelectorAll('.modal-result-label');
  resultLabels.forEach(label => {
    label.textContent = translations[lang]['modal_results'];
  });
  
  // Update technology tags
  const techTags = document.querySelectorAll('.tech-tag');
  techTags.forEach(tag => {
    const techKey = tag.getAttribute('data-tech');
    if (techKey && translations[lang][techKey]) {
      tag.textContent = translations[lang][techKey];
    }
  });
  
  // Update role text
  const roleTexts = document.querySelectorAll('.role-text');
  roleTexts.forEach((role, index) => {
    const roleKeys = ['role_designer', 'role_developer_designer', 'role_full_stack', 'role_designer'];
    if (roleKeys[index]) {
      role.textContent = translations[lang][roleKeys[index]];
    }
  });
  
  // Update result text
  const resultTexts = document.querySelectorAll('.result-text');
  resultTexts.forEach((result, index) => {
    const resultKeys = ['result_brand_recognition', 'result_online_presence', 'result_healthcare_management', 'result_brand_visibility'];
    if (resultKeys[index]) {
      result.textContent = translations[lang][resultKeys[index]];
    }
  });
  
  // Update Done button
  const doneButtons = document.querySelectorAll('.btn-done');
  doneButtons.forEach(btn => {
    btn.textContent = translations[lang]['modal_done'];
  });
}

// Counter Animation
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
  counter.innerText = '0';
  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 100;
    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});

// Portfolio Filter by Type
const filterButtons = document.querySelectorAll('.nel-filter-btn');
const projectItems = document.querySelectorAll('.nel-project-item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', function() {
    filterButtons.forEach(b => b.classList.remove('active'));
    this.classList.add('active');
    const filter = this.getAttribute('data-filter');
    projectItems.forEach(item => {
      if (filter === 'All' || item.getAttribute('data-type') === filter) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Chatbot logic with multilingual support
const chatbotResponses = {
  en: {
    greetings: [
      "Hello! How can I help you today?",
      "Hi there! Need info about my work or services?",
      "Hey! Ask me anything about my portfolio.",
      "Greetings! How can I assist you?"
    ],
    portfolio: [
      "I have projects in web design, web apps, and branding. Check the Portfolio section above!",
      "You can view my projects in the 'My Projects' section. Want details about a specific one?",
      "My portfolio includes a logo design, a student healthcare web app, and this website itself!"
    ],
    services: [
      "I offer web design, branding & graphic design, and web app development.",
      "My services include modern website creation, logo/brand design, and building web applications.",
      "I can help with web design, branding, and custom web app solutions."
    ],
    contact: [
      "You can contact me via the form above, or email me at theodorafouda@gmail.com.",
      "Feel free to reach out on WhatsApp or use the contact form!",
      "My email is theodorafouda@gmail.com. I'm also available on WhatsApp."
    ],
    cv: "You can download my CV using the 'Download My CV' button in the About section.",
    thanks: "You're welcome! Let me know if you have more questions.",
    default: [
      "I'm not sure I understand. Can you rephrase?",
      "Sorry, I didn't get that. Try asking about my projects, services, or contact info!",
      "I'm here to help! Ask me about my work, services, or how to contact me."
    ],
    welcome: "Welcome! 👋 I'm Theodora's AI assistant",
    intro: "Ask me about Theodora's projects, skills, or how to contact her. I'm here to help!",
    placeholder: "Type your message...",
    about_theodora: [
      "I'm Theodora Fouda, a passionate web developer with a focus on creating modern, accessible, and high-performing websites.",
      "I'm Theodora Fouda, a web developer who loves crafting responsive, user-focused websites.",
      "I'm Theodora Fouda, a dedicated developer who specializes in building modern, accessible, and high-performing websites."
    ],
    portfolio_tech: [
      "This portfolio website was built using HTML, CSS, and JavaScript. It's fully responsive and uses modern web technologies.",
      "I designed and developed this portfolio website using modern web technologies like React, Tailwind CSS, and Vite.",
      "This portfolio showcases my work and skills using modern web technologies including React, Tailwind CSS, and Vite."
    ],
    tools_skills: [
      "Theodora uses a variety of tools including HTML5, CSS3, JavaScript, Bootstrap, PHP, MySQL, and design tools like Photoshop and Illustrator. She's also skilled with Git, VS Code, and Canva.",
      "Her main tools include frontend technologies (HTML, CSS, JavaScript, Bootstrap), backend (PHP, MySQL, Django), and design tools (Photoshop, Illustrator, Canva). She also uses Git for version control and VS Code for development.",
      "Theodora's toolkit includes modern web technologies: HTML5, CSS3, JavaScript, Bootstrap for frontend; PHP, MySQL, Django for backend; and Photoshop, Illustrator, Canva for design work."
    ],
    general_info: [
      "I'm here to help! Feel free to ask me about my work, services, or how to contact me.",
      "I'm here to chat! What would you like to know about my portfolio or services?",
      "I'm here to assist! You can ask me about my projects, skills, or how to get in touch."
    ]
  },
  fr: {
    greetings: [
      "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
      "Salut ! Besoin d'informations sur mon travail ou mes services ?",
      "Coucou ! Posez-moi vos questions sur mon portfolio.",
      "Salutations ! Comment puis-je vous assister ?"
    ],
    portfolio: [
      "J'ai des projets en web design, applications web et branding. Consultez la section Portfolio ci-dessus !",
      "Vous pouvez voir mes projets dans la section 'Mes Projets'. Voulez-vous des détails sur un projet spécifique ?",
      "Mon portfolio inclut un design de logo, une application santé étudiante, et ce site web !"
    ],
    services: [
      "J'offre du web design, du branding & design graphique, et du développement d'applications web.",
      "Mes services incluent la création de sites modernes, le design de logo/marque, et le développement d'applications web.",
      "Je peux vous aider en web design, branding, et solutions web sur mesure."
    ],
    contact: [
      "Vous pouvez me contacter via le formulaire ci-dessus, ou par email à theodorafouda@gmail.com.",
      "N'hésitez pas à me joindre sur WhatsApp ou via le formulaire de contact !",
      "Mon email est theodorafouda@gmail.com. Je suis aussi sur WhatsApp."
    ],
    cv: "Vous pouvez télécharger mon CV via le bouton 'Télécharger mon CV' dans la section À propos.",
    thanks: "Avec plaisir ! N'hésitez pas si vous avez d'autres questions.",
    default: [
      "Je ne suis pas sûr d'avoir compris. Pouvez-vous reformuler ?",
      "Désolé, je n'ai pas compris. Essayez de demander sur mes projets, services ou contact !",
      "Je suis là pour aider ! Demandez-moi sur mon travail, mes services ou comment me contacter."
    ],
    welcome: "Bienvenue ! 👋 Je suis l'assistant IA de Theodora",
    intro: "Demandez-moi les projets, compétences de Theodora ou comment la contacter. Je suis là pour vous aider !",
    placeholder: "Tapez votre message...",
    about_theodora: [
      "Je suis Theodora Fouda, une développeuse web passionnée qui a pour objectif de créer des sites web modernes, accessibles et performants.",
      "Je suis Theodora Fouda, une développeuse web qui aime créer des sites web responsifs et centrés sur l'utilisateur.",
      "Je suis Theodora Fouda, une développeuse web dédiée qui se spécialise dans la création de sites web modernes, accessibles et performants."
    ],
    portfolio_tech: [
      "Ce site portfolio a été créé en utilisant HTML, CSS et JavaScript. Il est entièrement responsive et utilise des technologies web modernes.",
      "J'ai conçu et développé ce site portfolio en utilisant des technologies web modernes comme React, Tailwind CSS et Vite.",
      "Ce site portfolio présente mon travail et mes compétences en utilisant des technologies web modernes incluant React, Tailwind CSS et Vite."
    ],
    tools_skills: [
      "Theodora utilise une variété d'outils incluant HTML5, CSS3, JavaScript, Bootstrap, PHP, MySQL, et des outils de design comme Photoshop et Illustrator. Elle maîtrise aussi Git, VS Code et Canva.",
      "Ses principaux outils incluent les technologies frontend (HTML, CSS, JavaScript, Bootstrap), backend (PHP, MySQL, Django), et outils de design (Photoshop, Illustrator, Canva). Elle utilise aussi Git pour le contrôle de version et VS Code pour le développement.",
      "La boîte à outils de Theodora inclut les technologies web modernes : HTML5, CSS3, JavaScript, Bootstrap pour le frontend ; PHP, MySQL, Django pour le backend ; et Photoshop, Illustrator, Canva pour le travail de design."
    ],
    general_info: [
      "Je suis là pour vous aider ! N'hésitez pas à me demander des informations sur mon travail, mes services ou comment me contacter.",
      "Je suis là pour discuter ! Que souhaitez-vous savoir sur mon portfolio ou mes services ?",
      "Je suis là pour vous assister ! Vous pouvez me demander des informations sur mes projets, compétences ou comment me joindre."
    ]
  },
  es: {
    greetings: [
      "¡Hola! ¿Cómo puedo ayudarte hoy?",
      "¡Hola! ¿Necesitas información sobre mi trabajo o servicios?",
      "¡Hey! Pregúntame cualquier cosa sobre mi portafolio.",
      "¡Saludos! ¿En qué puedo ayudarte?"
    ],
    portfolio: [
      "Tengo proyectos en diseño web, aplicaciones web y branding. ¡Mira la sección Portafolio arriba!",
      "Puedes ver mis proyectos en la sección 'Mis Proyectos'. ¿Quieres detalles de alguno?",
      "Mi portafolio incluye diseño de logotipo, una app de salud estudiantil y este sitio web."
    ],
    services: [
      "Ofrezco diseño web, branding y desarrollo de aplicaciones web.",
      "Mis servicios incluyen creación de sitios modernos, diseño de marca y desarrollo de apps web.",
      "Puedo ayudarte con diseño web, branding y soluciones web personalizadas."
    ],
    contact: [
      "Puedes contactarme mediante el formulario arriba, o por email a theodorafouda@gmail.com.",
      "¡No dudes en escribirme por WhatsApp o usar el formulario de contacto!",
      "Mi email es theodorafouda@gmail.com. También estoy en WhatsApp."
    ],
    cv: "Puedes descargar mi CV usando el botón 'Descargar mi CV' en la sección Sobre mí.",
    thanks: "¡De nada! Si tienes más preguntas, dime.",
    default: [
      "No estoy seguro de entender. ¿Puedes reformular?",
      "Perdón, no entendí. ¡Pregunta sobre mis proyectos, servicios o contacto!",
      "¡Estoy aquí para ayudar! Pregúntame sobre mi trabajo, servicios o cómo contactarme."
    ],
    welcome: "¡Bienvenido! 👋",
    intro: "Pregúntame sobre mis proyectos, servicios o cómo contactarme. ¡Estoy aquí para chatear!",
    placeholder: "Escribe tu mensaje...",
    about_theodora: [
      "Soy Theodora Fouda, una desarrolladora web apasionada dedicada a construir sitios web modernos, accesibles y de alto rendimiento.",
      "Soy Theodora Fouda, una desarrolladora web que le encanta crear sitios web responsivos y centrados en el usuario.",
      "Soy Theodora Fouda, una desarrolladora web dedicada que se especializa en la creación de sitios web modernos, accesibles y de alto rendimiento."
    ],
    portfolio_tech: [
      "Este sitio portfolio fue construido usando HTML, CSS y JavaScript. Es completamente responsivo y utiliza tecnologías web modernas.",
      "Diseñé y desarrollé este sitio portfolio usando tecnologías web modernas como React, Tailwind CSS y Vite.",
      "Este sitio portfolio presenta mi trabajo y habilidades utilizando tecnologías web modernas incluyendo React, Tailwind CSS y Vite."
    ],
    tools_skills: [
      "Theodora utiliza una variedad de herramientas incluyendo HTML5, CSS3, JavaScript, Bootstrap, PHP, MySQL, y herramientas de diseño como Photoshop e Illustrator. También es experta en Git, VS Code y Canva.",
      "Sus principales herramientas incluyen tecnologías frontend (HTML, CSS, JavaScript, Bootstrap), backend (PHP, MySQL, Django), y herramientas de diseño (Photoshop, Illustrator, Canva). También usa Git para control de versiones y VS Code para desarrollo.",
      "El kit de herramientas de Theodora incluye tecnologías web modernas: HTML5, CSS3, JavaScript, Bootstrap para frontend; PHP, MySQL, Django para backend; y Photoshop, Illustrator, Canva para trabajo de diseño."
    ],
    general_info: [
      "Estoy aquí para ayudarte! No dudes en preguntarme sobre mi trabajo, servicios o cómo contactarme.",
      "Estoy aquí para chatear! ¿Qué te gustaría saber sobre mi portafolio o servicios?",
      "Estoy aquí para asistirte! Puedes preguntarme sobre mis proyectos, habilidades o cómo ponerme en contacto."
    ]
  },
  de: {
    greetings: [
      "Hallo! Wie kann ich Ihnen heute helfen?",
      "Hi! Brauchen Sie Infos zu meiner Arbeit oder meinen Services?",
      "Hey! Fragen Sie mich alles zu meinem Portfolio.",
      "Grüße! Wie kann ich helfen?"
    ],
    portfolio: [
      "Ich habe Projekte in Webdesign, Web-Apps und Branding. Siehe den Portfolio-Bereich oben!",
      "Sie können meine Projekte im Bereich 'Meine Projekte' sehen. Möchten Sie Details zu einem bestimmten?",
      "Mein Portfolio umfasst ein Logodesign, eine Studenten-Healthcare-App und diese Website!"
    ],
    services: [
      "Ich biete Webdesign, Branding & Grafikdesign und Web-App-Entwicklung an.",
      "Meine Services umfassen moderne Websites, Logo-/Markendesign und Webanwendungen.",
      "Ich helfe bei Webdesign, Branding und individuellen Web-Lösungen."
    ],
    contact: [
      "Sie können mich über das Formular oben oder per E-Mail an theodorafouda@gmail.com kontaktieren.",
      "Kontaktieren Sie mich gerne per WhatsApp oder Kontaktformular!",
      "Meine E-Mail ist theodorafouda@gmail.com. Ich bin auch auf WhatsApp."
    ],
    cv: "Sie können meinen Lebenslauf über den Button 'Meinen Lebenslauf herunterladen' im Bereich Über mich herunterladen.",
    thanks: "Gern geschehen! Bei weiteren Fragen einfach fragen.",
    default: [
      "Ich bin mir nicht sicher, ob ich das verstanden habe. Können Sie umformulieren?",
      "Sorry, das habe ich nicht verstanden. Fragen Sie nach Projekten, Services oder Kontakt!",
      "Ich bin hier, um zu helfen! Fragen Sie zu meiner Arbeit, meinen Services oder wie Sie mich erreichen."
    ],
    welcome: "Willkommen! 👋",
    intro: "Fragen Sie mich zu meinen Projekten, Services oder wie Sie mich erreichen. Ich bin hier zum Chatten!",
    placeholder: "Geben Sie Ihre Nachricht ein...",
    about_theodora: [
      "Ich bin Theodora Fouda, eine leidenschaftliche Webentwicklerin, die sich der Erstellung moderner, zugänglicher und leistungsstarker Websites widmet. Ich kombiniere technische Expertise mit kreativer Problemlösung, um digitale Erlebnisse zu liefern, die Eindruck hinterlassen.",
      "Ich bin Theodora Fouda, eine leidenschaftliche Webentwicklerin, die sich der Erstellung moderner, zugänglicher und leistungsstarker Websites widmet. Ich kombiniere technische Expertise mit kreativer Problemlösung, um digitale Erlebnisse zu liefern, die Eindruck hinterlassen.",
      "Ich bin Theodora Fouda, eine leidenschaftliche Webentwicklerin, die sich der Erstellung moderner, zugänglicher und leistungsstarker Websites widmet. Ich kombiniere technische Expertise mit kreativer Problemlösung, um digitale Erlebnisse zu liefern, die Eindruck hinterlassen."
    ],
    portfolio_tech: [
      "Dieses Portfolio wurde mit HTML, CSS und JavaScript erstellt. Es ist vollständig responsiv und verwendet moderne Webtechnologien.",
      "Ich entwarf und entwickelte dieses Portfolio mit modernen Webtechnologien wie React, Tailwind CSS und Vite.",
      "Dieses Portfolio präsentiert meine Arbeit und Fähigkeiten unter Verwendung moderner Webtechnologien, einschließlich React, Tailwind CSS und Vite."
    ],
    tools_skills: [
      "Theodora verwendet eine Vielzahl von Tools einschließlich HTML5, CSS3, JavaScript, Bootstrap, PHP, MySQL und Design-Tools wie Photoshop und Illustrator. Sie ist auch versiert in Git, VS Code und Canva.",
      "Ihre Hauptwerkzeuge umfassen Frontend-Technologien (HTML, CSS, JavaScript, Bootstrap), Backend (PHP, MySQL, Django) und Design-Tools (Photoshop, Illustrator, Canva). Sie verwendet auch Git für Versionskontrolle und VS Code für die Entwicklung.",
      "Theodoras Toolkit umfasst moderne Webtechnologien: HTML5, CSS3, JavaScript, Bootstrap für Frontend; PHP, MySQL, Django für Backend; und Photoshop, Illustrator, Canva für Design-Arbeit."
    ],
    general_info: [
      "Ich bin hier, um zu helfen! Fragen Sie zu meiner Arbeit, meinen Services oder wie Sie mich erreichen.",
      "Ich bin hier zum Chatten! Was möchten Sie über mein Portfolio oder meine Services wissen?",
      "Ich bin hier, um zu helfen! Sie können mich fragen über meine Projekte, Fähigkeiten oder wie Sie mich erreichen."
    ]
  }
};

let currentChatLang = localStorage.getItem('lang') || 'en';

function getBotResponse(input) {
  const lang = currentChatLang;
  input = input.toLowerCase();
  
  // Greetings - Multi-language
  if (/\b(hi|hello|hey|good morning|good afternoon|good evening|bonjour|salut|coucou|hola|hey|hallo|guten tag|guten morgen|guten abend)\b/.test(input)) {
    return chatbotResponses[lang].greetings[Math.floor(Math.random() * chatbotResponses[lang].greetings.length)];
  }
  
  // About Theodora specifically - Multi-language
  if (/who is theodora|theodora fouda|tell me about theodora|who are you|about you|who is she|who is this|tell me about her|what does she do|what does theodora do|qui est theodora|parle moi de theodora|qui es tu|qui est elle|que fait elle|que fait theodora|quien es theodora|hablame de theodora|quien eres|que hace ella|que hace theodora|wer ist theodora|erzähl mir von theodora|wer bist du|wer ist sie|was macht sie|was macht theodora/.test(input)) {
    return chatbotResponses[lang].about_theodora[Math.floor(Math.random() * chatbotResponses[lang].about_theodora.length)];
  }
  
  // Skills & Tools - Multi-language
  if (/skills|tools|technologies|what can she do|what does she know|how did you build|how was this made|what technologies|what did you use|built with|made with|how did she build|what did she use|what tech|which tool|what tools|what technology|which technology|what does she use|what tools does she use|which tools does she use|compétences|outils|technologies|que peut elle faire|que sait elle|comment as tu construit|comment a été fait|quelles technologies|qu'est ce qu'elle utilise|avec quoi|construit avec|fait avec|comment a t elle construit|qu'est ce qu'elle utilise|quel outil|quels outils|quelle technologie|quelles technologies|qu'est ce qu'elle utilise|quels outils utilise t elle|quelles technologies utilise t elle|habilidades|herramientas|tecnologías|qué puede hacer|qué sabe|cómo construiste|cómo se hizo|qué tecnologías|qué usa|con qué|construido con|hecho con|cómo construyó|qué usa|qué herramienta|qué herramientas|qué tecnología|qué tecnologías|qué usa|qué herramientas usa|qué tecnologías usa|fähigkeiten|werkzeuge|technologien|was kann sie|was weiß sie|wie hast du gebaut|wie wurde das gemacht|welche technologien|was verwendet sie|womit|gebaut mit|gemacht mit|wie hat sie gebaut|was verwendet sie|welches werkzeug|welche werkzeuge|welche technologie|welche technologien|was verwendet sie|welche werkzeuge verwendet sie|welche technologien verwendet sie/.test(input)) {
    return chatbotResponses[lang].tools_skills[Math.floor(Math.random() * chatbotResponses[lang].tools_skills.length)];
  }
  
  // Portfolio/Projects - Multi-language
  if (/project|portfolio|work|showcase|projet|travail|portefeuille|proyecto|trabajo|portafolio|projekt|arbeit|portfolio|progetti|lavoro|portfolio|projetos|trabalho|portfólio/.test(input)) {
    return chatbotResponses[lang].portfolio[Math.floor(Math.random() * chatbotResponses[lang].portfolio.length)];
  }
  
  // Services - Multi-language
  if (/service|offer|do you do|can you|offre|service|servicio|ofrecer|puedes|dienstleistung|bieten|angebot|kannst du|servizi|offrire|puoi|serviços|oferecer|pode/.test(input)) {
    return chatbotResponses[lang].services[Math.floor(Math.random() * chatbotResponses[lang].services.length)];
  }
  
  // Contact - Multi-language
  if (/contact|email|reach|phone|whatsapp|contacter|email|joindre|téléphone|correo|contactar|alcanzar|teléfono|kontakt|email|erreichen|telefon|contatto|email|raggiungere|telefono|contato|email|alcançar|telefone/.test(input)) {
    return chatbotResponses[lang].contact[Math.floor(Math.random() * chatbotResponses[lang].contact.length)];
  }
  
  // CV/Resume - Multi-language
  if (/cv|resume|download|curriculum|lebenslauf|télécharger|cv|curriculum vitae|descargar|currículum|herunterladen|lebenslauf|scaricare|curriculum|baixar|currículo/.test(input)) {
    return chatbotResponses[lang].cv;
  }
  
  // Thanks - Multi-language
  if (/thank|thanks|merci|gracias|danke|grazie|obrigado/.test(input)) {
    return chatbotResponses[lang].thanks;
  }
  
  // General info requests - Multi-language
  if (/anything|go on|tell me more|what else|more info|autre chose|dis m'en plus|quoi d'autre|plus d'info|algo más|dime más|qué más|más info|etwas anderes|erzähl mir mehr|was sonst|mehr info|qualcos'altro|dimmi di più|cos'altro|più info|algo mais|diga mais|o que mais|mais info/.test(input)) {
    return chatbotResponses[lang].general_info[Math.floor(Math.random() * chatbotResponses[lang].general_info.length)];
  }
  
  return chatbotResponses[lang].default[Math.floor(Math.random() * chatbotResponses[lang].default.length)];
}

// Chatbot UI logic
function addChatMessage(message, fromBot = false) {
  const body = document.querySelector('.chatbot-body');
  const msgDiv = document.createElement('div');
  msgDiv.className = fromBot ? 'mb-2 text-start' : 'mb-2 text-end';
  msgDiv.innerHTML = `<span style="display:inline-block;max-width:80%;padding:8px 14px;border-radius:14px;${fromBot ? 'background:#e0e7ef;color:#1e3a8a;' : 'background:#1e3a8a;color:#fff;'}">${message}</span>`;
  body.appendChild(msgDiv);
  body.scrollTop = body.scrollHeight;
}

function setupChatbot() {
  const chatbot = document.querySelector('.chatbot');
  const body = document.querySelector('.chatbot-body');
  
  // Add input area if not present
  if (!document.querySelector('.chatbot-input-area')) {
    const inputArea = document.createElement('div');
    inputArea.className = 'chatbot-input-area';
    inputArea.innerHTML = `
      <input type="text" placeholder="${chatbotResponses[currentChatLang].placeholder}" />
      <button>Send</button>
    `;
    chatbot.appendChild(inputArea);
    
    // Toggle chatbot
    document.querySelector('.chatbot-header').onclick = () => {
      chatbot.classList.toggle('active');
      if (chatbot.classList.contains('active')) body.style.display = 'block';
      else body.style.display = 'none';
    };
    
    // Show body by default
    body.style.display = 'none';
    
    // Send message
    const input = inputArea.querySelector('input');
    const button = inputArea.querySelector('button');
    function sendMessage() {
      const val = input.value.trim();
      if (!val) return;
      addChatMessage(val, false);
      setTimeout(() => {
        addChatMessage(getBotResponse(val), true);
      }, 500);
      input.value = '';
    }
    button.onclick = sendMessage;
    input.addEventListener('keydown', e => {
      if (e.key === 'Enter') sendMessage();
    });
  }
  
  // Set welcome and intro only if not already present
  if (!body.querySelector('.welcome-message')) {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.className = 'welcome-message';
    welcomeDiv.innerHTML = `
      <div style="color:#1e3a8a;font-weight:600;margin-bottom:8px;">${chatbotResponses[currentChatLang].welcome}</div>
      <div style="font-size:0.97rem;margin-bottom:10px;">${chatbotResponses[currentChatLang].intro}</div>
    `;
    body.insertBefore(welcomeDiv, body.firstChild);
  }
}

// Listen for language changes
window.addEventListener('DOMContentLoaded', () => {
  setupChatbot();
  window.addEventListener('storage', function(e) {
    if (e.key === 'lang') {
      currentChatLang = localStorage.getItem('lang') || 'en';
      updateChatbotLanguage();
    }
  });
});

function updateChatbotLanguage() {
  // Update welcome and intro
  const body = document.querySelector('.chatbot-body');
  if (body) {
    const welcomeMessage = body.querySelector('.welcome-message');
    if (welcomeMessage) {
      welcomeMessage.innerHTML = `
        <div style="color:#1e3a8a;font-weight:600;margin-bottom:8px;">${chatbotResponses[currentChatLang].welcome}</div>
        <div style="font-size:0.97rem;margin-bottom:10px;">${chatbotResponses[currentChatLang].intro}</div>
      `;
    }
  }
  // Update input placeholder
  const input = document.querySelector('.chatbot-input-area input');
  if (input) input.setAttribute('placeholder', chatbotResponses[currentChatLang].placeholder);
}

// Theme Toggle
function setupThemeToggle() {
  // Attach event listener to all #toggleTheme buttons (in case there are multiple in DOM)
  function attachThemeToggleListeners() {
    document.querySelectorAll('#toggleTheme').forEach(btn => {
      btn.onclick = function() {
        const currentTheme = document.body.getAttribute('data-bs-theme') || 'light';
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-bs-theme', newTheme);
        localStorage.setItem('theme', newTheme);
      };
    });
  }

  // Initial setup: listeners only (theme is already set above)
  attachThemeToggleListeners();

  // Re-attach listeners if navbar is toggled (for mobile)
  const navbar = document.getElementById('mainNavbar');
  if (navbar) {
    navbar.addEventListener('click', function(e) {
      if (e.target && e.target.id === 'toggleTheme') {
        attachThemeToggleListeners();
      }
    });
  }

  // Also re-attach after DOM changes (e.g. collapse/expand)
  const navCollapse = document.getElementById('navbarNav');
  if (navCollapse) {
    navCollapse.addEventListener('shown.bs.collapse', attachThemeToggleListeners);
    navCollapse.addEventListener('hidden.bs.collapse', attachThemeToggleListeners);
  }
}

// Skills & Tools Tabs logic
function setupSkillsTabs() {
  const tabBtns = document.querySelectorAll('.skills-tab-btn');
  const tabPanels = document.querySelectorAll('.skills-tab-panel');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      tabBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      const tab = this.getAttribute('data-tab');
      tabPanels.forEach(panel => {
        if (panel.getAttribute('data-tab-panel') === tab) {
          panel.style.display = 'block';
        } else {
          panel.style.display = 'none';
        }
      });
    });
  });
}
document.addEventListener('DOMContentLoaded', setupSkillsTabs);

// Remove skill circle animation code (no longer needed)

// Modern Navbar Scroll Effect
function handleNavbarScroll() {
  const navbar = document.getElementById('mainNavbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// Active Navigation Link
function setActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.modern-nav-link');
  
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= (sectionTop - 200)) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}

// Main DOMContentLoaded
window.addEventListener('DOMContentLoaded', function() {
  // Language system
  const savedLang = localStorage.getItem('lang') || 'en';
  setLanguage(savedLang);

  // Theme system
  setupThemeToggle();

  // Chatbot
  setupChatbot();
  window.addEventListener('storage', function(e) {
    if (e.key === 'lang') {
      currentChatLang = localStorage.getItem('lang') || 'en';
      updateChatbotLanguage();
    }
  });

  // Skills tabs
  setupSkillsTabs();

  // Navbar scroll/active
  window.addEventListener('scroll', handleNavbarScroll);
  window.addEventListener('scroll', setActiveNavLink);
  handleNavbarScroll();
  setActiveNavLink();
});
