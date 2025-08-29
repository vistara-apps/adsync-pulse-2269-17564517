'use client';

import { useState, useEffect } from 'react';
import { InfluencerCard } from './InfluencerCard';
import { CTAButton } from './CTAButton';
import { Influencer } from '../types';

const mockInfluencers = [
  {
    id: '1',
    farcasterId: 'fc123',
    name: 'Sarah Chen',
    niche: 'Tech & Startups',
    engagementRate: 4.2,
    followers: 12500,
    profileUrl: 'https://warpcast.com/sarahchen',
    verificationStatus: 'verified' as const,
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '2',
    farcasterId: 'fc456',
    name: 'Mike Rodriguez',
    niche: 'E-commerce',
    engagementRate: 3.8,
    followers: 8900,
    profileUrl: 'https://warpcast.com/mikerod',
    verificationStatus: 'verified' as const,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '3',
    farcasterId: 'fc789',
    name: 'Emma Thompson',
    niche: 'Lifestyle',
    engagementRate: 5.1,
    followers: 15200,
    profileUrl: 'https://warpcast.com/emmathompson',
    verificationStatus: 'pending' as const,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '4',
    farcasterId: 'fc101',
    name: 'David Kim',
    niche: 'Finance',
    engagementRate: 3.5,
    followers: 7800,
    profileUrl: 'https://warpcast.com/davidkim',
    verificationStatus: 'verified' as const,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '5',
    farcasterId: 'fc202',
    name: 'Lisa Park',
    niche: 'Health & Wellness',
    engagementRate: 4.7,
    followers: 11300,
    profileUrl: 'https://warpcast.com/lisapark',
    verificationStatus: 'unverified' as const,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face'
  },
  {
    id: '6',
    farcasterId: 'fc303',
    name: 'Alex Johnson',
    niche: 'Gaming',
    engagementRate: 6.2,
    followers: 18700,
    profileUrl: 'https://warpcast.com/alexjohnson',
    verificationStatus: 'verified' as const,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face'
  }
];

const niches = ['All', 'Tech & Startups', 'E-commerce', 'Lifestyle', 'Finance', 'Health & Wellness', 'Gaming'];

interface InfluencerDiscoveryProps {
  onViewDashboard: () => void;
}

export function InfluencerDiscovery({ onViewDashboard }: InfluencerDiscoveryProps) {
  const [selectedNiche, setSelectedNiche] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedInfluencers, setSelectedInfluencers] = useState<string[]>([]);
  const [filteredInfluencers, setFilteredInfluencers] = useState<Influencer[]>(mockInfluencers);

  useEffect(() => {
    let filtered = mockInfluencers;

    if (selectedNiche !== 'All') {
      filtered = filtered.filter(influencer => influencer.niche === selectedNiche);
    }

    if (searchTerm) {
      filtered = filtered.filter(influencer =>
        influencer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        influencer.niche.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredInfluencers(filtered);
  }, [selectedNiche, searchTerm]);

  const handleSelectInfluencer = (influencerId: string) => {
    setSelectedInfluencers(prev => {
      if (prev.includes(influencerId)) {
        return prev.filter(id => id !== influencerId);
      } else {
        return [...prev, influencerId];
      }
    });
  };

  const handleContinue = () => {
    onViewDashboard();
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-heading text-text">Discover Micro-Influencers</h2>
        <p className="text-caption">Find verified creators in your niche</p>
      </div>

      {/* Search and Filter */}
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search influencers..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-surface border border-border rounded-md text-text placeholder:text-text/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all shadow-sm focus:shadow"
          />
          {searchTerm ? (
            <button 
              onClick={() => setSearchTerm('')}
              className="absolute right-10 top-1/2 -translate-y-1/2 text-text/40 hover:text-text/70 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          ) : null}
          <div className="absolute right-3 top-1/2 -translate-y-1/2">
            <svg className="w-5 h-5 text-text/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
          {niches.map((niche) => (
            <button
              key={niche}
              onClick={() => setSelectedNiche(niche)}
              className={`px-2 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors ${
                selectedNiche === niche
                  ? 'bg-primary text-white'
                  : 'bg-surface border border-border text-text hover:bg-border/50'
              }`}
            >
              {niche}
            </button>
          ))}
        </div>
      </div>

      {/* Influencer Grid */}
      <div className="space-y-3">
        {filteredInfluencers.length === 0 ? (
          <div className="text-center py-8 text-text/60">
            <p>No influencers found matching your criteria.</p>
          </div>
        ) : (
          filteredInfluencers.map((influencer) => (
            <InfluencerCard
              key={influencer.id}
              influencer={influencer}
              variant="compact"
              isSelected={selectedInfluencers.includes(influencer.id)}
              onSelect={() => handleSelectInfluencer(influencer.id)}
            />
          ))
        )}
      </div>

      {/* Continue Button */}
      {selectedInfluencers.length > 0 && (
        <div className="sticky bottom-4 pt-4">
          <CTAButton
            variant="primary"
            onClick={handleContinue}
            className="w-full"
          >
            Continue with {selectedInfluencers.length} influencer{selectedInfluencers.length > 1 ? 's' : ''}
          </CTAButton>
        </div>
      )}
    </div>
  );
}
