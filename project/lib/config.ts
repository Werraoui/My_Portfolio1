export const siteConfig = {
  email: 'werraoui1@gmail.com',
  github: 'https://github.com/Werraoui',
  githubRepos: 'https://github.com/Werraoui?tab=repositories',
  linkedin: '#linkedin-placeholder',
  cvPath: '/Erraoui_Wiame_CV__PFE.pdf',
  twinImage: '/images/twin.jpg',
  phones: [
    { id: 'fr', label: { en: 'France', fr: 'France' }, display: '+33 6 44 65 15 59', href: 'tel:+33644651559' },
    { id: 'ma', label: { en: 'Morocco', fr: 'Maroc' }, display: '+212 6 53 30 45 38', href: 'tel:+212653304538' },
  ],
  stats: {
    repos: '26',
    stars: '12',
    internships: '02',
    languages: '03',
  },
} as const;
