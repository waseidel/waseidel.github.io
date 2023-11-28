export const languages = {
  es: "Español",
  en: "English",
};

export const defaultLang = "en";

export const showDefaultLang = false;

export const ui = {
  en: {
    "nav.home": "Home",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.blog": "Blog",
    "nav.cv": "CV",
    "nav.contact": "Contact",
  },
  es: {
    "nav.home": "Inicio",
    "nav.projects": "Proyectos",
    "nav.about": "Acerca de mi",
    "nav.blog": "Blog",
    "nav.cv": "Curriculum",
    "nav.contact": "Contacto",
  },
} as const;

export const routes = {
  es: {
    "/": "Inicio",
    projects: "proyectos",
    about: "acerca-de",
    blog: "blog",
    cv: "curriculum",
    contact: "contacto",
  },
};
