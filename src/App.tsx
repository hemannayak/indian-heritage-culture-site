import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Volume2, VolumeX, Sparkles, UserCheck, ChevronDown } from 'lucide-react';
import Home from './components/Home';
import Heritage from './components/Heritage';
import InteractiveMap from './components/InteractiveMap';
import Blog from './components/Blog';
import Login from './components/Login';
import GuidePortal from './components/GuidePortal';
import StateDetails from './components/StateDetails';
import { statesData } from './data/statesData';
import type { StateData } from './data/statesData';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedState, setSelectedState] = useState<StateData | null>(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [hoveredState, setHoveredState] = useState<StateData | null>(null);
  const [showMobileDestinations, setShowMobileDestinations] = useState(false);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.4);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Authentication State
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [userRole, setUserRole] = useState('');

  // Group states by region
  const regions: Record<string, StateData[]> = {
    'North': statesData.filter(s => s.region === 'North'),
    'South': statesData.filter(s => s.region === 'South'),
    'East': statesData.filter(s => s.region === 'East'),
    'West': statesData.filter(s => s.region === 'West'),
    'Central': statesData.filter(s => s.region === 'Central'),
    'North-East': statesData.filter(s => s.region === 'North-East'),
  };

  // Spotlight States
  const featuredState = statesData.find(s => s.id === 'himachal-pradesh') || statesData[0];
  const trendingState = statesData.find(s => s.id === 'meghalaya') || statesData[1] || statesData[0];
  const newState = statesData.find(s => s.id === 'goa') || statesData.find(s => s.id === 'puducherry') || statesData[2] || statesData[0];

  const previewState = hoveredState || featuredState || statesData[0];

  // Scroll Listener for Sticky Nav
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Audio Play Toggle Handler
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log("Audio play deferred by browser policy", err));
    }
    setIsPlaying(!isPlaying);
  };

  // Adjust volume
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  // Build navigation items dynamically based on auth status
  const navItems = [
    { id: 'destinations', label: 'Destinations' },
    { id: 'heritage', label: 'Experiences' },
    { id: 'map', label: 'Plan Your Trip' },
    { id: 'blog', label: 'Community Blog' },
    ...(isLoggedIn && userRole === 'guide' ? [{ id: 'guide-portal', label: 'Guide Portal' }] : []),
    { id: 'login', label: isLoggedIn ? 'Logout' : 'Login' }
  ];

  const handleTabClick = (tabId: string) => {
    if (tabId === 'login' && isLoggedIn) {
      // Perform simulated logout
      setIsLoggedIn(false);
      setUserEmail('');
      setUserRole('');
      setActiveTab('home');
      setSelectedState(null);
    } else {
      setActiveTab(tabId);
      setSelectedState(null);
      setIsMegaMenuOpen(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hidden Audio Element for ambient Sitar/Flute music */}
      <audio 
        ref={audioRef} 
        loop 
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" // Royalty-free ambient fallback track
      />

      {/* Navigation Bar */}
      <nav 
        className={`nav-bar fixed top-0 left-0 right-0 z-40 py-6 px-4 md:px-8 ${isScrolled ? 'scrolled' : ''}`}
        onMouseLeave={() => setIsMegaMenuOpen(false)}
      >
        <div className="tricolor-nav-accent" />
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button 
            onClick={() => {
              setActiveTab('home');
              setSelectedState(null);
              setIsMegaMenuOpen(false);
            }}
            onMouseEnter={() => setIsMegaMenuOpen(false)}
            className="flex items-center gap-2.5 focus:outline-none bg-transparent border-none cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center border border-saffron/30">
              <Sparkles className="w-6 h-6 text-saffron spin-slow" />
            </div>
            <span className="text-xl md:text-2xl font-black tracking-widest text-white uppercase">
              Incredible<span className="text-saffron">!</span>ndia
            </span>
          </button>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              if (item.id === 'destinations') {
                return (
                  <button
                    key={item.id}
                    onMouseEnter={() => {
                      setIsMegaMenuOpen(true);
                      setHoveredState(null); // default preview state on first hover
                    }}
                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                    className={`relative py-1 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 focus:outline-none bg-transparent border-none cursor-pointer flex items-center gap-1 ${
                      activeTab === 'state-details' || isMegaMenuOpen ? 'text-saffron' : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isMegaMenuOpen ? 'rotate-180 text-saffron' : ''}`} />
                    {(activeTab === 'state-details' || isMegaMenuOpen) && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-saffron to-gold rounded-full" />
                    )}
                  </button>
                );
              }
              return (
                <button
                  key={item.id}
                  onMouseEnter={() => setIsMegaMenuOpen(false)}
                  onClick={() => handleTabClick(item.id)}
                  className={`relative py-1 text-sm font-semibold tracking-wider uppercase transition-colors duration-300 focus:outline-none bg-transparent border-none cursor-pointer ${
                    activeTab === item.id ? 'text-saffron' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {activeTab === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-saffron to-gold rounded-full" />
                  )}
                </button>
              );
            })}
          </div>

          {/* User Status indicator for guides */}
          {isLoggedIn && (
            <div className="hidden lg:flex items-center gap-2 text-xs font-bold text-green bg-green/10 border border-green/20 px-3 py-1 rounded-full">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Guide Active: {userEmail}</span>
            </div>
          )}

          {/* Burger Menu Button (Mobile) */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-white/5 text-white focus:outline-none bg-transparent border-none cursor-pointer"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Stripe-Style Visual Mega Menu overlay */}
        {isMegaMenuOpen && (
          <div 
            className="mega-menu-overlay"
            onMouseEnter={() => setIsMegaMenuOpen(true)}
            onMouseLeave={() => setIsMegaMenuOpen(false)}
          >
            <div className="max-w-7xl mx-auto py-8 px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 text-left">
              {/* Left Explorer columns */}
              <div 
                className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-6"
                onMouseLeave={() => setHoveredState(null)}
              >
                {Object.entries(regions).map(([regionName, states]) => (
                  <div key={regionName} className="flex flex-col gap-2">
                    <h4 className="text-xs font-black uppercase tracking-wider text-saffron mb-1 pb-1 border-b border-white/5">
                      {regionName} Region
                    </h4>
                    <div className="flex flex-col gap-1 max-h-[160px] overflow-y-auto pr-1 scrollbar-none">
                      {states.map((st) => (
                        <button
                          key={st.id}
                          onMouseEnter={() => setHoveredState(st)}
                          onClick={() => {
                            setSelectedState(st);
                            setActiveTab('state-details');
                            setIsMegaMenuOpen(false);
                          }}
                          className="text-xs text-gray-400 hover:text-white transition duration-200 text-left bg-transparent border-none p-0 cursor-pointer flex items-center gap-1.5"
                        >
                          <span className="w-1 h-1 rounded-full bg-gold/50" />
                          <span>{st.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Spotlight Showcase Area */}
              <div className="lg:col-span-4 flex flex-col gap-6 border-l border-white/5 pl-8">
                <div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-saffron mb-3">
                    Spotlight Explorer
                  </h4>
                  <div className="flex flex-col gap-2.5">
                    {/* Featured State */}
                    {featuredState && (
                      <button
                        onMouseEnter={() => setHoveredState(featuredState)}
                        onClick={() => {
                          setSelectedState(featuredState);
                          setActiveTab('state-details');
                          setIsMegaMenuOpen(false);
                        }}
                        className="flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/10 hover:border-saffron/40 hover:bg-white/10 transition text-left cursor-pointer w-full"
                      >
                        <span className="text-base">🏔️</span>
                        <div>
                          <span className="text-[9px] font-black text-saffron uppercase tracking-widest block">Featured</span>
                          <span className="text-xs font-bold text-white block">{featuredState.name}</span>
                        </div>
                      </button>
                    )}

                    {/* Trending State */}
                    {trendingState && (
                      <button
                        onMouseEnter={() => setHoveredState(trendingState)}
                        onClick={() => {
                          setSelectedState(trendingState);
                          setActiveTab('state-details');
                          setIsMegaMenuOpen(false);
                        }}
                        className="flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/10 hover:border-saffron/40 hover:bg-white/10 transition text-left cursor-pointer w-full"
                      >
                        <span className="text-base">🔥</span>
                        <div>
                          <span className="text-[9px] font-black text-gold uppercase tracking-widest block animate-pulse">Trending</span>
                          <span className="text-xs font-bold text-white block">{trendingState.name}</span>
                        </div>
                      </button>
                    )}

                    {/* New State */}
                    {newState && (
                      <button
                        onMouseEnter={() => setHoveredState(newState)}
                        onClick={() => {
                          setSelectedState(newState);
                          setActiveTab('state-details');
                          setIsMegaMenuOpen(false);
                        }}
                        className="flex items-center gap-3 p-2 rounded-xl bg-white/5 border border-white/10 hover:border-saffron/40 hover:bg-white/10 transition text-left cursor-pointer w-full"
                      >
                        <span className="text-base">✨</span>
                        <div>
                          <span className="text-[9px] font-black text-green uppercase tracking-widest block">New</span>
                          <span className="text-xs font-bold text-white block">{newState.name}</span>
                        </div>
                      </button>
                    )}
                  </div>
                </div>

                {/* Live Preview Panel */}
                {previewState && (
                  <div className="mega-menu-card relative overflow-hidden aspect-[16/10] flex flex-col justify-end p-4 border border-white/10 rounded-2xl group w-full">
                    <img 
                      src={
                        previewState.monuments[0]?.image || 
                        previewState.cuisine[0]?.image || 
                        "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop"
                      } 
                      alt={previewState.name} 
                      className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 z-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-10" />
                    <div className="relative z-20">
                      <span className="text-[8px] font-bold text-saffron uppercase tracking-widest">{previewState.region} Region</span>
                      <h5 className="text-sm font-black text-white">{previewState.name}</h5>
                      <p className="text-[10px] text-gray-300 mt-1 line-clamp-2 leading-relaxed">{previewState.quickFacts.fact}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Nav Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-35 bg-black/95 backdrop-blur-md flex flex-col justify-start items-center gap-6 p-6 md:hidden overflow-y-auto pt-28">
          {navItems.map((item) => (
            <div key={item.id} className="text-center w-full">
              {item.id === 'destinations' ? (
                <div>
                  <button
                    onClick={() => setShowMobileDestinations(!showMobileDestinations)}
                    className="text-2xl font-bold uppercase tracking-widest transition text-gray-400 hover:text-white bg-transparent border-none cursor-pointer flex items-center justify-center gap-2 mx-auto"
                  >
                    <span>{item.label}</span>
                    <span className="text-sm text-saffron">{showMobileDestinations ? '▲' : '▼'}</span>
                  </button>
                  {showMobileDestinations && (
                    <div className="mt-4 max-h-[260px] overflow-y-auto flex flex-col gap-2 bg-white/5 p-4 rounded-2xl border border-white/5 text-left max-w-xs mx-auto">
                      {statesData.map((st) => (
                        <button
                          key={st.id}
                          onClick={() => {
                            setSelectedState(st);
                            setActiveTab('state-details');
                            setIsMobileMenuOpen(false);
                          }}
                          className="text-sm font-semibold text-gray-300 hover:text-saffron transition text-left bg-transparent border-none py-1.5 cursor-pointer border-b border-white/5 w-full block"
                        >
                          {st.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => {
                    handleTabClick(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className="text-2xl font-bold uppercase tracking-widest transition text-gray-400 hover:text-white bg-transparent border-none cursor-pointer"
                >
                  {item.label}
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Main Content Render */}
      <main className="flex-grow">
        {activeTab === 'home' && <Home onTabChange={setActiveTab} />}
        {activeTab === 'heritage' && <Heritage />}
        {activeTab === 'map' && (
          <InteractiveMap 
            onSelectState={(state) => {
              setSelectedState(state);
              setActiveTab('state-details');
            }} 
          />
        )}
        {activeTab === 'blog' && <Blog />}
        {activeTab === 'login' && (
          <Login 
            onLoginSuccess={(email, selectedRole) => {
              setIsLoggedIn(true);
              setUserEmail(email);
              setUserRole(selectedRole);
              if (selectedRole === 'guide') {
                setActiveTab('guide-portal');
              } else {
                setActiveTab('home');
              }
            }} 
          />
        )}
        {activeTab === 'guide-portal' && isLoggedIn && <GuidePortal />}
        {activeTab === 'state-details' && selectedState && (
          <StateDetails 
            state={selectedState} 
            onBack={() => {
              setActiveTab('home');
              setSelectedState(null);
            }} 
            onTabChange={(tab) => {
              setActiveTab(tab);
            }}
          />
        )}
      </main>

      {/* Floating Audio Controller */}
      <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-full shadow-2xl">
        {isPlaying && (
          <div className="flex gap-1 items-end h-4 px-2">
            <span className="w-1 bg-saffron rounded-full animate-wave-1 h-3" />
            <span className="w-1 bg-gold rounded-full animate-wave-2 h-4" />
            <span className="w-1 bg-green rounded-full animate-wave-3 h-2" />
          </div>
        )}
        
        {/* Sitar Sound controls */}
        <button 
          onClick={togglePlay}
          className="p-3 rounded-full bg-saffron hover:bg-saffron/95 text-white transition transform active:scale-95 shadow-md flex items-center justify-center focus:outline-none border-none cursor-pointer"
          title={isPlaying ? "Mute Ambient Sitar" : "Play Ambient Sitar"}
        >
          {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>

        {/* Volume slider (hidden initially, expands on hover) */}
        <div className="w-0 group-hover:w-20 overflow-hidden hover:w-20 transition-all duration-300 flex items-center">
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.05"
            value={volume}
            onChange={handleVolumeChange}
            className="w-16 accent-saffron h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-border-glass py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <h3 className="text-lg font-black uppercase text-white tracking-widest mb-4">
              Incredible<span className="text-saffron">!</span>ndia
            </h3>
            <p className="text-xs text-gray-500 leading-relaxed max-w-xs">
              A comprehensive showcase dedicated to exploring and promoting the cultural heritage and architectural zenith of India.
            </p>
          </div>

          {/* Ministry Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Dekho Apna Desh!</h4>
            <ul className="space-y-2 text-xs" style={{ listStyle: 'none' }}>
              <li><a href="https://indianculture.gov.in/" className="text-gray-500 hover:text-saffron transition" style={{ textDecoration: 'none' }}>Indian Culture Portal</a></li>
              <li><a href="https://www.incredibleindia.org/" className="text-gray-500 hover:text-saffron transition" style={{ textDecoration: 'none' }}>Incredible India Official</a></li>
              <li><a href="http://www.indiaculture.nic.in/" className="text-gray-500 hover:text-saffron transition" style={{ textDecoration: 'none' }}>Ministry of Culture</a></li>
            </ul>
          </div>

          {/* Government Initiatives */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Visit More</h4>
            <ul className="space-y-2 text-xs" style={{ listStyle: 'none' }}>
              <li><a href="https://www.mygov.in/" className="text-gray-500 hover:text-saffron transition" style={{ textDecoration: 'none' }}>My Government</a></li>
              <li><a href="https://www.digitalindia.gov.in/" className="text-gray-500 hover:text-saffron transition" style={{ textDecoration: 'none' }}>Digital India</a></li>
              <li><a href="https://tourism.gov.in/" className="text-gray-500 hover:text-saffron transition" style={{ textDecoration: 'none' }}>Ministry of Tourism</a></li>
            </ul>
          </div>

          {/* Creators */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Developed By</h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
              <a href="https://github.com/hemannayak" className="hover:text-saffron transition" style={{ textDecoration: 'none' }}>Hemanth</a>
              <a href="https://github.com/Prasannaarutla" className="hover:text-saffron transition" style={{ textDecoration: 'none' }}>Prasanna</a>
              <a href="https://github.com/apurba123nandi" className="hover:text-saffron transition" style={{ textDecoration: 'none' }}>Apurba</a>
              <a href="https://github.com/Skiran321/sai-" className="hover:text-saffron transition" style={{ textDecoration: 'none' }}>Sai Kiran</a>
              <span className="text-gray-600">Varsha</span>
              <span className="text-gray-600">Kishore</span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>&copy; 2026 Incredible India Campaign. Developed by Code Veda.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition" style={{ textDecoration: 'none' }}>Terms of Use</a>
            <a href="#" className="hover:text-white transition" style={{ textDecoration: 'none' }}>Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

