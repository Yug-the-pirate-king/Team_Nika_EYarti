import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, Map, Layers, Settings, 
  Zap, Bus, Train, Plane, Hexagon, Truck, 
  Search, Menu, X 
} from 'lucide-react';

// --- THEME & CONFIG ---
const THEME = {
  emerald: '#00ffa3',
  cyan: '#00d9ff',
  amber: '#ffab00',
  danger: '#ff2a6d',
  purple: '#d500f9',
  dark: '#050a0f',
  cardBg: 'rgba(12, 20, 28, 0.75)',
};

const FLEET_CONFIG = [
  { id: 'AUTO-04', type: 'rickshaw', routes: ['M 50 350 Q 200 350 400 200 T 750 150', 'M 50 350 C 150 50 450 50 750 150'], color: THEME.emerald, speed: 12, icon: <Zap size={14} /> },
  { id: 'BUS-302', type: 'bus', routes: ['M 0 100 Q 400 300 800 100', 'M 0 100 L 800 100'], color: THEME.amber, speed: 18, icon: <Bus size={14} /> },
  { id: 'METRO-1', type: 'train', routes: ['M 0 380 L 800 380'], color: THEME.cyan, speed: 6, icon: <Train size={14} /> },
  { id: 'DRONE-X', type: 'uav', routes: ['M 100 0 Q 400 200 700 0', 'M 100 0 L 400 400 L 700 0'], color: THEME.purple, speed: 4, icon: <Plane size={14} /> },
  { id: 'EMG-911', type: 'ambulance', routes: ['M 750 350 C 600 350 200 350 50 350', 'M 750 350 Q 400 0 50 350'], color: THEME.danger, speed: 8, icon: <Hexagon size={14} /> },
  { id: 'LOG-88', type: 'truck', routes: ['M 0 200 Q 200 0 400 200 T 800 200', 'M 0 200 L 800 200'], color: '#607d8b', speed: 22, icon: <Truck size={14} /> },
];

const EYatriApp = () => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [isOptimized, setIsOptimized] = useState(false);
  const [routeKey, setRouteKey] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // New State for Mobile Menu

  const handleOptimize = () => {
    setIsOptimized(!isOptimized);
    setRouteKey(prev => prev + 1);
  };

  return (
    <div className="app-shell">
      <GlobalStyles />
      <div className="bg-mesh" />

      {/* SIDEBAR - Passes close function for mobile */}
      <Sidebar 
        activeModule={activeModule} 
        setActiveModule={(id) => { setActiveModule(id); setMobileMenuOpen(false); }} 
        isOpen={mobileMenuOpen}
        closeMenu={() => setMobileMenuOpen(false)}
      />

      {/* OVERLAY for Mobile when menu is open */}
      {mobileMenuOpen && <div className="mobile-overlay" onClick={() => setMobileMenuOpen(false)} />}

      <main className="viewport">
        {/* TOP BAR - Passes toggle function */}
        <TopBar 
          isOptimized={isOptimized} 
          handleOptimize={handleOptimize} 
          activeModule={activeModule}
          toggleMenu={() => setMobileMenuOpen(!mobileMenuOpen)}
        />
        
        <div className="content-grid">
          <AnimatePresence mode="wait">
            {activeModule === 'dashboard' ? (
              <DashboardView key="dash" isOptimized={isOptimized} />
            ) : (
              <GhostMap key="map" isOptimized={isOptimized} routeKey={routeKey} />
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
};

// --- COMPONENTS ---

const Sidebar = ({ activeModule, setActiveModule, isOpen, closeMenu }) => (
  <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
    <div className="sidebar-header">
      <div className="logo-area">
        <div className="logo-icon"><div className="logo-dot" /></div>
        <div><h1>EYATRI</h1><p>FLEET COMMAND</p></div>
      </div>
      {/* Mobile Close Button */}
      <button className="mobile-close-btn" onClick={closeMenu}>
        <X size={24} color="white" />
      </button>
    </div>

    <nav>
      {[
        { id: 'dashboard', label: 'Live Traffic', icon: <Activity size={18} /> },
        { id: 'ghost', label: 'Ghost Map', icon: <Map size={18} /> },
        { id: 'analytics', label: 'Analytics', icon: <Layers size={18} /> },
        { id: 'settings', label: 'Settings', icon: <Settings size={18} /> },
      ].map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveModule(item.id)}
          className={`nav-btn ${activeModule === item.id ? 'active' : ''}`}
        >
          {item.icon} <span>{item.label}</span>
          {activeModule === item.id && <motion.div layoutId="active-pill" className="active-pill" />}
        </button>
      ))}
    </nav>
    
    <div className="user-profile">
      <div className="avatar">AD</div>
      <div className="user-info"><span className="name">Admin Ops</span><span className="role">Level 4 Access</span></div>
    </div>
  </aside>
);

const TopBar = ({ isOptimized, handleOptimize, activeModule, toggleMenu }) => (
  <div className="top-bar">
    <div className="top-bar-left">
      {/* HAMBURGER BUTTON */}
      <button className="menu-toggle" onClick={toggleMenu}>
        <Menu size={24} color="white" />
      </button>
      <div className="breadcrumbs">
        <span className="sector">SECTOR: MUMBAI_NORTH</span>
        <h2 className="page-title">{activeModule.toUpperCase()}</h2>
      </div>
    </div>

    <div className="actions">
      <div className="search-bar">
        <Search size={14} color="#6f8fa3" />
        <input type="text" placeholder="Search Unit..." />
      </div>

      <motion.button 
        whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
        onClick={handleOptimize}
        className={`optimize-btn ${isOptimized ? 'active' : ''}`}
      >
        <Zap size={16} fill={isOptimized ? '#050a0f' : 'none'} />
        <span className="btn-text">{isOptimized ? 'OPTIMIZED' : 'OPTIMIZE'}</span>
      </motion.button>
    </div>
  </div>
);

const DashboardView = ({ isOptimized }) => (
  <motion.div 
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} 
    className="dashboard-grid"
  >
    <Card className="card-status" glow>
      <div className="status-content">
        <div style={{ flex: 1 }}>
          <HeaderLabel>SYSTEM STATUS</HeaderLabel>
          <div className="stats-row">
            <StatBox label="ACTIVE" value={FLEET_CONFIG.length} unit="UNITS" />
            <StatBox label="EFFICIENCY" value={isOptimized ? '98%' : '64%'} color={isOptimized ? THEME.emerald : THEME.amber} animate />
          </div>
        </div>
        <RadarWidget isOptimized={isOptimized} />
      </div>
    </Card>

    <Card className="card-chart">
      <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '10px'}}>
         <HeaderLabel>NETWORK LOAD</HeaderLabel>
         <div style={{fontSize: '10px', color: isOptimized ? THEME.emerald : THEME.danger}}>{isOptimized ? 'STABLE' : 'HIGH LATENCY'}</div>
      </div>
      <SparklineChart color={isOptimized ? THEME.emerald : THEME.danger} />
    </Card>

    <Card className="card-list">
      <HeaderLabel>LIVE UNITS</HeaderLabel>
      <div className="fleet-list">
        {FLEET_CONFIG.map((vehicle) => (
          <div key={vehicle.id} className="fleet-item" style={{ borderLeftColor: vehicle.color }}>
            <div className="fleet-id"><span style={{ color: vehicle.color }}>{vehicle.icon}</span>{vehicle.id}</div>
            <span className="status-tag">{isOptimized && vehicle.routes[1] ? 'OPT' : 'STD'}</span>
          </div>
        ))}
      </div>
    </Card>
  </motion.div>
);

const GhostMap = ({ isOptimized, routeKey }) => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="ghost-map-container">
    <Card className="map-card" style={{ padding: 0, height: '100%', position: 'relative' }}>
      <div className="map-overlay-top">
        {FLEET_CONFIG.map(v => (
          <div key={v.id} className="map-pill" style={{ borderColor: `${v.color}40` }}>
            <div className="dot" style={{ background: v.color }}></div>
            {v.id}
          </div>
        ))}
      </div>
      <div className="svg-wrapper">
        <svg viewBox="0 0 800 400" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/></pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          {FLEET_CONFIG.map((vehicle) => {
            const currentRoute = isOptimized && vehicle.routes[1] ? vehicle.routes[1] : vehicle.routes[0];
            return (
              <React.Fragment key={vehicle.id}>
                <motion.path key={`p-${routeKey}-${vehicle.id}`} d={currentRoute} fill="none" stroke={vehicle.color} strokeWidth="1" strokeOpacity="0.3" strokeDasharray="4 4" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2 }} />
                <motion.circle r="4" fill={vehicle.color} style={{ offsetPath: `path('${currentRoute}')` }} animate={{ offsetDistance: ["0%", "100%"] }} transition={{ duration: vehicle.speed, repeat: Infinity, ease: "linear" }} />
              </React.Fragment>
            );
          })}
        </svg>
      </div>
    </Card>
  </motion.div>
);

// --- HELPERS (Same as before, simplified for brevity) ---
const Card = ({ children, className, style, glow }) => <motion.div className={`card ${className} ${glow?'glow':''}`} style={style}><div className="card-shine"/>{children}</motion.div>;
const HeaderLabel = ({ children }) => <h3 className="header-label">{children}</h3>;
const StatBox = ({ label, value, unit, color, animate }) => <div className="stat-box"><div className="stat-label">{label}</div><div className="stat-value" style={{ color: color || 'white' }}>{value}{unit && <span className="stat-unit">{unit}</span>}</div></div>;
const RadarWidget = ({ isOptimized }) => <div className="radar-container"><div className={`radar-sweep ${isOptimized?'optimized':''}`} /><div className="radar-grid" /></div>;
const SparklineChart = ({ color }) => <div className="sparkline-wrapper"><svg viewBox="0 0 100 60" preserveAspectRatio="none"><path d="M 0,50 10,45 20,48 30,35 40,40 50,30 60,35 70,20 80,25 90,10 100,5" fill="none" stroke={color} strokeWidth="2" vectorEffect="non-scaling-stroke" /></svg></div>;

// --- CSS STYLES (RESPONSIVE UPDATES) ---
const GlobalStyles = () => (
  <style>{`
    :root { --emerald: ${THEME.emerald}; --bg: ${THEME.dark}; --card: ${THEME.cardBg}; --font-mono: 'JetBrains Mono', monospace; }
    * { box-sizing: border-box; }
    body { background: #000; color: #e0e6ed; font-family: var(--font-mono); margin: 0; overflow: hidden; }
    
    .app-shell { display: flex; height: 100vh; position: relative; width: 100%; }
    
    /* MESH BACKGROUND */
    .bg-mesh { position: absolute; inset: 0; background: radial-gradient(circle at 15% 50%, #0a151f 0%, #030507 85%); z-index: 0; }
    .bg-mesh::after { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px); background-size: 50px 50px; opacity: 0.3; }

    /* SIDEBAR (Desktop Default) */
    .sidebar { width: 260px; background: rgba(5, 10, 15, 0.9); backdrop-filter: blur(20px); border-right: 1px solid rgba(255,255,255,0.08); padding: 30px; display: flex; flex-direction: column; z-index: 50; transition: transform 0.3s ease; }
    .sidebar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 50px; }
    .logo-area { display: flex; align-items: center; gap: 15px; }
    .logo-area h1 { font-size: 20px; font-weight: 900; margin: 0; line-height: 1; }
    .logo-area p { font-size: 9px; color: var(--emerald); letter-spacing: 2px; margin: 5px 0 0 0; }
    .logo-icon { width: 40px; height: 40px; border-radius: 50%; border: 2px dashed var(--emerald); display: flex; align-items: center; justify-content: center; animation: spin 10s linear infinite; }
    .logo-dot { width: 8px; height: 8px; background: var(--emerald); border-radius: 50%; }
    
    /* NAV BUTTONS */
    .nav-btn { display: flex; align-items: center; gap: 15px; padding: 16px; border-radius: 12px; background: transparent; border: none; color: #6f8fa3; cursor: pointer; text-align: left; font-family: inherit; font-size: 14px; width: 100%; position: relative; }
    .nav-btn:hover { color: white; background: rgba(255,255,255,0.03); }
    .nav-btn.active { color: white; background: linear-gradient(90deg, rgba(0,255,163,0.1), transparent); }
    .active-pill { position: absolute; left: 0; top: 15%; bottom: 15%; width: 3px; background: var(--emerald); border-radius: 0 4px 4px 0; }

    /* USER PROFILE */
    .user-profile { margin-top: auto; padding-top: 20px; border-top: 1px solid rgba(255,255,255,0.1); display: flex; gap: 12px; align-items: center; }
    .avatar { width: 36px; height: 36px; background: #1a2530; border-radius: 50%; display: grid; place-items: center; font-size: 12px; font-weight: bold; }
    .user-info { display: flex; flex-direction: column; }
    .user-info .name { font-size: 12px; font-weight: bold; }
    .user-info .role { font-size: 10px; color: #6f8fa3; }

    /* VIEWPORT & CONTENT */
    .viewport { flex: 1; display: flex; flex-direction: column; overflow: hidden; position: relative; z-index: 10; width: 100%; }
    .content-grid { flex: 1; padding: 0 40px 40px 40px; overflow-y: auto; overflow-x: hidden; }

    /* TOP BAR */
    .top-bar { padding: 30px 40px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 20px; }
    .top-bar-left { display: flex; align-items: center; gap: 15px; }
    .menu-toggle { display: none; background: transparent; border: none; cursor: pointer; padding: 0; }
    .breadcrumbs .sector { font-size: 10px; color: #5f7e97; letter-spacing: 4px; font-weight: bold; }
    .page-title { font-size: 32px; font-weight: 800; color: white; margin: 5px 0 0 0; }

    .actions { display: flex; gap: 15px; align-items: center; }
    .search-bar { background: rgba(255,255,255,0.05); padding: 10px 16px; border-radius: 8px; display: flex; align-items: center; gap: 10px; border: 1px solid rgba(255,255,255,0.1); }
    .search-bar input { background: transparent; border: none; color: white; font-family: inherit; font-size: 12px; width: 150px; outline: none; }
    .optimize-btn { background: transparent; border: 1px solid var(--emerald); color: var(--emerald); padding: 10px 20px; border-radius: 8px; cursor: pointer; font-weight: bold; display: flex; align-items: center; gap: 10px; transition: 0.3s; font-size: 12px; white-space: nowrap; }
    .optimize-btn.active { background: var(--emerald); color: #000; box-shadow: 0 0 20px rgba(0,255,163,0.4); }

    /* DASHBOARD GRID */
    .dashboard-grid { 
      display: grid; gap: 24px; 
      grid-template-columns: 2fr 1fr; 
      grid-template-rows: 200px auto; 
      grid-template-areas: "status chart" "list list"; 
    }
    .card-status { grid-area: status; }
    .card-chart { grid-area: chart; }
    .card-list { grid-area: list; }

    /* CARD COMPONENTS */
    .card { background: var(--card); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 24px; backdrop-filter: blur(12px); position: relative; overflow: hidden; }
    .card.glow { box-shadow: 0 0 40px rgba(0, 255, 163, 0.05); border-color: rgba(0,255,163,0.2); }
    .card-shine { position: absolute; top: 0; left: 0; right: 0; height: 1px; background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent); }
    .header-label { color: var(--emerald); font-size: 11px; letter-spacing: 2px; margin: 0 0 15px 0; opacity: 0.8; }
    .stats-row { display: flex; gap: 40px; }
    .stat-label { font-size: 10px; color: #6f8fa3; margin-bottom: 5px; }
    .stat-value { font-size: 36px; font-weight: 800; line-height: 1; }
    .stat-unit { font-size: 14px; color: var(--emerald); font-weight: normal; margin-left: 5px; }
    .radar-container { width: 100px; height: 100px; border-radius: 50%; border: 1px solid rgba(255,255,255,0.1); position: relative; overflow: hidden; flex-shrink: 0; }
    .radar-sweep { position: absolute; inset: 0; background: conic-gradient(from 0deg, transparent 0deg, #ffab00 60deg, transparent 65deg); animation: spin 3s infinite linear; opacity: 0.5; }
    .radar-sweep.optimized { background: conic-gradient(from 0deg, transparent 0deg, var(--emerald) 60deg, transparent 65deg); }
    .status-content { display: flex; justify-content: space-between; align-items: flex-end; height: 100%; }

    /* LIST & MAP */
    .fleet-list { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 15px; }
    .fleet-item { display: flex; justify-content: space-between; align-items: center; padding: 12px; background: rgba(255,255,255,0.02); border-radius: 8px; border-left: 3px solid #ccc; }
    .fleet-id { display: flex; align-items: center; gap: 10px; font-size: 13px; font-weight: bold; }
    .status-tag { font-size: 10px; color: #6f8fa3; background: rgba(0,0,0,0.3); padding: 2px 6px; border-radius: 4px; }
    .ghost-map-container { height: 100%; min-height: 400px; width: 100%; }
    .map-overlay-top { position: absolute; top: 20px; left: 20px; z-index: 10; display: flex; gap: 8px; flex-wrap: wrap; }
    .map-pill { display: flex; align-items: center; gap: 6px; background: rgba(5,10,15,0.8); backdrop-filter: blur(4px); padding: 6px 12px; border-radius: 20px; font-size: 10px; border: 1px solid; color: #fff; font-weight: 600; }
    .map-pill .dot { width: 6px; height: 6px; border-radius: 50%; }
    .svg-wrapper { width: 100%; height: 100%; background: #080c10; }
    .mobile-close-btn { display: none; background: transparent; border: none; cursor: pointer; }

    @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
    ::-webkit-scrollbar { width: 6px; }
    ::-webkit-scrollbar-thumb { background: #1a2f38; border-radius: 3px; }

    /* --- RESPONSIVE MEDIA QUERIES --- */
    
    @media (max-width: 1024px) {
      .dashboard-grid {
        grid-template-columns: 1fr;
        grid-template-rows: auto;
        grid-template-areas: 
          "status"
          "chart"
          "list";
      }
      .ghost-map-container { height: 500px; }
    }

    @media (max-width: 768px) {
      .app-shell { flex-direction: column; }
      
      /* SIDEBAR DRAWER LOGIC */
      .sidebar {
        position: fixed; top: 0; left: 0; bottom: 0;
        width: 80%; max-width: 300px;
        transform: translateX(-100%);
        box-shadow: 10px 0 50px rgba(0,0,0,0.5);
      }
      .sidebar.open { transform: translateX(0); }
      .mobile-close-btn { display: block; }
      .mobile-overlay { position: fixed; inset: 0; background: rgba(0,0,0,0.8); z-index: 40; backdrop-filter: blur(2px); }

      /* TOP BAR ADJUSTMENTS */
      .menu-toggle { display: block; margin-right: 15px; }
      .top-bar { padding: 20px; }
      .page-title { font-size: 24px; }
      .search-bar { flex: 1; }
      .actions { width: 100%; justify-content: space-between; }
      .btn-text { display: none; } /* Hide text on small screens, keep icon */

      /* CONTENT ADJUSTMENTS */
      .content-grid { padding: 0 20px 20px 20px; }
      .stats-row { gap: 20px; }
      .stat-value { font-size: 28px; }
      .card { padding: 16px; }
    }
  `}</style>
);

export default EYatriApp;