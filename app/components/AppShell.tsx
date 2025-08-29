
'use client'

import { type ReactNode } from 'react'

interface AppShellProps {
  children: ReactNode
  header?: ReactNode
  footer?: ReactNode
}

export function AppShell({ children, header, footer }: AppShellProps) {
  return (
    <div className="flex flex-col min-h-screen bg-bg">
      <div className="max-w-full p-4 mx-auto w-full">
        {header && (
          <header className="mb-6">
            {header}
          </header>
        )}
        
        <main className="flex-1 mb-6">
          {children}
        </main>
        
        {footer && (
          <footer className="mt-auto">
            {footer}
          </footer>
        )}
      </div>
    </div>
  )
}
