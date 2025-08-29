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
      <div className="max-w-4xl p-3 sm:p-4 md:p-6 mx-auto w-full">
        {header && (
          <header className="mb-4 sm:mb-6">
            {header}
          </header>
        )}
        
        <main className="flex-1 mb-4 sm:mb-6">
          {children}
        </main>
        
        {footer && (
          <footer className="mt-auto pt-4">
            {footer}
          </footer>
        )}
      </div>
    </div>
  )
}
