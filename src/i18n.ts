export type Locale = 'en' | 'fr';

// The URL is the page's only language signal for now: /fr/... is French, anything else English.
// index.html keeps <html lang="en"> on every page on purpose, like a dealer site whose shared
// template hardcodes it, so the widget has to read the language off the path.
export function localeFromPath(pathname: string): Locale {
  return pathname.split('/')[1]?.toLowerCase() === 'fr' ? 'fr' : 'en';
}

const en = {
  numberLocale: 'en-US',
  switchTo: { href: '/fr', label: 'Français', lang: 'fr' },
  nav: { inventory: 'Inventory', financing: 'Financing', about: 'About', contact: 'Contact' },
  getPreApproved: 'Get Pre-Approved',
  eyebrow: 'Family owned since 1998',
  heroTitle: 'Quality used cars, honest prices.',
  heroLede:
    'Browse our hand-inspected inventory of sedans, SUVs, trucks and EVs. Every vehicle comes with a free 100-point inspection and a 7-day exchange guarantee.',
  viewInventory: 'View Inventory',
  scheduleTestDrive: 'Schedule Test Drive',
  stats: [
    { value: '26', label: 'Years in business' },
    { value: '4.9★', label: 'Average rating' },
    { value: '3,200+', label: 'Cars sold' },
  ],
  featuredTitle: 'Featured Inventory',
  featuredSub: 'A few of the vehicles currently on our lot.',
  checkAvailability: 'Check Availability',
  terms: {} as Record<string, string>,
  financingTitle: 'Financing made simple',
  financingBody:
    'We work with a network of local and national lenders to get you a competitive rate, regardless of credit history. Get pre-approved in minutes without affecting your credit score.',
  startApplication: 'Start Application',
  checklist: ['Soft credit check only', 'All credit types welcome', 'Trade-ins accepted', 'Terms up to 72 months'],
  whyTitle: 'Why buy from Summit Motors?',
  reasons: [
    { title: '100-point inspection', body: 'Every vehicle is inspected bumper to bumper before it hits the lot.' },
    { title: '7-day exchange', body: 'Not the right fit? Swap it for another vehicle within a week, no questions asked.' },
    { title: 'No hidden fees', body: 'The price on the tag is the price you pay. Always.' },
  ],
  footerNote: 'This is a demo dealership site used for widget integration testing.',
};

const fr: typeof en = {
  numberLocale: 'fr-CA',
  switchTo: { href: '/en', label: 'English', lang: 'en' },
  nav: { inventory: 'Inventaire', financing: 'Financement', about: 'À propos', contact: 'Contact' },
  getPreApproved: 'Obtenir une préapprobation',
  eyebrow: 'Entreprise familiale depuis 1998',
  heroTitle: "Des voitures d'occasion de qualité, à prix honnêtes.",
  heroLede:
    "Parcourez notre inventaire de berlines, VUS, camions et véhicules électriques, tous inspectés à la main. Chaque véhicule comprend une inspection gratuite en 100 points et une garantie d'échange de 7 jours.",
  viewInventory: "Voir l'inventaire",
  scheduleTestDrive: 'Réserver un essai routier',
  stats: [
    { value: '26', label: 'Années en affaires' },
    { value: '4,9★', label: 'Note moyenne' },
    { value: '3 200+', label: 'Voitures vendues' },
  ],
  featuredTitle: 'Inventaire en vedette',
  featuredSub: 'Quelques-uns des véhicules présentement sur notre terrain.',
  checkAvailability: 'Vérifier la disponibilité',
  terms: {
    Gasoline: 'Essence',
    Electric: 'Électrique',
    Automatic: 'Automatique',
    Certified: 'Certifié',
    'New Arrival': 'Nouvel arrivage',
  },
  financingTitle: 'Le financement en toute simplicité',
  financingBody:
    'Nous travaillons avec un réseau de prêteurs locaux et nationaux pour vous obtenir un taux concurrentiel, peu importe votre historique de crédit. Obtenez une préapprobation en quelques minutes sans affecter votre cote de crédit.',
  startApplication: 'Faire une demande',
  checklist: [
    'Vérification de crédit sans impact',
    'Tous les types de crédit acceptés',
    "Véhicules d'échange acceptés",
    "Termes jusqu'à 72 mois",
  ],
  whyTitle: 'Pourquoi acheter chez Summit Motors?',
  reasons: [
    {
      title: 'Inspection en 100 points',
      body: "Chaque véhicule est inspecté de fond en comble avant d'arriver sur notre terrain.",
    },
    {
      title: 'Échange en 7 jours',
      body: "Ce n'est pas le bon choix? Échangez-le contre un autre véhicule dans la semaine, sans poser de questions.",
    },
    { title: 'Aucuns frais cachés', body: 'Le prix affiché est le prix que vous payez. Toujours.' },
  ],
  footerNote: "Ceci est un site de concessionnaire de démonstration utilisé pour tester l'intégration du widget.",
};

export const STRINGS: Record<Locale, typeof en> = { en, fr };
