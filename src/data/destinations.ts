export type Difficulty = 'Facile' | 'Modérée' | 'Difficile' | 'Extrême'

export interface Destination {
  id: string
  title: string
  period: string
  tagline: string
  descriptionLong: string
  highlights: string[]
  risks: string[]
  recommendedFor: string[]
  priceFrom: number
  /** Durée indicative du séjour en jours temporels */
  duration: string
  /** Taille maximale du groupe */
  groupMax: number
  /** Niveau de difficulté / expérience requise */
  difficulty: Difficulty
  /** Note moyenne sur 5 */
  rating: number
  /** Nombre de voyages effectués vers cette destination */
  tripsCount: number
  heroImageUrl: string
  cardImageUrl: string
  gallery: string[]
  videoUrl: string
}

export const destinations: Destination[] = [
  {
    id: 'paris-1889',
    title: 'Paris 1889',
    period: 'Exposition Universelle — 1889',
    tagline: "Le Paris de la démesure, au soir du 31 mars 1889",
    descriptionLong: `Le soir du 31 mars 1889, Gustave Eiffel gravit les 1 710 marches de sa tour pour y planter le drapeau tricolore sous les vivats d'une foule en délire. Vous serez là.

Nous vous installons au cœur de l'Exposition Universelle, dans un Paris ivre de modernité et d'ambition. Six millions de visiteurs s'y pressent en quelques mois — vous ferez partie des premiers. Flânez dans les galeries des machines, dînez dans les pavillons exotiques, attardez-vous dans les ateliers de Montmartre où Toulouse-Lautrec esquisse ses premières affiches.

Chaque détail de votre séjour est orchestré pour une authenticité totale : tenue de la Belle Époque taillée sur mesure, cartes d'identité temporaires au nom d'un citoyen français de l'époque, guide historien immergé depuis six mois. Paris de 1889 ne sera plus un manuel scolaire — ce sera votre souvenir personnel.`,
    highlights: [
      "Présence lors de l'inauguration officielle de la Tour Eiffel — place réservée au pied du monument",
      "Visite en avant-première des galeries des machines et des pavillons coloniaux",
      "Nuit dans un hôtel particulier du VIIIe arrondissement reconstitué à l'identique",
      "Dîner de gala dans le restaurant panoramique du 2e étage, avec menu historiquement documenté",
    ],
    risks: [
      "Eau du robinet non potable — filtres temporels fournis dans votre kit d'arrivée",
      "Argot parisien du XIXe siècle — module de préparation linguistique obligatoire (3 h)",
      "Présence policière renforcée autour de l'exposition — éviter les discussions politiques",
    ],
    recommendedFor: [
      "Passionnés d'histoire de l'architecture et du génie civil",
      "Amateurs de gastronomie française et d'art de vivre bourgeois",
      "Voyageurs en quête d'une immersion culturelle et émotionnelle forte",
    ],
    priceFrom: 12500,
    duration: '4 à 6 jours temporels',
    groupMax: 8,
    difficulty: 'Facile',
    rating: 4.9,
    tripsCount: 847,
    heroImageUrl: '/images/paris_16_9.png',
    cardImageUrl: '/images/paris_1_1.png',
    gallery: [
      '/images/paris_v2_16_9.png',
      '/images/paris_1_1.png',
      '/images/paris_9_16.png',
    ],
    videoUrl: '/videos/paris.mp4',
  },
  {
    id: 'cretace-65m',
    title: 'Crétacé -65M',
    period: 'Crétacé supérieur — ~65 millions d\'années',
    tagline: 'Un monde vierge, 65 millions d\'années avant nous',
    descriptionLong: `Il ne reste que quelques mois avant que l'astéroïde ne mette fin au règne des dinosaures. Le Crétacé supérieur est à son apogée — et vous allez y passer 72 heures.

Notre observatoire temporel blindé, ancré à 400 mètres d'altitude sur un plateau rocheux du Laramidia occidental, offre une vue imprenable sur les grandes plaines parcourues par des hardes de Triceratops. Au crépuscule, le Tyrannosaurus Rex sort chasser. La vitre de 18 cm d'acier composite vous en sépare. C'est suffisant — et c'est vertigineux.

Cette expédition n'est pas un safari de confort. C'est le voyage le plus radical que l'humanité ait jamais proposé : contempler la Terre telle qu'elle était avant nous, dans son silence primordial, avec la conscience aiguë que rien de ce que vous voyez n'existe plus depuis soixante-cinq millions d'années.`,
    highlights: [
      "Observation nocturne du T-Rex en chasse — depuis l'observatoire blindé de niveau 4",
      "Survol des plaines crétacées en aéronef furtif à basse altitude",
      "Collecte de fossiles pré-impact encadrée par un paléontologue certifié CTI",
      "Lever de soleil sur un monde sans trace humaine — expérience photographique exclusive",
    ],
    risks: [
      "Atmosphère à 15 % d'O₂ — combinaison respiratoire obligatoire en extérieur",
      "Faune de prédateurs actifs — sorties uniquement sous escorte armée, périmètre strict",
      "Fenêtre de rappel fixe non négociable — tout retard entraîne une attente de 48 h supplémentaires",
    ],
    recommendedFor: [
      "Explorateurs et voyageurs en quête de l'expérience ultime",
      "Scientifiques, paléontologues et passionnés de sciences naturelles",
      "Photographes et cinéastes animaliers souhaitant des images uniques au monde",
    ],
    priceFrom: 34900,
    duration: '2 à 3 jours temporels',
    groupMax: 4,
    difficulty: 'Extrême',
    rating: 4.7,
    tripsCount: 112,
    heroImageUrl: '/images/cretace_16_9.png',
    cardImageUrl: '/images/cretace_1_1.png',
    gallery: [
      '/images/cretace_v2_16_9.png',
      '/images/cretace_1_1.png',
      '/images/cretace_9_16.png',
    ],
    videoUrl: '/videos/cretace.mp4',
  },
  {
    id: 'florence-1504',
    title: 'Florence 1504',
    period: 'Renaissance italienne — 1504',
    tagline: "Florence, 8 septembre 1504 — Michel-Ange présente le David",
    descriptionLong: `Florence, automne 1504. La cité des Médicis est au faîte de sa puissance intellectuelle et artistique. Ce matin-là, on dévoile sur la Piazza della Signoria une sculpture de marbre blanc de 5,17 mètres qui va changer à jamais le regard de l'Occident sur le corps humain. Vous êtes dans la foule.

Pendant une semaine, vous vivez dans la peau d'un négociant florentin fortuné. Votre palazzo loué dans le quartier de Santa Croce vous place à deux pas des ateliers du Bargello. Léonard de Vinci travaille en ce moment même sur la Bataille d'Anghiari, quelques rues plus loin. Raphaël vient d'arriver en ville. L'air de Florence sent la peinture fraîche, le marbre poussiéreux et le vin de Chianti.

Nos guides sont des historiens spécialisés dans la Florence du Quattrocento, formés à l'immersion linguistique en toscan du XVIe siècle. Ils vous ouvrent des portes que nul touriste — même du XXIe siècle — n'a jamais franchies.`,
    highlights: [
      "Présence lors du dévoilement officiel du David — place en tribune sur la Piazza della Signoria",
      "Accès privé à l'atelier de sculpture de Michel-Ange, accompagné d'un historien de l'art",
      "Banquet de mécènes dans un palazzo florentin authentique, menu reconstitué par un chef historien",
      "Atelier de dessin au fusain avec démonstration de techniques de la Renaissance",
    ],
    risks: [
      "Instabilité politique — la République florentine est fragile, éviter les rassemblements improvisés",
      "Hygiène médiévale — trousse médicale pré-voyage obligatoire, eau traitée uniquement",
      "Toscan du XVIe siècle très éloigné de l'italien moderne — 6 h de préparation linguistique requises",
    ],
    recommendedFor: [
      "Amateurs d'art, collectionneurs et historiens de l'art de la Renaissance",
      "Voyageurs cultivés en quête d'une expérience intellectuelle et sensorielle intense",
      "Épicuriens passionnés par la gastronomie et les arts de la table toscans",
    ],
    priceFrom: 18700,
    duration: '5 à 7 jours temporels',
    groupMax: 6,
    difficulty: 'Modérée',
    rating: 4.8,
    tripsCount: 423,
    heroImageUrl: '/images/renaissance_16_9.png',
    cardImageUrl: '/images/renaissance_1_1.png',
    gallery: [
      '/images/renaissance_v2_16_9.png',
      '/images/renaissance_1_1.png',
      '/images/renaissance_9_16.png',
    ],
    videoUrl: '/videos/renaissance.mp4',
  },
]
