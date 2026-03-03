import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `relative text-sm font-medium tracking-wide transition-colors duration-200 pb-0.5 ${
      isActive
        ? 'text-gold-400 after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-gold-400'
        : 'text-gray-400 hover:text-gold-300'
    }`

  return (
    <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-md">
      {/* Gold top bar */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-600 to-transparent" />
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-4">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-8 h-8 rounded-full border border-gold-600/60 flex items-center justify-center group-hover:border-gold-400 transition-colors">
                <span className="text-sm text-gold-500 group-hover:text-gold-400 transition-colors">&#x231B;</span>
              </div>
              <div className="leading-tight">
                <span className="font-display text-base font-bold text-white group-hover:text-gold-300 transition-colors tracking-wide block">
                  TimeTravel Agency
                </span>
                <span className="text-[10px] text-gold-700 uppercase tracking-[0.2em] font-medium">Est. 2047</span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-10">
              <NavLink to="/" className={navLinkClass} end>
                Accueil
              </NavLink>
              <NavLink to="/destinations" className={navLinkClass}>
                Destinations
              </NavLink>
            </nav>

            {/* CTA + burger */}
            <div className="flex items-center gap-4">
              <Link
                to="/destinations"
                className="hidden md:inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-gray-950 text-sm font-semibold px-5 py-2 rounded-lg transition-colors duration-200"
              >
                Réserver
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <button
                className="md:hidden text-gray-400 hover:text-gold-400 transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {menuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {menuOpen && (
            <nav className="md:hidden pb-5 pt-1 flex flex-col gap-4 text-sm font-medium border-t border-white/5">
              <NavLink to="/" className={navLinkClass} end onClick={() => setMenuOpen(false)}>
                Accueil
              </NavLink>
              <NavLink to="/destinations" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Destinations
              </NavLink>
              <Link
                to="/destinations"
                onClick={() => setMenuOpen(false)}
                className="inline-flex items-center gap-2 bg-gold-600 hover:bg-gold-500 text-gray-950 text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors w-fit"
              >
                Réserver un voyage
              </Link>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
