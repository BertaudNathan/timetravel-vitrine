import { useParams, Link } from 'react-router-dom'
import Section from '../components/ui/Section'
import AnimationWrapper from '../components/ui/AnimationWrapper'
import { destinations } from '../data/destinations'

function DestinationDetail() {
  const { id } = useParams<{ id: string }>()
  const destination = destinations.find((d) => d.id === id)

  if (!destination) {
    return (
      <Section>
        <div className="text-center py-20">
          <h1 className="font-display text-3xl font-bold text-white mb-4">
            Époque introuvable
          </h1>
          <p className="text-gray-400 mb-6">
            Cette destination n'est pas encore dans notre catalogue — ou la ligne temporelle a été perturbée.
          </p>
          <Link
            to="/destinations"
            className="bg-gold-600 hover:bg-gold-500 text-gray-950 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Retour au catalogue
          </Link>
        </div>
      </Section>
    )
  }

  return (
    <AnimationWrapper>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[320px] overflow-hidden">
        <img
          src={destination.heroImageUrl}
          alt={destination.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-10 max-w-7xl mx-auto">
          <p className="text-gold-500 text-sm font-semibold uppercase tracking-wider mb-2">
            {destination.period}
          </p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-2">
            {destination.title}
          </h1>
          <p className="text-gold-300 text-lg">{destination.tagline}</p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-10">
            {/* About */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-gold-500">&#x2014;</span> L'expérience
              </h2>
              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {destination.descriptionLong}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-gold-500">&#x2014;</span> Ce qui vous attend
              </h2>
              <ul className="space-y-3">
                {destination.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold-500 mt-0.5">&#x2726;</span>
                    <span className="text-gray-300">{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Risks */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-gold-500">&#x2014;</span> Contraintes &amp; précautions
              </h2>
              <ul className="space-y-3">
                {destination.risks.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-amber-500 mt-0.5">&#x26A0;</span>
                    <span className="text-gray-300">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended for */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-gold-500">&#x2014;</span> Ce voyage est fait pour vous si…
              </h2>
              <ul className="space-y-3">
                {destination.recommendedFor.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-gold-400 mt-0.5">&#x2713;</span>
                    <span className="text-gray-300">{r}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Gallery */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-gold-500">&#x2014;</span> Galerie d'époque
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {/* 16:9 — full width */}
                <img
                  src={destination.gallery[0]}
                  alt={`${destination.title} - panorama`}
                  className="col-span-2 w-full rounded-xl border border-gold-900/20"
                />
                {/* 1:1 — square */}
                <img
                  src={destination.gallery[1]}
                  alt={`${destination.title} - detail`}
                  className="w-full aspect-square object-cover rounded-xl border border-gold-900/20"
                />
                {/* 9:16 — portrait */}
                <img
                  src={destination.gallery[2]}
                  alt={`${destination.title} - portrait`}
                  className="w-full aspect-[9/16] object-cover rounded-xl border border-gold-900/20"
                />
              </div>
            </div>

            {/* Video */}
            <div>
              <h2 className="font-display text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="text-gold-500">&#x2014;</span> Immersion en vidéo
              </h2>
              <video
                controls
                playsInline
                className="w-full rounded-xl border border-gold-900/20"
                poster={destination.heroImageUrl}
              >
                <source src={destination.videoUrl} type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gray-900 rounded-2xl border border-gold-900/20 p-6 space-y-6">
              <div>
                <p className="text-gray-400 text-sm mb-1">Tarif tout compris, par personne</p>
                <p className="font-display text-3xl font-bold text-gold-400">
                  {destination.priceFrom.toLocaleString('fr-FR')} &euro;
                </p>
                <p className="text-gray-500 text-xs mt-1">transport temporel · hébergement · guide · équipement</p>
              </div>

              <div className="border-t border-gold-900/20 pt-4 space-y-2 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Dur&eacute;e</span>
                  <span className="text-white">{destination.duration}</span>
                </div>
                <div className="flex justify-between">
                  <span>Groupe max.</span>
                  <span className="text-white">{destination.groupMax} voyageurs</span>
                </div>
                <div className="flex justify-between">
                  <span>Difficult&eacute;</span>
                  <span className="text-white">{destination.difficulty}</span>
                </div>
                <div className="flex justify-between">
                  <span>Voyages effectu&eacute;s</span>
                  <span className="text-white">{destination.tripsCount.toLocaleString('fr-FR')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Note client</span>
                  <span className="text-white">{'★'.repeat(Math.round(destination.rating))}&nbsp;{destination.rating}/5</span>
                </div>
              </div>

              <button
                onClick={() => {
                  const event = new CustomEvent('open-chat', {
                    detail: `Je souhaite réserver le voyage "${destination.title}". Pouvez-vous m'accompagner dans les démarches ?`,
                  })
                  window.dispatchEvent(event)
                }}
                className="w-full bg-gold-600 hover:bg-gold-500 text-gray-950 font-semibold py-3 rounded-lg transition-colors duration-200"
              >
                Démarrer ma réservation
              </button>

              <Link
                to="/destinations"
                className="block text-center text-gold-400 hover:text-gold-300 text-sm transition-colors"
              >
                &larr; Retour au catalogue
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </AnimationWrapper>
  )
}

export default DestinationDetail
