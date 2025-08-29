'use client'

interface MetricDisplayProps {
  label: string
  value: string
  variant: 'single' | 'stacked'
  icon?: string
  subtitle?: string
}

export function MetricDisplay({ 
  label, 
  value, 
  variant, 
  icon, 
  subtitle 
}: MetricDisplayProps) {
  if (variant === 'single') {
    return (
      <div className="card text-center hover:border-primary/50 transition-all duration-300">
        {icon && (
          <div className="text-2xl mb-2 animate-pulse-once">{icon}</div>
        )}
        <div className="text-display text-primary animate-fade-in">{value}</div>
        <div className="text-sm text-text/70">{label}</div>
        {subtitle && (
          <div className="text-xs text-text/50 mt-1">{subtitle}</div>
        )}
      </div>
    )
  }

  return (
    <div className="card">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-heading text-text">{value}</div>
          <div className="text-sm text-text/70">{label}</div>
          {subtitle && (
            <div className="text-xs text-text/50">{subtitle}</div>
          )}
        </div>
        {icon && (
          <div className="text-2xl">{icon}</div>
        )}
      </div>
    </div>
  )
}
