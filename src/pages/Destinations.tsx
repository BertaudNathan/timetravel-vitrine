import Section from '../components/ui/Section'
import DestinationCard from '../components/ui/DestinationCard'
import AnimationWrapper from '../components/ui/AnimationWrapper'
import { destinations } from '../data/destinations'

function Destinations() {
  return (
    <AnimationWrapper>
      {/* Page header banner */}
      <div className="relative py-20 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,160,38,0.07),transparent_60%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gold-500 text-xs font-semibold uppercase tracking-[0.35em] mb-4">
            &#x2014;&nbsp; Catalogue temporel
          </p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white mb-3">
                Nos <span className="text-gold-400">destinations</span>
              </h1>
              <p className="text-gray-400 max-w-xl leading-relaxed">
                Chaque destination a été sélectionnée, certifiée et sécurisée par notre équipe de chrononautes. Choisissez votre époque et laissez-nous faire le reste.
              </p>
            </div>
            <p className="text-gray-600 text-sm shrink-0">
              {destinations.length} destination{destinations.length > 1 ? 's' : ''} disponible{destinations.length > 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d) => (
            <DestinationCard key={d.id} destination={d} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 p-8 rounded-2xl bg-gray-900/40 border border-gold-900/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-xl font-bold text-white mb-1">Vous ne trouvez pas votre époque ?</h2>
            <p className="text-gray-400 text-sm">Notre équipe peut créer un voyage sur mesure pour vous.</p>
          </div>
          <button
            onClick={() => {
              const event = new CustomEvent('open-chat', { detail: 'Je souhaite un voyage temporel sur mesure. Pouvez-vous m\'aider ?' })
              window.dispatchEvent(event)
            }}
            className="shrink-0 inline-flex items-center gap-2 border border-gold-700 text-gold-400 hover:bg-gold-900/20 font-medium px-6 py-2.5 rounded-lg transition-colors text-sm whitespace-nowrap"
          >
            Parler à un conseiller
          </button>
        </div>
      </Section>
    </AnimationWrapper>
  )
}

export default Destinations
