import type { ReactNode } from 'react'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

function Section({ children, className = '', id }: SectionProps) {
  return (
    <section id={id} className={`py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  )
}

export default Section
