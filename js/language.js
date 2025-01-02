const translations = {
    en: {
        "nav-home": "Home",
        "nav-about": "About",
        "nav-quiz": "Quiz",
        "nav-contact": "Contact",
        "hero-title": "Your Partner in Cybersecurity",
        "hero-description": "Protect your business with tailored cybersecurity solutions.",
        "hero-learn-more": "Learn More",
        "about-title": "About Us",
        "about-description": "At ADENTITI Limited, we specialize in proactive cybersecurity solutions tailored to meet the needs of Canadian businesses.",
        "about-point-1": "Proactive Threat Detection",
        "about-point-2": "24/7 Network Monitoring",
        "about-point-3": "Employee Training",
        "about-point-4": "Custom Security Solutions",
        "contact-title": "Contact Us",
        "contact-description": "Have questions? We're here to help.",
        "contact-name": "Name:",
        "contact-email": "Email:",
        "contact-message": "Message:",
        "contact-send": "Send Message"
    },
    fr: {
        "nav-home": "Accueil",
        "nav-about": "À propos",
        "nav-quiz": "Quiz",
        "nav-contact": "Contact",
        "hero-title": "Votre partenaire en cybersécurité",
        "hero-description": "Protégez votre entreprise avec des solutions de cybersécurité sur mesure.",
        "hero-learn-more": "En savoir plus",
        "about-title": "À propos de nous",
        "about-description": "Chez ADENTITI Limited, nous sommes spécialisés dans les solutions proactives de cybersécurité adaptées aux besoins des entreprises canadiennes.",
        "about-point-1": "Détection proactive des menaces",
        "about-point-2": "Surveillance réseau 24/7",
        "about-point-3": "Formation des employés",
        "about-point-4": "Solutions de sécurité personnalisées",
        "contact-title": "Nous contacter",
        "contact-description": "Des questions ? Nous sommes là pour vous aider.",
        "contact-name": "Nom :",
        "contact-email": "Courriel :",
        "contact-message": "Message :",
        "contact-send": "Envoyer le message"
    }
};

const languageSelect = document.getElementById('language-select');
languageSelect.addEventListener('change', (event) => {
    const selectedLanguage = event.target.value;
    document.querySelectorAll('[data-translate]').forEach((element) => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[selectedLanguage][key];
    });
});
