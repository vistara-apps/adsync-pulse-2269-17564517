'use client'

interface NavigationTabsProps {
  currentView: string;
  onChangeView: (view: string) => void;
  views: { id: string; label: string }[];
}

export function NavigationTabs({ currentView, onChangeView, views }: NavigationTabsProps) {
  return (
    <div className="flex justify-center mb-6">
      <div className="inline-flex bg-surface border border-border rounded-lg p-1">
        {views.map((view) => (
          <button
            key={view.id}
            onClick={() => onChangeView(view.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              currentView === view.id
                ? 'bg-primary text-white shadow-sm'
                : 'text-text/70 hover:text-text hover:bg-border/30'
            }`}
          >
            {view.label}
          </button>
        ))}
      </div>
    </div>
  );
}

