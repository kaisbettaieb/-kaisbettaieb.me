import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Kais BETTAIEB | Python Developer',
  lang: 'en',
  description: 'Kais BETTAIEB is a python developer. This is my personal website. ' +
      'I develop web application with Python, Flask, FastAPI, Connexion.' +
      'Im also knowledgeable in CI/CD tools such as Jenkins, Docker, Kubernetes, Sonar, Github. ',
};

// HERO DATA
export const heroData = {
  title: 'Hello my name is ',
  name: 'Kais BETTAIEB',
  subtitle: "I'm a Python web developer Developer",
  cta: "More about me",
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kais-bettaieb/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kaisbettaieb',
    },
  ],
};

