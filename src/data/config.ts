/**
 * Données de configuration globales de l'agence.
 * Toutes les valeurs en dur (dates, chiffres, textes institutionnels)
 * sont centralisées ici pour faciliter la maintenance.
 */
export const AGENCY = {
  name: 'TimeTravel Agency',
  tagline: 'Voyages temporels de luxe',
  foundedYear: 2047,
  currentYear: 2047+58,
  licenseNumber: 'TT-3994',
  licenseBody: 'Conseil Temporel International',
  isoLabel: 'ISO Temporel 9001',
  headquarters: 'Paris, FR',
  maxGroupSize: 8,

  /** Chiffres clés affichés sur la page d'accueil */
  stats: [
    { value: '16 800+', label: 'Voyageurs satisfaits' },
    { value: '58 ans', label: 'Opération sans incident' },
    { value: '3', label: 'Époques certifiées' },
  ],

  /** Email de contact affiché dans le footer */
  contact: {
    email: 'contact-info@timetravel.agency',
    phone: '+41 42 010 4807',
  },
} as const
