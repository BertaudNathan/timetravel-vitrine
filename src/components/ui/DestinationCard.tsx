import { Link } from 'react-router-dom'
import type { Destination } from '../../data/destinations'

interface DestinationCardProps {
  destination: Destination
  featured?: boolean
}

function DestinationCard({ destination, featured = false }: DestinationCardProps) {
  return (
    <div className={`group relative bg-gray-900 rounded-2xl overflow-hidden border border-gold-900/20 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(212,160,38,0.12)] ${featured ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={destination.cardImageUrl}
          alt={destination.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        {/* Bottom gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
        {/* Period badge */}
        <span className="absolute top-3 left-3 bg-gray-950/80 backdrop-blur-sm text-gold-400 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border border-gold-900/40">
          {destination.period}
        </span>
        {/* Price badge */}
        <span className="absolute top-3 right-3 bg-gold-600 text-gray-950 text-xs font-bold px-2.5 py-1 rounded-full">
          {destination.priceFrom.toLocaleString('fr-FR')} €
        </span>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-white mb-1.5">
          {destination.title}
        </h3>
        <p className="text-gray-400 text-sm mb-5 line-clamp-2 leading-relaxed">
          {destination.tagline}
        </p>
          <div className="flex items-center gap-3 pt-4 border-t border-white/5">
            <div className="flex items-center gap-1 text-gray-500 text-xs">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Max.&nbsp;{destination.groupMax}
            </div>
            <div className="flex items-center gap-1 text-gray-500 text-xs">
              <svg className="w-3.5 h-3.5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.958c.3.921-.755 1.688-1.54 1.118l-3.37-2.448a1 1 0 00-1.175 0l-3.37 2.448c-.784.57-1.838-.197-1.539-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.05 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.951-.69l1.286-3.958z" />
              </svg>
              {destination.rating}
            </div>
            <div className="ml-auto">
              <Link
                to={`/destinations/${destination.id}`}
                className="inline-flex items-center gap-1.5 bg-gold-600 hover:bg-gold-500 text-gray-950 text-sm font-semibold px-4 py-2 rounded-lg transition-colors duration-200"
              >
                Découvrir
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
      </div>
    </div>
  )
}

export default DestinationCard
