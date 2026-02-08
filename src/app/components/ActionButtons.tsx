import { Play, RefreshCw } from 'lucide-react';

export function ActionButtons() {
  return (
    <div className="flex gap-4">
      <button className="flex-1 bg-[#536dfe] text-white rounded-lg py-4 px-6 flex items-center justify-center gap-3 font-semibold hover:bg-[#4557d8] transition-colors shadow-sm">
        <Play className="w-5 h-5" fill="white" />
        I'M RUNNING
      </button>
      <button className="flex-1 bg-white text-slate-700 rounded-lg py-4 px-6 flex items-center justify-center gap-3 font-semibold hover:bg-slate-50 transition-colors border-2 border-slate-200">
        <RefreshCw className="w-5 h-5" />
        Find Next
      </button>
    </div>
  );
}
