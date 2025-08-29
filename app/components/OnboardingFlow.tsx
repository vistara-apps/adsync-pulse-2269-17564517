'use client'

interface OnboardingFlowProps {
  onConnect: () => void
  onGetStarted: () => void
}

export function OnboardingFlow({ onConnect, onGetStarted }: OnboardingFlowProps) {
  return (
    <div className="space-y-6 animate-slide-up delay-75">
      <div className="text-center space-y-4">
        <h2 className="text-display text-primary">
          Amplify Your Brand with Micro-Influencer Power
        </h2>
        <p className="text-body text-text/80 max-w-md mx-auto">
          Discover pre-vetted micro-influencers in the Farcaster ecosystem, launch campaigns effortlessly, and track ROI with simple metrics.
        </p>
      </div>

      <div className="grid gap-4">
        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
              <span className="text-primary text-lg">🔍</span>
            </div>
            <div>
              <h3 className="font-semibold text-text">Discover Influencers</h3>
              <p className="text-sm text-text/70">Find relevant micro-influencers in your niche</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-accent/10 rounded-md flex items-center justify-center">
              <span className="text-accent text-lg">🚀</span>
            </div>
            <div>
              <h3 className="font-semibold text-text">Launch Campaigns</h3>
              <p className="text-sm text-text/70">Create and manage campaigns with ease</p>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary/10 rounded-md flex items-center justify-center">
              <span className="text-primary text-lg">📊</span>
            </div>
            <div>
              <h3 className="font-semibold text-text">Track Performance</h3>
              <p className="text-sm text-text/70">Monitor ROI with clear, actionable insights</p>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center space-y-3">
        <p className="text-sm text-text/60">
          Connect your wallet to get started
        </p>
        <div className="text-xs text-text/50">
          🔹 No setup fees 🔹 Cancel anytime 🔹 Transparent pricing
        </div>
      </div>
    </div>
  )
}
