// 1. Remove the "figma:asset" lines and use relative paths
import imgUser from "../../assets/f23c972657c4d43a245a8d7677cc9d9597c9ab7b.png";
import imgUser1 from "../../assets/4a472ebe243c30b7e471886b244eab3815eabf31.png";
import imgUser2 from "../../assets/0f935c743af1fe295fb5299a2c3811fcc4c264ab.png";

export function TrainArrival() {
  return (
    <div className="bg-white rounded-lg shadow-md p-10 flex items-center justify-between">
      {/* Left side - Train info */}
      <div className="flex flex-col gap-4">
        <div className="bg-[#006064] text-white text-sm font-bold uppercase px-3 py-1.5 rounded inline-block self-start">
          Platform 4
        </div>
        <h1 className="text-[32px] font-extrabold text-slate-900 tracking-tight leading-tight">
          Churchgate Fast
        </h1>
        <div className="text-lg text-slate-600">Borivali → Churchgate</div>
        
        {/* Active observers */}
        <div className="bg-slate-50 rounded-full px-3 py-2 flex items-center gap-3 inline-block self-start mt-4">
          <div className="flex -space-x-2">
            <img 
              src={imgUser} 
              alt="Observer" 
              className="w-7 h-7 rounded-full border-2 border-white"
            />
            <img 
              src={imgUser1} 
              alt="Observer" 
              className="w-7 h-7 rounded-full border-2 border-white"
            />
            <img 
              src={imgUser2} 
              alt="Observer" 
              className="w-7 h-7 rounded-full border-2 border-white"
            />
          </div>
          <span className="text-sm font-semibold text-slate-600">32 Active Observers</span>
        </div>
      </div>

      {/* Right side - Arrival time */}
      <div className="flex flex-col items-end gap-2">
        <div className="text-[56px] font-extrabold text-[#536dfe] leading-none tracking-tight">
          3 min
        </div>
        <div className="text-sm font-semibold text-slate-600 uppercase tracking-widest">
          Arriving In
        </div>
        <div className="bg-[#536dfe]/10 text-[#536dfe] text-xs font-semibold px-2 py-1 rounded mt-2">
          High Confidence
        </div>
      </div>
    </div>
  );
}
