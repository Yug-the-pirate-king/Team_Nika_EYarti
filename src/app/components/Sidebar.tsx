import { Map, Grid, Route, Ticket, Bell, Settings, Wifi } from 'lucide-react';

interface SidebarProps {
  activeItem?: string;
  onNavigate?: (item: string) => void;
}

export function Sidebar({ activeItem = 'My Commute', onNavigate }: SidebarProps) {
  const menuItems = [
    { icon: Map, label: 'Live Map', active: false },
    { icon: Grid, label: 'My Commute', active: true },
    { icon: Route, label: 'My Routes', active: false },
    { icon: Ticket, label: 'Passes', active: false },
    { icon: Bell, label: 'Alerts', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <div className="bg-[#006064] h-screen w-[260px] flex flex-col justify-between p-6 shrink-0">
      {/* Header */}
      <div className="flex flex-col gap-12">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-lg w-8 h-8 flex items-center justify-center shrink-0">
            <div className="text-[#006064] font-bold text-sm">E</div>
          </div>
          <span className="text-white text-2xl font-bold tracking-tight">EYatri</span>
        </div>

        {/* Navigation */}
        <nav className="flex flex-col gap-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = item.label === activeItem;
            return (
              <button
                key={item.label}
                onClick={() => onNavigate?.(item.label)}
                className={`flex items-center gap-4 px-3 py-4 rounded-md transition-colors ${
                  isActive
                    ? 'bg-white/15 text-white'
                    : 'text-white/70 hover:text-white hover:bg-white/5'
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={2} />
                <span className="text-base font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-6">
        {/* Signal Strength */}
        <div className="bg-black/20 rounded-md p-4 flex flex-col gap-2">
          <div className="text-white text-xs opacity-80 uppercase tracking-wide">
            Signal Strength
          </div>
          <div className="flex items-center gap-2">
            <Wifi className="w-4 h-4 text-white" />
            <span className="text-white text-sm">Weak (Tunnel Mode)</span>
          </div>
          <div className="bg-slate-200 h-2 rounded-full overflow-hidden">
            <div className="bg-gradient-to-r from-slate-400 to-slate-600 h-full w-[65%]" />
          </div>
        </div>

        {/* Settings */}
        <button 
          onClick={() => onNavigate?.('Settings')}
          className="flex items-center gap-4 px-3 py-4 rounded-md text-white/70 hover:text-white hover:bg-white/5 border-t border-white/10 pt-8">
          <Settings className="w-5 h-5" strokeWidth={2} />
          <span className="text-base font-medium">Settings</span>
        </button>
      </div>
    </div>
  );
}