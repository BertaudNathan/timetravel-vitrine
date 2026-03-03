import { Link } from 'react-router-dom'
import Section from '../components/ui/Section'
import DestinationCard from '../components/ui/DestinationCard'
import AnimationWrapper from '../components/ui/AnimationWrapper'
import { destinations } from '../data/destinations'
import { AGENCY } from '../data/config'

function Home() {
  const steps = [
    {
      number: '01',
      icon: '&#x1F30D;',
      title: 'Sélectionnez votre ère',
      desc: 'Consultez notre catalogue d\'époques certifiées. Chaque destination est triée sur le volet par nos experts historiens.',
    },
    {
      number: '02',
      icon: '&#x1F9F3;',
      title: 'Préparation sur mesure',
      desc: 'Tenue d\'époque, langue, codes culturels — votre dossier de mission est élaboré en 72 h par notre équipe de spécialistes.',
    },
    {
      number: '03',
      icon: '&#x26A1;',
      title: 'Saut temporel',
      desc: 'Depuis notre terminal de Genève, votre capsule vous dépose au cœur de l\'époque choisie. Aucune turbulence, aucun compromis.',
    },
    {
      number: '04',
      icon: '&#x1F3AF;',
      title: 'Retour à l\'instant T',
      desc: 'Rappel quantique précis à la milliseconde. Vous revenez exactement quand vous êtes partis — sans une ride de plus.',
    },
  ]

  return (
    <AnimationWrapper>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <div className="relative min-h-screen flex items-end pb-24 overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/paris.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/20" />
        </div>

        {/* Content — left aligned */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold-500 text-xs font-semibold uppercase tracking-[0.35em] mb-5">
              &#x2014;&nbsp; La première agence de voyages dans le temps
            </p>
            <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-[1.05] mb-6">
              Le passé n'est plus
              <br />
              <span className="text-gold-400">hors de portée.</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-xl mb-10 leading-relaxed">
              Depuis {AGENCY.foundedYear}, {AGENCY.name} transporte ses clients aux moments les plus décisifs de l'histoire humaine — en toute sécurité, en tout luxe.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <Link
                to="/destinations"
                className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-gray-950 font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200"
              >
                Découvrir nos destinations
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="#about"
                className="inline-flex items-center gap-2 text-gray-300 hover:text-gold-300 font-medium transition-colors"
              >
                <span className="w-8 h-px bg-gray-600"></span>
                Découvrir l'agence
              </a>
            </div>
          </div>

          {/* Stats bar */}
          <div className="flex items-center gap-8 mt-16 pt-8 border-t border-white/10">
            {AGENCY.stats.map((s, i) => (
              <div key={i} className="flex items-center gap-4">
                <div>
                  <p className="font-display text-2xl font-bold text-gold-400">{s.value}</p>
                  <p className="text-gray-500 text-xs uppercase tracking-wider">{s.label}</p>
                </div>
                {i < AGENCY.stats.length - 1 && <div className="w-px h-10 bg-white/10" />}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 right-8 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-[10px] uppercase tracking-[0.2em] rotate-90 origin-center translate-x-4">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold-700 to-transparent" />
        </div>
      </div>

      {/* ── ABOUT ────────────────────────────────────────────────────── */}
      <Section id="about">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="text-gold-500 text-xs font-semibold uppercase tracking-[0.3em] mb-4">
              &#x2014;&nbsp; Qui sommes-nous
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-6 leading-snug">
              Nés de la science,<br />
              <span className="text-gold-400">guidés par l'histoire</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              Fondée en {AGENCY.foundedYear} par un consortium de physiciens et d’historiens, {AGENCY.name} est la première agence agréée par le {AGENCY.licenseBody}.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Chaque itinéraire est conçu en collaboration avec des experts académiques, des équipes médicales spécialisées et des ingénieurs en chronoprotection. Résultat&nbsp;: {AGENCY.stats[0].value} voyageurs rentrés sains et saufs, et des souvenirs qui défient l'éternité.
            </p>
            <Link
              to="/destinations"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium text-sm transition-colors group"
            >
              Voir nos voyages
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Right — feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { icon: '&#x1F6E1;', title: 'Zéro compromis sur la sécurité', desc: `Protocoles de chronoprotection validés par le ${AGENCY.licenseBody}. Aucun incident déclaré en ${AGENCY.stats[1].value} d\'exploitation.` },
              { icon: '&#x1FA84;', title: 'Immersion totale', desc: 'Tenue d\'époque sur mesure, guide historien dédié, logement dans des infrastructures temporelles discrètes.' },
              { icon: '&#x1F504;', title: 'Rappel quantique breveté', desc: 'Notre système QTRS-7 vous ramène au point d\'origine avec une précision de ±0,3 seconde. Garanti contractuellement.' },
              { icon: '&#x1F4DC;', title: 'Agence certifiée CTI', desc: `Licence internationale n° ${AGENCY.licenseNumber} — la seule accordée à un opérateur civil de tourisme temporel.` },
            ].map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-xl bg-gray-900/60 border border-gold-900/20 hover:border-gold-700/40 hover:bg-gray-900 transition-all duration-300"
              >
                <span className="text-2xl block mb-3" dangerouslySetInnerHTML={{ __html: item.icon }} />
                <h3 className="font-display text-base font-bold text-white mb-1.5">{item.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── COMMENT ÇA MARCHE ────────────────────────────────────────── */}
      <section className="py-20 bg-gray-900/40 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-gold-500 text-xs font-semibold uppercase tracking-[0.3em] mb-3">
              &#x2014;&nbsp; Déroulement d'un voyage
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              De la réservation <span className="text-gold-400">au saut dans le temps</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step.number} className="relative">
                {/* connector line */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[calc(100%-1rem)] w-full h-px bg-gradient-to-r from-gold-900/40 to-transparent z-0" />
                )}
                <div className="relative z-10 p-6 rounded-xl bg-gray-950 border border-white/5 hover:border-gold-900/30 transition-colors h-full">
                  <span className="font-display text-5xl font-bold text-gold-900/40 block mb-3 leading-none">{step.number}</span>
                  <span className="text-xl block mb-3" dangerouslySetInnerHTML={{ __html: step.icon }} />
                  <h3 className="font-display text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS ─────────────────────────────────────────────── */}
      <Section>
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-gold-500 text-xs font-semibold uppercase tracking-[0.3em] mb-3">
              &#x2014;&nbsp; Nos voyages
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
              Trois époques,<span className="text-gold-400"> trois vies à vivre</span>
            </h2>
          </div>
          <Link
            to="/destinations"
            className="hidden sm:inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 text-sm font-medium transition-colors group"
          >
            Tout voir
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Editorial grid: first card is featured (spans 2 cols) on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((d, i) => (
            <DestinationCard key={d.id} destination={d} featured={i === 0} />
          ))}
        </div>

        <div className="text-center mt-10 sm:hidden">
          <Link
            to="/destinations"
            className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-medium transition-colors"
          >
            Voir toutes les destinations
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </Section>

      {/* ── CTA BANDE ────────────────────────────────────────────────── */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gold-900/10 via-gold-800/5 to-transparent" />
        <div className="absolute inset-0 border-y border-gold-900/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white mb-2">
              Votre première mission temporelle vous attend.
            </h2>
            <p className="text-gray-400">Un conseiller dédié répond à vos questions sous 24 h. Sans engagement.</p>
          </div>
          <Link
            to="/destinations"
            className="shrink-0 inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-gray-950 font-semibold px-8 py-3.5 rounded-lg transition-colors duration-200 whitespace-nowrap"
          >
            Planifier mon voyage
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </AnimationWrapper>
  )
}

export default Home
