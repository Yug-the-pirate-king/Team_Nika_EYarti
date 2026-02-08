import { Minus, Plus } from 'lucide-react';

const coaches = [
  { type: 'L', density: 'light', color: 'bg-[#ffecb3] text-[#bf360c]' },
  { type: 'GEN', density: 'full', color: 'bg-[#bf360c] text-white' },
  { type: 'GEN', density: 'full', color: 'bg-[#bf360c] text-white' },
  { type: 'FC', density: 'moderate', color: 'bg-[#ffecb3] text-[#bf360c]' },
  { type: 'FC', density: 'empty', color: 'bg-[#e8f5e9] text-[#1b5e20]' },
  { type: 'L', density: 'empty', color: 'bg-[#e8f5e9] text-[#1b5e20]' },
  { type: 'GEN', density: 'moderate', color: 'bg-[#ffecb3] text-[#bf360c]' },
  { type: 'GEN', density: 'moderate', color: 'bg-[#ffecb3] text-[#bf360c]' },
  { type: 'GEN', density: 'full', color: 'bg-[#bf360c] text-white' },
];

export function TrainDensity() {
  return (
    <div className="bg-white rounded-lg shadow-md p-10 flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Train Density</h2>
          <p className="text-sm text-slate-600 mt-0.5">Based on real-time weight sensors</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-sm bg-[#e8f5e9]" />
            <span className="text-xs text-slate-600">Empty</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-sm bg-[#ffecb3]" />
            <span className="text-xs text-slate-600">Mod</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-sm bg-[#bf360c]" />
            <span className="text-xs text-slate-600">Full</span>
          </div>
        </div>
      </div>

      {/* Heatmap */}
      <div className="flex gap-0.5 h-12 rounded-lg overflow-hidden">
        {coaches.map((coach, index) => (
          <div
            key={index}
            className={`flex-1 flex items-center justify-center text-xs font-bold ${coach.color}`}
          >
            {coach.type}
          </div>
        ))}
      </div>

      {/* Help section */}
      <div className="flex items-center justify-between pt-2">
        <p className="text-sm font-medium text-slate-600">Help others: How's your coach?</p>
        <div className="flex items-center gap-3">
          <button className="w-12 h-12 rounded-full bg-white border-2 border-black/10 flex items-center justify-center hover:bg-slate-50 transition-colors">
            <Minus className="w-6 h-6 text-slate-600" strokeWidth={2} />
          </button>
          <button className="w-12 h-12 rounded-full bg-white border-2 border-black/10 flex items-center justify-center hover:bg-slate-50 transition-colors">
            <Plus className="w-6 h-6 text-slate-600" strokeWidth={2} />
          </button>
        </div>
      </div>
    </div>
  );
}
