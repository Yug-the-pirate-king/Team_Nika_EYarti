import { Check, AlertTriangle, Zap } from 'lucide-react';

interface TimelineNode {
  time: string;
  title: string;
  subtitle?: string;
  status: 'completed' | 'delayed' | 'future';
  warning?: {
    title: string;
    description: string;
  };
}

const nodes: TimelineNode[] = [
  {
    time: '08:45 AM',
    title: 'Rickshaw to Station',
    status: 'completed',
  },
  {
    time: '09:12 AM (Delayed)',
    title: 'Churchgate Fast',
    subtitle: 'Virar Local • Platform 4',
    status: 'delayed',
    warning: {
      title: 'Connection Tightness: Critical',
      description: 'Rickshaw delay +7m reduced transfer window.',
    },
  },
  {
    time: '09:58 AM',
    title: 'Walk to Office',
    subtitle: '1.2 km • 15 min',
    status: 'future',
  },
];

export function TripTimeline() {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 w-[380px] shrink-0">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-lg font-bold text-slate-600">Current Trip</h2>
        <button className="text-slate-600 hover:text-slate-800">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 5C10 5.5 10.5 6 11 6C11.5 6 12 5.5 12 5C12 4.5 11.5 4 11 4C10.5 4 10 4.5 10 5M10 10C10 10.5 10.5 11 11 11C11.5 11 12 10.5 12 10C12 9.5 11.5 9 11 9C10.5 9 10 9.5 10 10M10 15C10 15.5 10.5 16 11 16C11.5 16 12 15.5 12 15C12 14.5 11.5 14 11 14C10.5 14 10 14.5 10 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Timeline */}
      <div className="relative pl-6">
        {/* Vertical line */}
        <div className="absolute left-[7px] top-2 bottom-4 w-0.5 bg-gray-300" />
        {/* Delayed segment highlight */}
        <div className="absolute left-[6px] top-[60px] w-1 h-[120px] bg-[#bf360c] rounded-full" />

        <div className="flex flex-col gap-12">
          {nodes.map((node, index) => (
            <div key={index} className="relative">
              {/* Node indicator */}
              <div
                className={`absolute -left-6 top-1 w-4 h-4 rounded-full border-[3px] border-white ${
                  node.status === 'completed'
                    ? 'bg-[#006064] shadow-[0_0_0_2px_#006064]'
                    : node.status === 'delayed'
                    ? 'bg-[#bf360c] shadow-[0_0_0_2px_#bf360c]'
                    : 'bg-[#cfd8dc] shadow-[0_0_0_1px_#cfd8dc]'
                }`}
              />

              {/* Content */}
              <div className="flex flex-col gap-1">
                <div
                  className={`text-sm font-medium ${
                    node.status === 'delayed' ? 'text-[#bf360c] font-bold' : 'text-slate-600'
                  }`}
                >
                  {node.time}
                </div>
                <div className="text-lg font-bold text-slate-900">{node.title}</div>
                {node.subtitle && (
                  <div className="flex items-center gap-1.5 text-sm text-slate-600">
                    {node.status === 'delayed' && (
                      <AlertTriangle className="w-3.5 h-3.5 text-[#bf360c]" />
                    )}
                    <span>{node.subtitle}</span>
                  </div>
                )}
                {node.status === 'completed' && (
                  <div className="flex items-center gap-1.5 text-sm text-[#006064] font-semibold">
                    <Check className="w-3.5 h-3.5" />
                    <span>Completed</span>
                  </div>
                )}
              </div>

              {/* Warning box */}
              {node.warning && (
                <div className="mt-3 bg-[#bf360c] rounded-md p-4 text-white">
                  <div className="flex items-start gap-2">
                    <Zap className="w-4 h-4 mt-0.5 shrink-0" fill="white" />
                    <div>
                      <div className="text-sm font-semibold">{node.warning.title}</div>
                      <div className="text-xs opacity-90 mt-1">{node.warning.description}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Live Prediction */}
      <div className="mt-8 pt-6 border-t border-gray-200">
        <div className="text-xs font-semibold text-slate-600 uppercase tracking-wide mb-2">
          Live Prediction
        </div>
        <p className="text-sm text-[#006064] leading-relaxed">
          Traffic on SV Road is heavier than usual. Recommended pace increased to{' '}
          <span className="font-bold">6km/h</span> to maintain connection.
        </p>
      </div>
    </div>
  );
}
