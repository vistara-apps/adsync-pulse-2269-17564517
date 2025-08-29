'use client'

import { useState } from 'react'
import { MetricDisplay } from './MetricDisplay'

interface CampaignDashboardProps {
  onCreateCampaign: () => void
}

// Mock campaign data
const mockCampaigns = [
  {
    id: '1',
    title: 'Summer NFT Collection Launch',
    status: 'active',
    startDate: '2024-01-15',
    endDate: '2024-02-15',
    influencerCount: 3,
    metrics: {
      reach: 15400,
      engagement: 1240,
      clicks: 89,
      conversions: 12
    }
  },
  {
    id: '2',
    title: 'DeFi Protocol Awareness',
    status: 'completed',
    startDate: '2024-01-01',
    endDate: '2024-01-31',
    influencerCount: 2,
    metrics: {
      reach: 8900,
      engagement: 780,
      clicks: 156,
      conversions: 28
    }
  }
]

export function CampaignDashboard({ onCreateCampaign }: CampaignDashboardProps) {
  const [selectedCampaign, setSelectedCampaign] = useState(mockCampaigns[0])

  const calculateROI = (conversions: number, spend = 100) => {
    // Simplified ROI calculation
    const revenue = conversions * 50 // Assume $50 per conversion
    return ((revenue - spend) / spend * 100).toFixed(1)
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-0">
        <div className="text-center sm:text-left">
          <h2 className="text-display text-primary">Campaign Dashboard</h2>
          <p className="text-body text-text/70">Monitor your campaign performance</p>
        </div>
        <button onClick={onCreateCampaign} className="btn-secondary text-sm w-full sm:w-auto">
          + New Campaign
        </button>
      </div>

      {/* Campaign Selector */}
      <div className="space-y-2">
        <h3 className="text-heading">Active Campaigns</h3>
        <div className="grid gap-3">
          {mockCampaigns.map(campaign => (
            <div
              key={campaign.id}
              className={`card cursor-pointer transition-all ${
                selectedCampaign.id === campaign.id ? 'border-primary bg-primary/5' : 'hover:border-primary/50'
              }`}
              onClick={() => setSelectedCampaign(campaign)}
            >
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-semibold text-text">{campaign.title}</h4>
                  <div className="flex items-center space-x-4 text-sm text-text/70 mt-1">
                    <span className={`px-2 py-1 rounded text-xs ${
                      campaign.status === 'active' 
                        ? 'bg-accent/20 text-accent' 
                        : 'bg-text/20 text-text'
                    }`}>
                      {campaign.status}
                    </span>
                    <span>{campaign.influencerCount} influencers</span>
                  </div>
                </div>
                <div className="text-right text-sm text-text/70">
                  <div>{campaign.startDate}</div>
                  <div>to {campaign.endDate}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="space-y-4">
        <h3 className="text-heading">Performance Overview</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <MetricDisplay
            label="Total Reach"
            value={selectedCampaign.metrics.reach.toLocaleString()}
            variant="single"
            icon="👥"
          />
          <MetricDisplay
            label="Engagement"
            value={selectedCampaign.metrics.engagement.toLocaleString()}
            variant="single"
            icon="❤️"
          />
          <MetricDisplay
            label="Click-Through"
            value={selectedCampaign.metrics.clicks.toString()}
            variant="single"
            icon="🔗"
          />
          <MetricDisplay
            label="Conversions"
            value={selectedCampaign.metrics.conversions.toString()}
            variant="single"
            icon="✨"
          />
        </div>

        {/* ROI Summary */}
        <div className="card bg-accent/5 border-accent/20">
          <div className="text-center space-y-2">
            <h4 className="text-heading text-accent">ROI Snapshot</h4>
            <div className="text-display text-accent">
              +{calculateROI(selectedCampaign.metrics.conversions)}%
            </div>
            <p className="text-sm text-text/70">
              Estimated return on ad spend for this campaign
            </p>
          </div>
        </div>

        {/* Engagement Rate */}
        <div className="card">
          <div className="flex justify-between items-center">
            <div>
              <h4 className="font-semibold text-text">Engagement Rate</h4>
              <p className="text-sm text-text/70">
                {((selectedCampaign.metrics.engagement / selectedCampaign.metrics.reach) * 100).toFixed(1)}%
              </p>
            </div>
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
              <span className="text-primary font-bold">
                {((selectedCampaign.metrics.engagement / selectedCampaign.metrics.reach) * 100).toFixed(0)}%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
