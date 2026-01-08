const base = import.meta.env.BASE_URL;

const projects = [
  {
    slug: 'nina-carducci',
    title: 'Nina Carducci — Portfolio',
    description: 'Performance oriented website, SEO and picture gallery.',
    tags: ['SEO', 'Opti', 'Accessibility'],
    image: `${base}ninascreen.png`,
    link: 'https://onnichad.github.io/Nina-Carducci-Dev-master',
    source: 'https://github.com/Onnichad/Nina-Carducci-Dev-master',
  },
  {
    slug: 'kasa',
    title: 'Kasa — Location d’appartements',
    description: 'House renting website with notation system.',
    tags: ['React', 'Vite', 'Sass'],
    image: `${base}kasascreen.png`,
    link: 'https://onnichad.github.io/Projet-5',
    source: 'https://github.com/Onnichad/Projet-5',
  },
];

export default projects;
