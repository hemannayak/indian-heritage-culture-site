import { useState, useEffect } from 'react';
import { MapPin, Eye, X, Compass, Search, Shield, Clock, Car, Sparkles } from 'lucide-react';
import { statesData } from '../data/statesData';
import type { StateData } from '../data/statesData';

export default function InteractiveMap({ onSelectState }: { onSelectState?: (state: StateData) => void }) {
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [activeTab, setActiveTab] = useState<'cuisine' | 'monuments' | 'literature' | 'event'>('cuisine');
  const [selectedPanorama, setSelectedPanorama] = useState<{ name: string; url: string } | null>(null);

  // Search and Filter States
  const [searchTerm, setSearchTerm] = useState('');
  const [regionFilter, setRegionFilter] = useState<'All' | 'North' | 'South' | 'East' | 'West' | 'Central' | 'North-East'>('All');
  const [typeFilter, setTypeFilter] = useState<'All' | 'state' | 'ut'>('All');

  // Filter Logic
  const filteredStates = statesData.filter(state => {
    const matchesSearch = 
      state.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      state.capital.toLowerCase().includes(searchTerm.toLowerCase()) ||
      state.cuisine.some(c => c.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      state.monuments.some(m => m.name.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesRegion = regionFilter === 'All' || state.region === regionFilter;
    const matchesType = typeFilter === 'All' || state.type === typeFilter;

    return matchesSearch && matchesRegion && matchesType;
  });

  // Automatically select the first filtered state if none is selected
  useEffect(() => {
    if (filteredStates.length > 0 && (!selectedState || !filteredStates.find(s => s.id === selectedState.id))) {
      setSelectedState(filteredStates[0]);
    }
  }, [filteredStates, selectedState]);

  return (
    <div className="py-24 px-4 max-w-7xl mx-auto flex flex-col gap-6">
      {/* Title Header */}
      <div className="text-center lg:text-left mb-2">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 glow-text-saffron">Interactive Map of India</h1>
        <p className="text-gray-400 text-sm md:text-base">
          Filter and select destinations on the left to update the 3D map viewport and reveal local cultural statistics.
        </p>
      </div>

      {/* Main Three-Column Layout Grid */}
      <div className="map-layout-grid">
        
        {/* Column 1: Explorer Catalog Directory */}
        <div className="glass-panel p-5 border border-white/5 flex flex-col gap-4 card-cultural-border">
          <h3 className="text-lg font-bold text-white border-b border-white/5 pb-2">Destinations</h3>
          
          {/* Search Input */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search destinations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="glass-input pl-9 w-full text-xs"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            {searchTerm && (
              <button 
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white bg-transparent border-none cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Region Tabs (Pills) */}
          <div className="flex flex-col gap-1.5 pt-1">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Regions</span>
            <div className="flex flex-wrap gap-1">
              {(['All', 'North', 'South', 'East', 'West', 'Central', 'North-East'] as const).map((reg) => (
                <button
                  key={reg}
                  onClick={() => setRegionFilter(reg)}
                  className={`px-2 py-1 rounded text-[10px] font-semibold border transition cursor-pointer ${
                    regionFilter === reg 
                      ? 'bg-saffron border-saffron text-white shadow-sm' 
                      : 'bg-white/5 border-white/5 text-gray-400 hover:border-saffron/30 hover:text-white'
                  }`}
                >
                  {reg}
                </button>
              ))}
            </div>
          </div>

          {/* Category Type Filter */}
          <div className="flex gap-2 items-center pt-2 border-t border-white/5">
            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-wider">Type:</span>
            <button
              onClick={() => setTypeFilter('All')}
              className={`text-[9px] font-bold uppercase transition cursor-pointer bg-transparent border-none ${
                typeFilter === 'All' ? 'text-white' : 'text-gray-500 hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setTypeFilter('state')}
              className={`text-[9px] font-bold uppercase transition cursor-pointer bg-transparent border-none ${
                typeFilter === 'state' ? 'text-saffron' : 'text-gray-500 hover:text-white'
              }`}
            >
              States
            </button>
            <button
              onClick={() => setTypeFilter('ut')}
              className={`text-[9px] font-bold uppercase transition cursor-pointer bg-transparent border-none ${
                typeFilter === 'ut' ? 'text-green' : 'text-gray-500 hover:text-white'
              }`}
            >
              UTs
            </button>
          </div>

          {/* Catalog Scrollable Cards */}
          <div className="catalog-list">
            {filteredStates.map((state) => (
              <button
                key={state.id}
                onClick={() => { setSelectedState(state); setActiveTab('cuisine'); }}
                className={`catalog-card flex items-center justify-between border ${
                  selectedState?.id === state.id ? 'active' : ''
                }`}
              >
                <div>
                  <h4 className="text-xs font-black text-white">{state.name}</h4>
                  <span className="text-[9px] text-gray-500 block mt-0.5">Capital: {state.capital}</span>
                </div>
                <span className={`px-2 py-0.5 rounded text-[8px] font-bold uppercase tracking-wider ${
                  state.type === 'ut' ? 'bg-green/10 text-green border border-green/20' : 'bg-saffron/10 text-saffron border border-saffron/20'
                }`}>
                  {state.type}
                </span>
              </button>
            ))}
            {filteredStates.length === 0 && (
              <p className="text-center text-xs text-gray-500 py-12">No matches found.</p>
            )}
          </div>
        </div>

        {/* Column 2: 3D Map Board */}
        <div className="map-perspective-container flex items-center justify-center py-6">
          <div className="map-board-3d relative aspect-[4/5] bg-black/30 border border-border-glass max-w-[420px] w-full p-4 flex items-center justify-center">
            <img 
              src="/assets/India.png" 
              alt="India Map" 
              className="w-full h-auto max-h-full object-contain opacity-80 select-none"
            />

            {/* Pulsing circular marker ONLY for selected state to completely resolve overlapping pins! */}
            {selectedState && (
              <div
                style={{ 
                  left: selectedState.left, 
                  top: selectedState.top 
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group z-35 animate-float-marker"
              >
                {/* Borderless pulsing circle node */}
                <div className="map-marker-node"></div>
                
                {/* Floating label tag */}
                <span className="mt-1 px-2.5 py-0.5 rounded bg-saffron text-white text-[9px] font-black shadow-lg shadow-saffron/30 select-none transform translate-y-1">
                  {selectedState.name}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Column 3: Details Card Panel */}
        <div className="w-full glass-panel p-5 flex flex-col min-h-[500px] border border-white/5 card-cultural-border">
          {selectedState ? (
            <div className="flex flex-col h-full animate-fade-in gap-4">
              {/* Card Header */}
              <div className="border-b border-white/5 pb-3">
                <h2 className="text-xl font-extrabold text-white flex items-center gap-1.5">
                  <MapPin className="w-5 h-5 text-saffron" />
                  {selectedState.name}
                </h2>
                <span className="text-[10px] text-gray-500 uppercase font-bold tracking-wider mt-0.5 block">
                  Region: {selectedState.region} • {selectedState.type.toUpperCase()}
                </span>
              </div>

              {/* Redesigned Travel Scorecard (Unified, aligned table style) */}
              <div className="p-3.5 bg-white/5 border border-white/5 rounded-2xl space-y-2 text-[10px]">
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 font-bold uppercase flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-green" />
                    Safety Rating
                  </span>
                  <span className="font-extrabold text-green bg-green/10 px-2 py-0.5 rounded border border-green/20">9.6 / 10</span>
                </div>
                <div className="flex justify-between items-center pt-1.5 border-t border-white/5">
                  <span className="text-gray-500 font-bold uppercase flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gold" />
                    Best Hours to Visit
                  </span>
                  <span className="font-bold text-gray-300">06:00 AM - 09:30 AM</span>
                </div>
                <div className="flex justify-between items-center pt-1.5 border-t border-white/5">
                  <span className="text-gray-500 font-bold uppercase flex items-center gap-1">
                    <Car className="w-3.5 h-3.5 text-saffron" />
                    Local Transport
                  </span>
                  <span className="font-bold text-gray-300">Cabs / Metro</span>
                </div>
              </div>

              {/* Panel Tabs */}
              <div className="grid grid-cols-4 gap-1 bg-white/5 p-1 rounded-lg text-[10px] font-bold">
                <button
                  onClick={() => setActiveTab('cuisine')}
                  className={`py-2 rounded-md transition cursor-pointer border-none bg-transparent ${activeTab === 'cuisine' ? 'bg-saffron text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
                >
                  Cuisine
                </button>
                <button
                  onClick={() => setActiveTab('monuments')}
                  className={`py-2 rounded-md transition cursor-pointer border-none bg-transparent ${activeTab === 'monuments' ? 'bg-saffron text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
                >
                  Sites
                </button>
                <button
                  onClick={() => setActiveTab('literature')}
                  className={`py-2 rounded-md transition cursor-pointer border-none bg-transparent ${activeTab === 'literature' ? 'bg-saffron text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
                >
                  Writing
                </button>
                <button
                  onClick={() => setActiveTab('event')}
                  className={`py-2 rounded-md transition cursor-pointer border-none bg-transparent ${activeTab === 'event' ? 'bg-saffron text-white shadow-sm' : 'text-gray-400 hover:text-white'}`}
                >
                  Events
                </button>
              </div>

              {/* Tab Contents */}
              <div className="flex-grow overflow-y-auto max-h-[300px] pr-1 scrollbar-none">
                {activeTab === 'cuisine' && (
                  <div className="space-y-4">
                    {selectedState.cuisine.map((item, i) => (
                      <div key={i} className="flex gap-3 items-start p-2 rounded-xl bg-white/5 border border-white/5">
                        <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-lg border border-white/10 flex-shrink-0" />
                        <div>
                          <h4 className="font-bold text-white text-xs mb-0.5">{item.name}</h4>
                          <p className="text-[10px] text-gray-400 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    ))}
                    {selectedState.cuisine.length === 0 && (
                      <p className="text-center text-xs text-gray-500 py-8">Cuisine details coming soon.</p>
                    )}
                  </div>
                )}

                {activeTab === 'monuments' && (
                  <div className="space-y-3">
                    {selectedState.monuments.map((site, i) => (
                      <a 
                        key={i} 
                        href={site.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex gap-3 items-center p-2 rounded-xl border border-white/5 bg-white/5 hover:border-saffron/30 hover:bg-white/10 transition text-[10px] text-gray-300 font-semibold"
                        style={{ textDecoration: 'none' }}
                      >
                        <img src={site.image} alt={site.name} className="w-10 h-10 object-cover rounded-lg border border-white/10 flex-shrink-0" />
                        <div>
                          <p className="font-bold text-white leading-tight">{site.name}</p>
                          <p className="text-[9px] text-gray-400 mt-0.5 line-clamp-1">{site.description}</p>
                        </div>
                      </a>
                    ))}

                    {/* Virtual 3D Street View */}
                    {selectedState.panoramas.length > 0 && (
                      <div className="pt-3 border-t border-white/5 mt-3">
                        {selectedState.panoramas.map((pano, i) => (
                          <button
                            key={i}
                            onClick={() => setSelectedPanorama(pano)}
                            className="w-full flex items-center justify-between p-2.5 rounded-xl border border-saffron/20 bg-saffron/5 hover:bg-saffron/10 transition text-left text-[10px] text-saffron font-bold cursor-pointer"
                          >
                            <span>{pano.name}</span>
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {activeTab === 'literature' && (
                  <div className="space-y-3 text-[11px] leading-relaxed">
                    <p className="text-gray-300 font-medium">{selectedState.history}</p>
                    {selectedState.literature.map((lit, i) => (
                      <div key={i} className="p-3 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-[9px] text-saffron font-bold uppercase tracking-wider block mb-1">{lit.lang}</span>
                        <p className="text-[10px] text-gray-400">{lit.desc}</p>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'event' && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-bold text-white text-xs mb-1">
                        {selectedState.event.name}
                      </h4>
                      <p className="text-[10px] text-gray-400 leading-relaxed">{selectedState.event.description}</p>
                      <CountdownTimer targetDate={selectedState.event.date} />
                    </div>
                    <a
                      href={selectedState.event.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-premium w-full justify-center text-[10px] py-2.5"
                      style={{ textDecoration: 'none' }}
                    >
                      Official Link
                    </a>
                  </div>
                )}
              </div>
              {/* Explore Cinematic Profile Button */}
              {onSelectState && (
                <button
                  onClick={() => onSelectState(selectedState)}
                  className="btn-premium w-full justify-center text-xs py-2.5 flex items-center gap-1.5 cursor-pointer mt-2"
                >
                  <Sparkles className="w-3.5 h-3.5 text-gold spin-slow" />
                  Explore Cinematic Profile
                </button>
              )}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-center flex-grow text-gray-500 py-12">
              <Compass className="w-16 h-16 mb-4 text-gray-600 animate-pulse" />
              <p className="text-xs">Select a state on the left to display its cultural statistics.</p>
            </div>
          )}
        </div>

      </div>

      {/* Immersive Panorama Modal */}
      {selectedPanorama && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="w-full max-w-5xl h-[80vh] flex flex-col bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="flex justify-between items-center bg-black/45 px-6 py-4 border-b border-white/10">
              <h3 className="text-lg font-bold text-white">{selectedPanorama.name}</h3>
              <button 
                onClick={() => setSelectedPanorama(null)}
                className="p-1 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition bg-transparent border-none cursor-pointer"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <iframe 
              src={selectedPanorama.url} 
              className="flex-1 w-full border-none" 
              allowFullScreen 
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
}

/* Countdown Timer Component */
function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const difference = +new Date(targetDate) - +new Date();
      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-2 text-center my-4">
      <div className="bg-white/5 p-2 rounded-xl border border-white/5">
        <div className="text-xl font-black text-white">{timeLeft.days}</div>
        <div className="text-[8px] text-gray-500 uppercase font-bold tracking-wider">Days</div>
      </div>
      <div className="bg-white/5 p-2 rounded-xl border border-white/5">
        <div className="text-xl font-black text-white">{timeLeft.hours}</div>
        <div className="text-[8px] text-gray-500 uppercase font-bold tracking-wider">Hours</div>
      </div>
      <div className="bg-white/5 p-2 rounded-xl border border-white/5">
        <div className="text-xl font-black text-white">{timeLeft.minutes}</div>
        <div className="text-[8px] text-gray-500 uppercase font-bold tracking-wider">Mins</div>
      </div>
      <div className="bg-white/5 p-2 rounded-xl border border-white/5">
        <div className="text-xl font-black text-white">{timeLeft.seconds}</div>
        <div className="text-[8px] text-gray-500 uppercase font-bold tracking-wider">Secs</div>
      </div>
    </div>
  );
}
