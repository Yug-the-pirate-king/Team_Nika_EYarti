import React, { useState } from 'react';

// EYatri - Mumbai Resilience Commuter App
// Design System: "Calm in Chaos"

const EYatriApp = () => {
  const [activeModule, setActiveModule] = useState('dashboard');
  const [isOffline, setIsOffline] = useState(false);
  const [privacyMode, setPrivacyMode] = useState(true);

  return (
    <div className="app-container">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          background: #f5f5f5;
        }

        .app-container {
          max-width: 414px;
          margin: 0 auto;
          background: white;
          min-height: 100vh;
          box-shadow: 0 0 20px rgba(0,0,0,0.1);
        }

        /* Design System Colors */
        :root {
          --deep-teal: #006064;
          --electric-indigo: #536DFE;
          --emerald-green: #00C853;
          --amber: #FFAB00;
          --slate-grey: #78909C;
          --burnt-orange: #BF360C;
        }

        /* Header */
        .header {
          background: var(--deep-teal);
          color: white;
          padding: 20px;
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header h1 {
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .header .subtitle {
          font-size: 14px;
          opacity: 0.9;
        }

        /* Navigation Tabs */
        .nav-tabs {
          display: flex;
          background: #f8f8f8;
          border-bottom: 2px solid #e0e0e0;
          overflow-x: auto;
        }

        .nav-tab {
          flex: 1;
          padding: 16px 12px;
          background: none;
          border: none;
          font-size: 13px;
          font-weight: 500;
          color: #666;
          cursor: pointer;
          transition: all 0.3s;
          white-space: nowrap;
        }

        .nav-tab.active {
          color: var(--deep-teal);
          border-bottom: 3px solid var(--deep-teal);
          background: white;
        }

        /* MODULE 1: Smart Linked Dashboard */
        .trip-card {
          margin: 20px;
          background: white;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          overflow: hidden;
        }

        .trip-section {
          padding: 20px;
          position: relative;
        }

        .trip-section.rickshaw {
          background: linear-gradient(135deg, #fff9e6 0%, #ffffff 100%);
          border-left: 4px solid var(--amber);
        }

        .trip-section.train {
          background: linear-gradient(135deg, #e6f7ff 0%, #ffffff 100%);
          border-left: 4px solid var(--deep-teal);
        }

        .mode-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .mode-icon {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          background: white;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .mode-info h3 {
          font-size: 18px;
          font-weight: 600;
          color: #333;
        }

        .mode-status {
          font-size: 14px;
          color: var(--amber);
          font-weight: 500;
          margin-top: 4px;
        }

        .eta-large {
          font-size: 32px;
          font-weight: 900;
          color: var(--deep-teal);
          margin: 12px 0;
        }

        .connection-line {
          position: relative;
          height: 40px;
          background: linear-gradient(to bottom, #fff9e6 0%, #e6f7ff 100%);
        }

        .connection-line::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, 
            var(--amber) 0%, 
            var(--amber) 45%, 
            transparent 45%, 
            transparent 55%, 
            var(--deep-teal) 55%, 
            var(--deep-teal) 100%
          );
          background-size: 3px 8px;
          transform: translateX(-50%);
        }

        .connection-line::after {
          content: '⬇';
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          background: white;
          padding: 4px 8px;
          border-radius: 4px;
          font-size: 16px;
          color: var(--slate-grey);
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .knock-on-alert {
          background: #fff3e0;
          border: 1px solid var(--amber);
          border-radius: 8px;
          padding: 12px;
          margin-top: 12px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .knock-on-alert .icon {
          font-size: 20px;
        }

        .knock-on-text {
          flex: 1;
          font-size: 14px;
          color: #666;
        }

        .time-change {
          text-decoration: line-through;
          color: #999;
          margin-right: 8px;
        }

        .risk-text {
          color: var(--burnt-orange);
          font-weight: 600;
        }

        .fab {
          position: fixed;
          bottom: 24px;
          right: 24px;
          background: var(--electric-indigo);
          color: white;
          border: none;
          padding: 16px 24px;
          border-radius: 28px;
          font-size: 16px;
          font-weight: 600;
          box-shadow: 0 4px 12px rgba(83, 109, 254, 0.4);
          cursor: pointer;
          transition: all 0.3s;
          z-index: 50;
        }

        .fab:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(83, 109, 254, 0.5);
        }

        /* MODULE 2: Trust Score Component */
        .trust-score-card {
          margin: 20px;
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }

        .arrival-module {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .eta-display {
          flex: 1;
        }

        .eta-time {
          font-size: 32px;
          font-weight: bold;
          color: var(--deep-teal);
          line-height: 1;
        }

        .eta-label {
          font-size: 14px;
          color: #666;
          margin-top: 4px;
        }

        .trust-badge {
          position: relative;
          width: 80px;
          height: 80px;
        }

        .trust-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .trust-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .trust-percentage {
          font-size: 20px;
          font-weight: bold;
          color: var(--amber);
        }

        .trust-label {
          font-size: 12px;
          font-weight: 500;
          color: var(--slate-grey);
        }

        .why-context {
          background: #f5f5f5;
          border-radius: 8px;
          padding: 12px;
          font-size: 12px;
          color: var(--slate-grey);
          line-height: 1.5;
        }

        .why-context strong {
          color: #333;
        }

        .data-sources {
          display: flex;
          gap: 8px;
          margin-top: 8px;
          flex-wrap: wrap;
        }

        .data-tag {
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 4px;
          padding: 4px 8px;
          font-size: 11px;
          color: #666;
        }

        /* MODULE 3: Ghost Mode */
        .map-view {
          position: relative;
          height: 500px;
          background: #e0e0e0;
          margin: 20px;
          border-radius: 12px;
          overflow: hidden;
        }

        .map-view.offline {
          filter: grayscale(1);
        }

        .map-canvas {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #c8d6e5 0%, #8395a7 100%);
          position: relative;
        }

        .offline-banner {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          background: var(--slate-grey);
          color: white;
          padding: 12px 16px;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 10;
        }

        .location-dot {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 20px;
          height: 20px;
          background: #2196F3;
          border-radius: 50%;
          box-shadow: 0 0 0 8px rgba(33, 150, 243, 0.3);
        }

        .location-dot.ghost {
          background: transparent;
          border: 3px solid rgba(33, 150, 243, 0.5);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(33, 150, 243, 0.4);
          }
          50% {
            box-shadow: 0 0 0 16px rgba(33, 150, 243, 0);
          }
        }

        .route-path {
          position: absolute;
          top: 30%;
          left: 20%;
          right: 20%;
          height: 4px;
          background: var(--deep-teal);
        }

        .route-path.dotted {
          background: repeating-linear-gradient(
            to right,
            var(--deep-teal),
            var(--deep-teal) 10px,
            transparent 10px,
            transparent 20px
          );
        }

        .mode-toggle {
          position: absolute;
          bottom: 20px;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border: none;
          padding: 12px 24px;
          border-radius: 24px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          cursor: pointer;
          font-weight: 600;
          font-size: 14px;
        }

        /* MODULE 4: Heat Map */
        .heatmap-container {
          padding: 20px;
          background: #1a1a1a;
          min-height: calc(100vh - 120px);
        }

        .heatmap-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
          color: white;
        }

        .heatmap-title {
          font-size: 20px;
          font-weight: bold;
        }

        .privacy-toggle {
          display: flex;
          align-items: center;
          gap: 12px;
          background: rgba(255,255,255,0.1);
          padding: 8px 16px;
          border-radius: 20px;
        }

        .toggle-label {
          font-size: 14px;
          font-weight: 500;
        }

        .toggle-switch {
          position: relative;
          width: 48px;
          height: 24px;
          background: var(--emerald-green);
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.3s;
        }

        .toggle-switch::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          transition: transform 0.3s;
          transform: translateX(24px);
        }

        .heatmap-canvas {
          background: #2a2a2a;
          border-radius: 12px;
          height: 500px;
          position: relative;
          overflow: hidden;
        }

        .heat-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(30px);
          opacity: 0.7;
          animation: float 4s ease-in-out infinite;
        }

        .heat-blob.high {
          background: radial-gradient(circle, #ff0000 0%, #ff6600 50%, #ffaa00 100%);
        }

        .heat-blob.medium {
          background: radial-gradient(circle, #ff6600 0%, #ffaa00 50%, #ffdd00 100%);
        }

        .heat-blob.low {
          background: radial-gradient(circle, #ffaa00 0%, #ffdd00 50%, #ffff00 100%);
        }

        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        .data-source-tag {
          position: absolute;
          background: rgba(0,0,0,0.7);
          color: white;
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 11px;
          font-weight: 500;
          backdrop-filter: blur(4px);
        }

        .legend {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
          padding: 16px;
          background: rgba(255,255,255,0.05);
          border-radius: 8px;
        }

        .legend-item {
          text-align: center;
          color: white;
        }

        .legend-color {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          margin: 0 auto 8px;
        }

        .legend-label {
          font-size: 12px;
          font-weight: 500;
        }
      `}</style>

      <div className="header">
        <h1>EYatri</h1>
        <div className="subtitle">Mumbai Resilience Navigator</div>
      </div>

      <div className="nav-tabs">
        <button 
          className={`nav-tab ${activeModule === 'dashboard' ? 'active' : ''}`}
          onClick={() => setActiveModule('dashboard')}
        >
          Smart Link
        </button>
        <button 
          className={`nav-tab ${activeModule === 'trust' ? 'active' : ''}`}
          onClick={() => setActiveModule('trust')}
        >
          Trust Score
        </button>
        <button 
          className={`nav-tab ${activeModule === 'ghost' ? 'active' : ''}`}
          onClick={() => setActiveModule('ghost')}
        >
          Navigation
        </button>
        <button 
          className={`nav-tab ${activeModule === 'heatmap' ? 'active' : ''}`}
          onClick={() => setActiveModule('heatmap')}
        >
          Heat Map
        </button>
      </div>

      {/* MODULE 1: Smart Linked Dashboard */}
      {activeModule === 'dashboard' && (
        <div>
          <div className="trip-card">
            <div className="trip-section rickshaw">
              <div className="mode-header">
                <div className="mode-icon">🛺</div>
                <div className="mode-info">
                  <h3>Auto Rickshaw</h3>
                  <div className="mode-status">⚠️ Delayed by 5 mins</div>
                </div>
              </div>
              <div className="eta-large">8:55 AM</div>
              <div style={{fontSize: '14px', color: '#666'}}>
                Arriving at Andheri Station
              </div>
              <div className="knock-on-alert">
                <span className="icon">⏱️</span>
                <div className="knock-on-text">
                  Traffic on Western Express Highway
                </div>
              </div>
            </div>

            <div className="connection-line"></div>

            <div className="trip-section train">
              <div className="mode-header">
                <div className="mode-icon">🚆</div>
                <div className="mode-info">
                  <h3>Local Train</h3>
                  <div className="mode-status" style={{color: 'var(--burnt-orange)'}}>
                    Connection Status Changed
                  </div>
                </div>
              </div>
              <div className="eta-large">
                <span className="time-change">9:05 AM</span>
                <span style={{color: 'var(--burnt-orange)', fontSize: '18px', fontWeight: '600'}}>
                  Risk of Missing
                </span>
              </div>
              <div style={{fontSize: '14px', color: '#666'}}>
                Western Line to Churchgate
              </div>
              <div className="knock-on-alert">
                <span className="icon">💡</span>
                <div className="knock-on-text">
                  <strong>Next train:</strong> 9:20 AM (15 min wait)
                </div>
              </div>
            </div>
          </div>

          <button className="fab">🚇 Switch to Metro</button>
        </div>
      )}

      {/* MODULE 2: Trust Score */}
      {activeModule === 'trust' && (
        <div className="trust-score-card">
          <div className="arrival-module">
            <div className="eta-display">
              <div className="eta-time">10:15 AM</div>
              <div className="eta-label">Estimated Arrival</div>
            </div>
            <div className="trust-badge">
              <svg className="trust-ring" viewBox="0 0 80 80">
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  fill="none"
                  stroke="#f0f0f0"
                  strokeWidth="8"
                />
                <circle
                  cx="40"
                  cy="40"
                  r="35"
                  fill="none"
                  stroke="#FFAB00"
                  strokeWidth="8"
                  strokeDasharray="220"
                  strokeDashoffset="88"
                  strokeLinecap="round"
                  transform="rotate(-90 40 40)"
                />
              </svg>
              <div className="trust-content">
                <div className="trust-percentage">60%</div>
                <div className="trust-label">Reliable</div>
              </div>
            </div>
          </div>

          <div className="why-context">
            <strong>Confidence Factors:</strong><br/>
            Medium reliability due to mixed data sources and current network conditions.
            
            <div className="data-sources">
              <div className="data-tag">📱 Twitter Updates</div>
              <div className="data-tag">📊 Historical Pattern</div>
              <div className="data-tag">⚠️ GPS Signal Weak</div>
            </div>
          </div>

          <div style={{marginTop: '20px', padding: '16px', background: '#f9f9f9', borderRadius: '8px', borderLeft: '4px solid var(--amber)'}}>
            <div style={{fontSize: '14px', fontWeight: '600', marginBottom: '8px', color: '#333'}}>
              Why 60%?
            </div>
            <div style={{fontSize: '13px', color: '#666', lineHeight: '1.6'}}>
              We're combining real-time social media reports with your typical commute patterns. 
              GPS tracking is currently limited in this area, so we're relying more on predictive models.
            </div>
          </div>
        </div>
      )}

      {/* MODULE 3: Ghost Mode */}
      {activeModule === 'ghost' && (
        <div>
          <div className={`map-view ${isOffline ? 'offline' : ''}`}>
            {isOffline && (
              <div className="offline-banner">
                <span>📡</span>
                Signal Lost. Simulating progress based on history.
              </div>
            )}
            <div className="map-canvas">
              <div className={`route-path ${isOffline ? 'dotted' : ''}`}></div>
              <div className={`location-dot ${isOffline ? 'ghost' : ''}`}></div>
              
              {!isOffline && (
                <div style={{position: 'absolute', top: '20px', left: '20px', background: 'white', padding: '12px', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)'}}>
                  <div style={{fontSize: '12px', color: '#666'}}>Current Speed</div>
                  <div style={{fontSize: '24px', fontWeight: 'bold', color: 'var(--deep-teal)'}}>45 km/h</div>
                </div>
              )}
              
              {isOffline && (
                <div style={{position: 'absolute', top: '80px', left: '20px', background: 'rgba(120, 144, 156, 0.9)', color: 'white', padding: '12px', borderRadius: '8px', maxWidth: '200px'}}>
                  <div style={{fontSize: '12px', marginBottom: '4px'}}>Estimated Position</div>
                  <div style={{fontSize: '11px', opacity: '0.9'}}>Based on average tunnel transit time</div>
                </div>
              )}
            </div>
            
            <button 
              className="mode-toggle"
              onClick={() => setIsOffline(!isOffline)}
            >
              {isOffline ? '📡 Simulate Online Mode' : '🚇 Simulate Tunnel (Offline)'}
            </button>
          </div>
        </div>
      )}

      {/* MODULE 4: Heat Map */}
      {activeModule === 'heatmap' && (
        <div className="heatmap-container">
          <div className="heatmap-header">
            <div className="heatmap-title">Mumbai Congestion Map</div>
            <div className="privacy-toggle">
              <span className="toggle-label">Anonymization: ON</span>
              <div className="toggle-switch"></div>
            </div>
          </div>

          <div className="heatmap-canvas">
            <div className="heat-blob high" style={{
              width: '180px',
              height: '180px',
              top: '120px',
              left: '60px'
            }}></div>
            
            <div className="heat-blob medium" style={{
              width: '140px',
              height: '140px',
              top: '280px',
              left: '180px',
              animationDelay: '1s'
            }}></div>
            
            <div className="heat-blob low" style={{
              width: '100px',
              height: '100px',
              top: '80px',
              right: '80px',
              animationDelay: '2s'
            }}></div>

            <div className="data-source-tag" style={{top: '130px', left: '90px'}}>
              Source: 500+ Tweets
            </div>
            
            <div className="data-source-tag" style={{top: '290px', left: '200px'}}>
              Source: TomTom Data
            </div>
            
            <div className="data-source-tag" style={{top: '90px', right: '90px'}}>
              Source: Historical Pattern
            </div>
          </div>

          <div className="legend">
            <div className="legend-item">
              <div className="legend-color" style={{background: 'radial-gradient(circle, #ff0000 0%, #ff6600 100%)'}}></div>
              <div className="legend-label">Severe</div>
              <div style={{fontSize: '11px', opacity: '0.7'}}>20+ min delay</div>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{background: 'radial-gradient(circle, #ff6600 0%, #ffaa00 100%)'}}></div>
              <div className="legend-label">Moderate</div>
              <div style={{fontSize: '11px', opacity: '0.7'}}>10-20 min delay</div>
            </div>
            <div className="legend-item">
              <div className="legend-color" style={{background: 'radial-gradient(circle, #ffaa00 0%, #ffdd00 100%)'}}></div>
              <div className="legend-label">Light</div>
              <div style={{fontSize: '11px', opacity: '0.7'}}>5-10 min delay</div>
            </div>
          </div>

          <div style={{marginTop: '20px', padding: '16px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px', color: 'white'}}>
            <div style={{fontSize: '13px', fontWeight: '600', marginBottom: '8px'}}>
              🔒 Privacy-First Design
            </div>
            <div style={{fontSize: '12px', opacity: '0.8', lineHeight: '1.5'}}>
              This heat map uses aggregated, anonymized data from 10,000+ commuters. 
              Individual locations are never tracked or stored. Data shown represents 
              density patterns, not individual users.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EYatriApp;
