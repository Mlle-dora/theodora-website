// =======================
// script.js
// =======================

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

// Portfolio Filter
const filterButtons = document.querySelectorAll('#filters .btn');
const projectCards = document.querySelectorAll('#projectGrid > div');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('#filters .btn.active')?.classList.remove('active');
    button.classList.add('active');

    const category = button.getAttribute('data-filter');
    projectCards.forEach(card => {
      if (category === 'all' || card.classList.contains(category)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
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
    welcome: "Welcome! 👋",
    intro: "Ask me about my projects, services, or how to contact me. I'm here to chat!",
    placeholder: "Type your message..."
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
    welcome: "Bienvenue ! 👋",
    intro: "Demandez-moi mes projets, services ou comment me contacter. Je suis là pour discuter !",
    placeholder: "Tapez votre message..."
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
    placeholder: "Escribe tu mensaje..."
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
    placeholder: "Geben Sie Ihre Nachricht ein..."
  }
};

let currentChatLang = localStorage.getItem('lang') || 'en';

function getBotResponse(input) {
  const lang = currentChatLang;
  input = input.toLowerCase();
  // Greetings
  if (/\b(hi|hello|hey|good morning|good afternoon|good evening|bonjour|salut|hola|hallo|guten tag)\b/.test(input)) {
    return chatbotResponses[lang].greetings[Math.floor(Math.random() * chatbotResponses[lang].greetings.length)];
  }
  // Portfolio
  if (/project|portfolio|work|showcase|projet|trabajo|proyecto|arbeit|projekt/.test(input)) {
    return chatbotResponses[lang].portfolio[Math.floor(Math.random() * chatbotResponses[lang].portfolio.length)];
  }
  // Services
  if (/service|offer|do you do|can you|offre|servicio|dienstleistung|bieten|angebot/.test(input)) {
    return chatbotResponses[lang].services[Math.floor(Math.random() * chatbotResponses[lang].services.length)];
  }
  // Contact
  if (/contact|email|reach|phone|whatsapp|contacter|correo|kontakt|mail/.test(input)) {
    return chatbotResponses[lang].contact[Math.floor(Math.random() * chatbotResponses[lang].contact.length)];
  }
  // CV
  if (/cv|resume|download|curriculum|lebenslauf/.test(input)) {
    return chatbotResponses[lang].cv;
  }
  // Thanks
  if (/thank|thanks|appreciate|merci|gracias|danke/.test(input)) {
    return chatbotResponses[lang].thanks;
  }
  // Default
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
  // Set welcome and intro
  body.innerHTML = `<div style="color:#1e3a8a;font-weight:600;margin-bottom:8px;">${chatbotResponses[currentChatLang].welcome}</div><div style="font-size:0.97rem;margin-bottom:10px;">${chatbotResponses[currentChatLang].intro}</div>` + body.innerHTML;
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
  // Also listen for toggleLang button click
  const langBtn = document.getElementById('toggleLang');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      setTimeout(() => {
        currentChatLang = localStorage.getItem('lang') || 'en';
        updateChatbotLanguage();
      }, 100);
    });
  }
});

function updateChatbotLanguage() {
  // Update welcome and intro
  const body = document.querySelector('.chatbot-body');
  if (body) {
    body.innerHTML = `<div style=\"color:#1e3a8a;font-weight:600;margin-bottom:8px;\">${chatbotResponses[currentChatLang].welcome}</div><div style=\"font-size:0.97rem;margin-bottom:10px;\">${chatbotResponses[currentChatLang].intro}</div>`;
  }
  // Update input placeholder
  const input = document.querySelector('.chatbot-input-area input');
  if (input) input.setAttribute('placeholder', chatbotResponses[currentChatLang].placeholder);
}

// Theme Toggle
const toggleTheme = document.getElementById('toggleTheme');
toggleTheme.addEventListener('click', () => {
  const currentTheme = document.body.getAttribute('data-bs-theme') || 'light';
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.body.setAttribute('data-bs-theme', newTheme);
});
