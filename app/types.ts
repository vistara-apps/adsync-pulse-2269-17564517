export interface Influencer {
  id: string;
  farcasterId: string;
  name: string;
  niche: string;
  engagementRate: number;
  followers: number;
  profileUrl: string;
  verificationStatus: 'verified' | 'pending' | 'unverified';
  avatar: string;
}

export interface Campaign {
  id: string;
  title: string;
  status: 'active' | 'completed' | 'draft';
  startDate: string;
  endDate: string;
  influencerCount: number;
  metrics: {
    reach: number;
    engagement: number;
    clicks: number;
    conversions: number;
  };
}

