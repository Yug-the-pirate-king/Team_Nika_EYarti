import { ChevronRight, Signal } from 'lucide-react';

export function GhostMode() {
  return (
    <button className="bg-[#455a64] text-white rounded-lg p-4 flex items-center justify-between w-full hover:bg-[#37474f] transition-colors group">
      <div className="flex items-center gap-3">
        <Signal className="w-5 h-5" />
        <div className="text-left">
          <div className="text-sm font-semibold">Ghost Mode Ready</div>
          <div className="text-xs opacity-80">Dead-reckoning active for tunnels</div>
        </div>
      </div>
      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>
  );
}
