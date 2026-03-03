import { Link } from 'react-router-dom'
import { AGENCY } from '../../data/config'

function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-white/5 pt-16 pb-8 mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-12 border-b border-white/5">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full border border-gold-600/50 flex items-center justify-center">
                <span className="text-sm text-gold-500">&#x231B;</span>
              </div>
              <div>
                <p className="font-display text-base font-bold text-white">{AGENCY.name}</p>
                <p className="text-[10px] text-gold-700 uppercase tracking-[0.2em]">Est. {AGENCY.foundedYear}</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              La première agence de voyages temporels agréée par le {AGENCY.licenseBody}.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</p>
            <ul className="space-y-2.5">
              <li><Link to="/" className="text-gray-500 hover:text-gold-400 text-sm transition-colors">Accueil</Link></li>
              <li><Link to="/destinations" className="text-gray-500 hover:text-gold-400 text-sm transition-colors">Destinations</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Informations</p>
            <ul className="space-y-2.5 text-gray-500 text-sm">
              <li>Licence {AGENCY.licenseBody} n° {AGENCY.licenseNumber}</li>
              <li>Siège social : {AGENCY.headquarters}</li>
              <li>Certifié {AGENCY.isoLabel}</li>
              <li>
                <a href={`mailto:${AGENCY.contact.email}`} className="hover:text-gold-400 transition-colors">
                  {AGENCY.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p className="text-gray-600 text-xs">
            © {AGENCY.currentYear} {AGENCY.name} — Tous droits réservés à travers le temps.
          </p>
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-gold-600 animate-pulse" />
            <span className="text-gray-600 text-xs">Ligne temporelle stable</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
