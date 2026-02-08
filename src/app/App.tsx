import { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { TripTimeline } from './components/TripTimeline';
import { TrainArrival } from './components/TrainArrival';
import { TrainDensity } from './components/TrainDensity';
import { GhostMode } from './components/GhostMode';
import { ActionButtons } from './components/ActionButtons';
import { LiveMap } from './components/LiveMap';
import { Sun } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState('My Commute');

  return (
    <div className="flex h-screen bg-[#f5f7fa] overflow-hidden">
      {/* Sidebar */}
      <Sidebar activeItem={currentView} onNavigate={setCurrentView} />

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        {currentView === 'My Commute' && (
          <div className="p-12 max-w-[1400px] mx-auto">
            {/* Header */}
            <div className="flex items-end justify-between mb-10">
              <div>
                <h1 className="text-[32px] font-bold text-[#006064] leading-tight mb-2">
                  Good Morning,This is team Nika
                </h1>
                <p className="text-slate-600">Heading to Andheri West via Churchgate Fast</p>
              </div>
              <div className="bg-[#e8f5e9] rounded-xl px-4 py-2 flex items-center gap-3">
                <Sun className="w-4 h-4 text-[#1f1a00]" />
                <span className="text-sm font-semibold text-[#1f1a00]">Solar Mode Active</span>
              </div>
            </div>

            {/* Main Content Grid */}
            <div className="flex gap-6">
              {/* Left Column - Timeline */}
              <TripTimeline />

              {/* Right Column */}
              <div className="flex-1 flex flex-col gap-6">
                {/* Train Arrival Card */}
                <TrainArrival />

                {/* Train Density */}
                <TrainDensity />

                {/* Ghost Mode */}
                <GhostMode />

                {/* Action Buttons */}
                <ActionButtons />
              </div>
            </div>
          </div>
        )}

        {currentView === 'Live Map' && <LiveMap />}

        {(currentView !== 'My Commute' && currentView !== 'Live Map') && (
          <div className="p-12 max-w-[1400px] mx-auto">
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">{currentView}</h2>
              <p className="text-slate-600">This section is coming soon...</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
