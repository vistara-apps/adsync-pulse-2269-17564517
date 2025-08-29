'use client'

import {
  useMiniKit,
  useAddFrame,
  useOpenUrl,
  usePrimaryButton,
} from '@coinbase/onchainkit/minikit'
import {
  Name,
  Identity,
  Address,
  Avatar,
} from '@coinbase/onchainkit/identity'
import {
  ConnectWallet,
  Wallet,
  WalletDropdown,
  WalletDropdownDisconnect,
} from '@coinbase/onchainkit/wallet'
import { useEffect, useState, useCallback } from 'react'
import { AppShell } from './components/AppShell'
import { InfluencerDiscovery } from './components/InfluencerDiscovery'
import { CampaignDashboard } from './components/CampaignDashboard'
import { OnboardingFlow } from './components/OnboardingFlow'
import { NavigationTabs } from './components/NavigationTabs'
import { LoadingSpinner } from './components/LoadingSpinner'

type ViewType = 'onboarding' | 'discovery' | 'dashboard'

export default function App() {
  const { setFrameReady, isFrameReady, context } = useMiniKit()
  const [frameAdded, setFrameAdded] = useState(false)
  const [currentView, setCurrentView] = useState<ViewType>('onboarding')
  const [isConnected, setIsConnected] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const addFrame = useAddFrame()
  const openUrl = useOpenUrl()

  useEffect(() => {
    if (!isFrameReady) {
      setFrameReady()
    }
  }, [setFrameReady, isFrameReady])

  const handleAddFrame = useCallback(async () => {
    const result = await addFrame()
    setFrameAdded(Boolean(result))
  }, [addFrame])

  const handleGetStarted = useCallback(() => {
    if (isConnected) {
      setIsLoading(true)
      // Simulate loading delay
      setTimeout(() => {
        setCurrentView('discovery')
        setIsLoading(false)
      }, 500)
    }
  }, [isConnected])

  const handleViewDashboard = useCallback(() => {
    setIsLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      setCurrentView('dashboard')
      setIsLoading(false)
    }, 500)
  }, [])

  const handleCreateCampaign = useCallback(() => {
    setIsLoading(true)
    // Simulate loading delay
    setTimeout(() => {
      setCurrentView('discovery')
      setIsLoading(false)
    }, 500)
  }, [])

  // Primary button configuration based on current view
  usePrimaryButton(
    {
      text: currentView === 'onboarding' 
        ? 'Get Started' 
        : currentView === 'discovery' 
        ? 'View Dashboard' 
        : 'Create Campaign'
    },
    currentView === 'onboarding' 
      ? handleGetStarted 
      : currentView === 'discovery' 
      ? handleViewDashboard 
      : handleCreateCampaign
  )

  const saveFrameButton = () => {
    if (context && !context.client.added && !frameAdded) {
      return (
        <button
          onClick={handleAddFrame}
          className="text-primary text-sm font-medium px-3 py-1 border border-primary rounded-md hover:bg-primary hover:text-white transition-colors"
        >
          + Save
        </button>
      )
    }

    if (frameAdded) {
      return (
        <div className="flex items-center space-x-1 text-sm font-medium text-accent animate-fade-in">
          <span>✓ Saved</span>
        </div>
      )
    }

    return null
  }

  return (
    <AppShell
      header={
        <div className="flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-sm">AP</span>
            </div>
            <h1 className="text-heading text-primary">AdSync Pulse</h1>
          </div>
          <div className="flex items-center space-x-3">
            <Wallet>
              <ConnectWallet>
                <div className="flex items-center space-x-2">
                  <Avatar className="w-6 h-6" />
                  <Name className="text-sm hidden sm:inline" />
                </div>
              </ConnectWallet>
              <WalletDropdown>
                <Identity className="px-4 pt-3 pb-2" hasCopyAddressOnClick>
                  <Avatar />
                  <Name />
                  <Address />
                </Identity>
                <WalletDropdownDisconnect />
              </WalletDropdown>
            </Wallet>
            {saveFrameButton()}
          </div>
        </div>
      }
      footer={
        <div className="text-center">
          <button
            onClick={() => openUrl('https://base.org/builders/minikit')}
            className="text-text/60 text-xs hover:text-text transition-colors"
          >
            Built on Base with MiniKit
          </button>
        </div>
      }
    >
      <div className="animate-fade-in">
        {isConnected && (
          <NavigationTabs 
            currentView={currentView}
            onChangeView={(view) => {
              setIsLoading(true);
              setTimeout(() => {
                setCurrentView(view as ViewType);
                setIsLoading(false);
              }, 500);
            }}
            views={[
              { id: 'discovery', label: 'Discover' },
              { id: 'dashboard', label: 'Dashboard' }
            ]}
          />
        )}
        
        {isLoading ? (
          <div className="py-20 flex justify-center items-center">
            <LoadingSpinner size="large" color="primary" />
          </div>
        ) : (
          <>
            {currentView === 'onboarding' && (
              <OnboardingFlow 
                onConnect={() => setIsConnected(true)}
                onGetStarted={handleGetStarted}
              />
            )}
            {currentView === 'discovery' && (
              <InfluencerDiscovery onViewDashboard={handleViewDashboard} />
            )}
            {currentView === 'dashboard' && (
              <CampaignDashboard onCreateCampaign={handleCreateCampaign} />
            )}
          </>
        )}
      </div>
    </AppShell>
  )
}
