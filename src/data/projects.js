const base = import.meta.env.BASE_URL;

const projects = [
  {
    slug: 'nina-carducci',
    title: 'Nina Carducci — Portfolio photo',
    description: 'Site vitrine optimisé performance & SEO, filtre galerie.',
    tags: ['SEO', 'Opti', 'Accessibilité'],
    image: `${base}ninascreen.png`,
    link: 'https://onnichad.github.io/Nina-Carducci-Dev-master',
    source: 'https://github.com/Onnichad/Nina-Carducci-Dev-master',
  },
  {
    slug: 'kasa',
    title: 'Kasa — Location d’appartements',
    description: "Site de location d'appartements avec système de notation.",
    tags: ['React', 'Vite', 'Sass'],
    image: `${base}kasascreen.png`,
    link: 'https://onnichad.github.io/Projet-5',
    source: 'https://github.com/Onnichad/Projet-5',
  },
];

export default projects;
