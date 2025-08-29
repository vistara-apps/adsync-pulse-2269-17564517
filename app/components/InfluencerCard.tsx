
'use client'

interface Influencer {
  id: string
  farcasterId: string
  name: string
  niche: string
  engagementRate: number
  followers: number
  profileUrl: string
  verificationStatus: 'verified' | 'pending' | 'unverified'
  avatar: string
}

interface InfluencerCardProps {
  influencer: Influencer
  variant: 'compact' | 'detailed'
  isSelected?: boolean
  onSelect?: () => void
}

export function InfluencerCard({ 
  influencer, 
  variant, 
  isSelected = false, 
  onSelect 
}: InfluencerCardProps) {
  const formatNumber = (num: number) => {
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}k`
    }
    return num.toString()
  }

  return (
    <div 
      className={`card cursor-pointer transition-all hover:shadow-lg ${
        isSelected ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
      }`}
      onClick={onSelect}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center text-xl">
              {influencer.avatar}
            </div>
            {influencer.verificationStatus === 'verified' && (
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full flex items-center justify-center">
                <span className="text-white text-xs">✓</span>
              </div>
            )}
          </div>
          
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <h3 className="font-semibold text-text">{influencer.name}</h3>
              <span className="text-xs text-text/60">@{influencer.farcasterId}</span>
            </div>
            <p className="text-sm text-accent font-medium">{influencer.niche}</p>
            
            {variant === 'detailed' && (
              <div className="flex items-center space-x-4 mt-2 text-xs text-text/70">
                <span>{formatNumber(influencer.followers)} followers</span>
                <span>{influencer.engagementRate}% engagement</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="text-right">
          {variant === 'compact' && (
            <div className="text-xs text-text/70 space-y-1">
              <div>{formatNumber(influencer.followers)} followers</div>
              <div className="font-medium text-accent">{influencer.engagementRate}% eng.</div>
            </div>
          )}
          
          {isSelected && (
            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mt-2">
              <span className="text-white text-xs">✓</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
