import { AlertTriangle, Clock, Thermometer, Users, ThumbsUp, ThumbsDown, RefreshCw, Zap } from 'lucide-react';
import imgAvatar1 from "../../assets/f23c972657c4d43a245a8d7677cc9d9597c9ab7b.png";
import imgAvatar2 from "../../assets/4a472ebe243c30b7e471886b244eab3815eabf31.png";
import imgAvatar3 from "../../assets/0f935c743af1fe295fb5299a2c3811fcc4c264ab.png";
export function LiveMap() {
  return (
    <div className="p-12 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <div className="bg-[#ff8a65] text-white px-3 py-1.5 rounded-full flex items-center gap-2">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span className="text-[13px] font-semibold">CONNECTION TIGHT</span>
          </div>
        </div>
        <h1 className="text-[32px] font-bold text-[#006064] leading-tight mb-2">
          Home to Churchgate
        </h1>
        <div className="flex items-center gap-4 text-sm text-slate-500">
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5" />
            <span>Departs in 12m</span>
          </div>
          <span>•</span>
          <div className="flex items-center gap-2">
            <Thermometer className="w-3.5 h-3.5" />
            <span>34°C (Feels like 40°C)</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Live Connection Chain */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-[#536dfe] rounded-full" />
                <h2 className="text-lg font-bold text-[#006064]">Live Connection Chain</h2>
              </div>
              <span className="text-sm font-semibold text-[#ff8a65]">+4m Delay Detected</span>
            </div>

            {/* Connection Items */}
            <div className="flex flex-col gap-4">
              {/* Auto Rickshaw */}
              <div className="relative bg-white border border-black/8 rounded-md p-5 flex items-start gap-5">
                {/* Icon */}
                <div className="absolute -left-[51px] top-[21px] w-12 h-12 bg-[#ff8a65] rounded-full flex items-center justify-center border-4 border-white">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                    <circle cx="18" cy="15" r="3" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="5" cy="15" r="3" stroke="currentColor" strokeWidth="2"/>
                    <path d="M14 15h-2.5a2.5 2.5 0 0 1 0-5H14m0 0V6m0 4h2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  </svg>
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-slate-900 mb-1">Auto Rickshaw (MH-02)</h3>
                  <p className="text-sm text-slate-500 mb-2">Traffic at S.V. Road Junction</p>
                  <div className="flex gap-2">
                    <div className="bg-slate-100 px-3 py-2 rounded text-sm font-medium text-slate-900">
                      Completed.
                    </div>
                    <div className="bg-slate-100 px-3 py-2 rounded text-sm font-medium text-slate-900">
                      Avg Speed: 12 km/h
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-[#ff8a65]">8:45</div>
                  <div className="text-xs text-slate-500">ETA</div>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="h-8 w-0.5 bg-[#ff8a65] ml-6" />

              {/* Fast Local */}
              <div className="relative bg-white border border-black/8 rounded-md p-5 flex items-start gap-5">
                {/* Icon */}
                <div className="absolute -left-[51px] top-[21px] w-12 h-12 bg-[#006064] rounded-full flex items-center justify-center border-4 border-white">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none">
                    <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                    <path d="M3 9h18M9 3v6M9 15v6" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>

                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-slate-900 mb-1">9:12 Fast Local</h3>
                  <p className="text-sm text-slate-500 mb-2">Andheri Platform 4 • Churchgate Bound</p>
                  <div className="flex gap-2">
                    <div className="bg-[#fff3e0] border border-[#ffe0b2] px-3 py-2 rounded text-sm font-medium text-[#ff8a65]">
                      Delay: +7 min
                    </div>
                    <div className="bg-[#e8f5e9] px-3 py-2 rounded text-sm font-medium text-[#1b5e20]">
                      Freq: 3 mins
                    </div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-2xl font-bold text-[#006064]">9:19</div>
                  <div className="text-xs text-slate-500">DEP</div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button className="flex-1 bg-white border-2 border-slate-400 text-slate-600 rounded-lg py-4 px-6 flex items-center justify-center gap-3 font-bold hover:bg-slate-50 transition-colors">
              <RefreshCw className="w-4 h-4" />
              Find Next
            </button>
            <button className="flex-1 bg-[#536dfe] text-white rounded-lg py-4 px-6 flex items-center justify-center gap-3 font-bold hover:bg-[#4557d8] transition-colors shadow-lg shadow-[#536dfe]/30">
              <Zap className="w-4 h-4" fill="white" />
              I'm Running
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {/* Confidence Horizon */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold text-[#006064]">Confidence Horizon</h3>
              <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <path d="M12 8v4M12 16h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            
            <div className="text-center mt-8 mb-4">
              <div className="text-6xl font-extrabold text-[#536dfe]">92%</div>
              <div className="text-xs font-semibold text-slate-600 uppercase tracking-widest mt-2">
                High Confidence
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="flex -space-x-2">
                <img src={imgAvatar1} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src={imgAvatar2} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
                <img src={imgAvatar3} alt="" className="w-6 h-6 rounded-full border-2 border-white" />
              </div>
              <span className="text-xs text-slate-600">+12</span>
            </div>
            <p className="text-xs text-slate-500 text-center mt-2">
              15 Active Observers on Train #90214
            </p>
          </div>

          {/* Station Pulse */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-semibold text-[#006064]">Station Pulse</h3>
              <span className="text-xs text-slate-500">ANDHERI PF-6</span>
            </div>

            {/* Bar Chart */}
            <div className="flex gap-1 h-12 mb-4">
              <div className="flex-1 bg-[#e8f5e9] rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-[#1b5e20]">20%</span>
              </div>
              <div className="flex-1 bg-[#ffb74d] rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-white">55%</span>
              </div>
              <div className="flex-1 bg-[#ff8a65] rounded flex items-center justify-center">
                <span className="text-xs font-semibold text-white">85%</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <p className="text-sm text-slate-600 mb-3">Your carriage status?</p>
              <div className="flex gap-2">
                <button className="flex-1 bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 hover:bg-slate-100 transition-colors">
                  <ThumbsUp className="w-4 h-4 mx-auto text-slate-600" />
                </button>
                <button className="flex-1 bg-slate-50 border border-slate-200 rounded-lg py-2 px-3 hover:bg-slate-100 transition-colors">
                  <ThumbsDown className="w-4 h-4 mx-auto text-slate-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Zen Navigation */}
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1.5 h-1.5 bg-[#006064] rounded-full" />
              <h3 className="text-sm font-semibold text-[#006064]">Zen Navigation (Backup)</h3>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600">Next Train</span>
              <span className="font-semibold text-slate-900">9:22</span>
            </div>
            <div className="flex items-center justify-between text-sm mt-1">
              <span className="text-slate-600">Road Alt</span>
              <span className="font-semibold text-slate-900">~35 min</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
