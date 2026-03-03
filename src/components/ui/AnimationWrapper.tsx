import type { ReactNode } from 'react'

interface AnimationWrapperProps {
  children: ReactNode
  className?: string
}

function AnimationWrapper({ children, className = '' }: AnimationWrapperProps) {
  return (
    <div className={`animate-[fadeIn_0.5s_ease-out] ${className}`}>
      {children}
    </div>
  )
}

export default AnimationWrapper
