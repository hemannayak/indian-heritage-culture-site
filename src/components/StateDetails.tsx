import { useState } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Compass, 
  Languages, 
  ShieldCheck, 
  Clock, 
  PhoneCall, 
  Share2, 
  Heart, 
  Sparkles, 
  Calendar, 
  Info, 
  Plane,
  Award,
  DollarSign,
  CloudSun
} from 'lucide-react';
import type { StateData } from '../data/statesData';

interface StateDetailsProps {
  state: StateData;
  onBack: () => void;
  onTabChange: (tabId: string) => void;
}

export default function StateDetails({ state, onBack }: StateDetailsProps) {
  const [activeGalleryIdx, setActiveGalleryIdx] = useState(0);
  const [plannerType, setPlannerType] = useState<'solo' | 'family' | 'couple' | 'adventure' | 'foodie'>('solo');
  const [selectedCity, setSelectedCity] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isShared, setIsShared] = useState(false);
  const [activeMonthTab, setActiveMonthTab] = useState<'Jan-Apr' | 'May-Aug' | 'Sep-Dec'>('Jan-Apr');

  // Merge monuments and cuisines into a single visual gallery
  const galleryItems = [
    ...state.monuments.map(m => ({ name: m.name, desc: m.description, img: m.image, type: 'Monument' })),
    ...state.cuisine.map(c => ({ name: c.name, desc: c.description, img: c.image, type: 'Cuisine' })),
    ...(state.panoramas.map(p => ({ name: p.name, desc: '360 Immersive Street View panorama coordinates', img: 'https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=800&auto=format&fit=crop', type: 'Panorama' })))
  ];

  // If no items are found, add a fallback
  if (galleryItems.length === 0) {
    galleryItems.push({
      name: state.name + " Heritage",
      desc: "Beautiful landscapes and local culture",
      img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&auto=format&fit=crop",
      type: "Scenic"
    });
  }

  // Dynamic Cities database based on state IDs
  const stateCities: Record<string, { name: string; x: string; y: string; attraction: string; safety: string; temp: string }[]> = {
    'telangana': [
      { name: "Hyderabad", x: "42%", y: "45%", attraction: "Charminar & Biryani tour", safety: "9.8", temp: "29°C" },
      { name: "Warangal", x: "65%", y: "30%", attraction: "Thousand Pillar Temple", safety: "9.6", temp: "28°C" },
      { name: "Nizamabad", x: "32%", y: "20%", attraction: "Nizamabad Fort ruins", safety: "9.4", temp: "27°C" },
      { name: "Khammam", x: "70%", y: "65%", attraction: "Khammam Fort & Lakaram Lake", safety: "9.5", temp: "30°C" }
    ],
    'rajasthan': [
      { name: "Jaipur", x: "55%", y: "35%", attraction: "Hawa Mahal & Amber Fort", safety: "9.7", temp: "32°C" },
      { name: "Jodhpur", x: "28%", y: "48%", attraction: "Mehrangarh Fort walk", safety: "9.6", temp: "34°C" },
      { name: "Udaipur", x: "35%", y: "78%", attraction: "Lake Pichola boating", safety: "9.8", temp: "30°C" },
      { name: "Jaisalmer", x: "15%", y: "30%", attraction: "Sam Sand Dunes desert safari", safety: "9.5", temp: "36°C" }
    ],
    'kerala': [
      { name: "Kochi", x: "40%", y: "48%", attraction: "Fort Kochi & Chinese fishing nets", safety: "9.8", temp: "28°C" },
      { name: "Alleppey", x: "42%", y: "68%", attraction: "Houseboat backwater cruises", safety: "9.7", temp: "29°C" },
      { name: "Munnar", x: "65%", y: "52%", attraction: "Tea plantation treks", safety: "9.6", temp: "24°C" },
      { name: "Wayanad", x: "30%", y: "22%", attraction: "Edakkal Caves exploration", safety: "9.5", temp: "25°C" }
    ],
    'maharashtra': [
      { name: "Mumbai", x: "25%", y: "60%", attraction: "Gateway of India & Marine Drive", safety: "9.7", temp: "30°C" },
      { name: "Pune", x: "40%", y: "72%", attraction: "Shaniwar Wada palace ruins", safety: "9.6", temp: "27°C" },
      { name: "Aurangabad", x: "60%", y: "42%", attraction: "Ellora monolithic rock temple", safety: "9.5", temp: "31°C" },
      { name: "Nagpur", x: "85%", y: "30%", attraction: "Tadoba Tiger reserve", safety: "9.4", temp: "33°C" }
    ]
  };

  const defaultCities = [
    { name: state.capital, x: "50%", y: "50%", attraction: "Capital city museums & parks", safety: "9.6", temp: "28°C" },
    { name: "Historic District", x: "30%", y: "35%", attraction: "Ancient temples & folklore sites", safety: "9.4", temp: "26°C" },
    { name: "Nature Reserve", x: "68%", y: "65%", attraction: "Eco trails & waterfalls", safety: "9.5", temp: "25°C" }
  ];

  const activeCities = stateCities[state.id] || defaultCities;

  // Custom historical timeline database
  const timelines: Record<string, { era: string; title: string; desc: string }[]> = {
    'telangana': [
      { era: "1163 CE - 1323 CE", title: "Kakatiya Dynasty Zenith", desc: "Built the Warangal Fort and engineered advanced irrigation tanks still active today." },
      { era: "1518 CE - 1687 CE", title: "Golconda Qutb Shahi Era", desc: "Constructed the iconic Charminar and ruled as the diamond capital of the medieval world." },
      { era: "1724 CE - 1948 CE", title: "Asaf Jahi Nizam Rule", desc: "Introduced railways, modern education, and administrative structures to Hyderabad State." },
      { era: "2014 CE - Present", title: "State Formation & Innovation", desc: "Designated as India's youngest state, creating a global technology and hardware start-up hub." }
    ],
    'rajasthan': [
      { era: "6th - 12th Century", title: "Rajput Clan Foundation", desc: "Established major fort cities across the Thar desert representing military chivalry." },
      { era: "1560 CE - 1707 CE", title: "Mughal Treaties & Art", desc: "Synthesized beautiful Indo-Persian palace architecture and miniature paintings." },
      { era: "1730 CE - 1818 CE", title: "Maratha Wars & Transition", desc: "Fought complex territory disputes preceding British protection treaties." },
      { era: "1949 CE - Present", title: "Integration of Rajputana", desc: "Unified 22 princely states to create India's largest heritage tourism corridor." }
    ]
  };

  const defaultTimeline = [
    { era: "Ancient Times", title: "Foundations & Sacred Inceptions", desc: "Formed early trade networks and religious structures documented in Sanskrit texts." },
    { era: "Medieval Era", title: "Dynastic Conflicts & Monuments", desc: "Ruled by regional dynasties building massive forts and patronizing classical arts." },
    { era: "Modern Era", title: "Independence & Heritage Preservation", desc: "Sustaining thousands of physical tourist spots while scaling digital connections." }
  ];

  const activeTimeline = timelines[state.id] || defaultTimeline;

  // Generate dynamic 4-Day Itinerary based on plannerType
  const generateItinerary = () => {
    const daysData = [
      {
        day: 1,
        title: "Historical Zenith & Landmarks",
        desc: `Morning tour of ${state.monuments[0]?.name || "the local capital ruins"}. Explore the ancient carvings, learn from a certified guide, and capture early sunrise photographs.`
      },
      {
        day: 2,
        title: "Culinary Heritage Trail",
        desc: `Embark on a culinary tasting session. Try ${state.cuisine[0]?.name || "traditional regional dishes"} and explore the local markets for spices and organic handloom crafts.`
      },
      {
        day: 3,
        title: "Panoramic Viewpoints & Photography",
        desc: `Witness the scenic skyline or visit ${state.monuments[1]?.name || state.name + " heritage shrines"}. Savor dinner at a rooftop overlooking the illuminated district.`
      },
      {
        day: 4,
        title: "Local Festivals & Souvenir Crafting",
        desc: `Briefing on ${state.event.name}. Engage with local artisans to understand traditional crafting methods before returning home.`
      }
    ];

    if (plannerType === 'adventure') {
      daysData[0].title = "High-Energy Trekking & Exploration";
      daysData[0].desc = "Early morning trekking along the rocky hill terrains or forest trails leading to hidden ruins.";
      daysData[2].title = "Eco-Safari & Waterfalls";
      daysData[2].desc = "Full day wildlife reserve tour and waterfall trail. Secure permissions and local safety guides.";
    } else if (plannerType === 'foodie') {
      daysData[0].title = "Breakfast Street Food Walk";
      daysData[0].desc = `Start the day tasting local breakfast sets, followed by cooking workshops detailing ${state.cuisine[0]?.name || "indigenous spices"}.`;
      daysData[2].title = "Royal Feast & Dessert Crafts";
      daysData[2].desc = `Dine at a heritage restaurant sampling full multi-course meals and sweet specialties like ${state.cuisine[1]?.name || "local baked desserts"}.`;
    } else if (plannerType === 'couple') {
      daysData[0].title = "Palace & Lake Tour";
      daysData[0].desc = "Scenic morning walk around local palace gardens followed by private lunch reservations.";
      daysData[2].title = "Sunset Cruise & Music";
      daysData[2].desc = "Romantic evening boat ride or light-and-sound show at the central fort complex.";
    }

    return daysData;
  };

  const handleShare = () => {
    setIsShared(true);
    setTimeout(() => setIsShared(false), 2000);
    navigator.clipboard.writeText(window.location.href);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col gap-12 pb-24">
      
      {/* SECTION 1: Immersive Cinematic Hero */}
      <section className="relative h-[80vh] flex items-end justify-start overflow-hidden">
        {/* Full-bleed background image with parallax overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src={galleryItems[activeGalleryIdx].img} 
            alt={state.name} 
            className="w-full h-full object-cover transform scale-105 transition-transform duration-700 state-hero-img"
          />
          <div className="absolute inset-0 state-hero-overlay z-10" />
        </div>

        {/* Back and social buttons toolbar */}
        <div className="absolute top-6 left-4 right-4 z-20 max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 hover:border-saffron/40 hover:bg-black/80 transition text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-saffron" />
            Back to Home
          </button>
          
          <div className="flex gap-2">
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`p-3 rounded-full bg-black/60 backdrop-blur-md border transition cursor-pointer ${
                isLiked ? 'border-red-500 text-red-500 bg-red-500/10' : 'border-white/10 text-gray-300 hover:text-white'
              }`}
              title="Add to Saved Collections"
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-red-500' : ''}`} />
            </button>
            <button 
              onClick={handleShare}
              className="p-3 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-gray-300 hover:text-white transition cursor-pointer"
              title="Copy Link to Share"
            >
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Floating Share Toast */}
        {isShared && (
          <div className="fixed top-24 right-6 bg-saffron border border-saffron/50 text-white font-bold text-xs px-4 py-2.5 rounded-xl shadow-2xl z-50 animate-slide-up">
            Copied State URL to Clipboard!
          </div>
        )}

        {/* Cinematic Title Details */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 pb-12 w-full flex flex-col items-start gap-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron/20 border border-saffron/30 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold spin-slow" />
            <span className="text-[10px] font-bold text-saffron uppercase tracking-widest">{state.region} Region</span>
          </div>

          <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white uppercase leading-none">
            {state.name}
          </h1>
          <p className="text-sm md:text-xl text-gray-300 font-light max-w-xl italic leading-relaxed">
            "{state.history.substring(0, 110)}..."
          </p>

          {/* Sights gallery thumbnail strip at the bottom of hero */}
          <div className="w-full flex gap-3 overflow-x-auto pt-6 scrollbar-none">
            {galleryItems.slice(0, 8).map((item, idx) => (
              <button
                key={idx}
                onClick={() => setActiveGalleryIdx(idx)}
                className={`flex-shrink-0 flex items-center gap-2.5 p-2 rounded-xl border transition cursor-pointer text-left ${
                  activeGalleryIdx === idx 
                    ? 'bg-saffron/10 border-saffron text-white' 
                    : 'bg-black/40 border-white/10 text-gray-400 hover:border-white/20'
                }`}
              >
                <img src={item.img} alt={item.name} className="w-8 h-8 object-cover rounded-lg border border-white/15" />
                <div>
                  <span className="text-[8px] font-bold text-saffron uppercase block tracking-widest">{item.type}</span>
                  <span className="text-[10px] font-black text-white block truncate w-24">{item.name}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 2: Dynamic Snapshot Dashboard */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          <div className="metric-grid-card card-cultural-border">
            <MapPin className="w-5 h-5 text-saffron mx-auto mb-2" />
            <span className="text-[9px] text-gray-500 block uppercase font-bold">Capital</span>
            <p className="font-extrabold text-white mt-1 text-sm">{state.capital}</p>
          </div>
          <div className="metric-grid-card card-cultural-border">
            <Languages className="w-5 h-5 text-gold mx-auto mb-2" />
            <span className="text-[9px] text-gray-500 block uppercase font-bold">Primary Language</span>
            <p className="font-extrabold text-white mt-1 text-sm">{state.quickFacts.language}</p>
          </div>
          <div className="metric-grid-card card-cultural-border">
            <Compass className="w-5 h-5 text-green mx-auto mb-2" />
            <span className="text-[9px] text-gray-500 block uppercase font-bold">Total Area</span>
            <p className="font-extrabold text-white mt-1 text-sm">{state.quickFacts.area}</p>
          </div>
          <div className="metric-grid-card card-cultural-border">
            <Plane className="w-5 h-5 text-saffron mx-auto mb-2" />
            <span className="text-[9px] text-gray-500 block uppercase font-bold">Primary Airport</span>
            <p className="font-extrabold text-white mt-1 text-sm truncate">{state.capital} (AP)</p>
          </div>
          <div className="metric-grid-card card-cultural-border">
            <Award className="w-5 h-5 text-gold mx-auto mb-2" />
            <span className="text-[9px] text-gray-500 block uppercase font-bold">UNESCO Sites</span>
            <p className="font-extrabold text-white mt-1 text-sm">{state.monuments.length} Listed</p>
          </div>
          <div className="metric-grid-card card-cultural-border">
            <ShieldCheck className="w-5 h-5 text-green mx-auto mb-2" />
            <span className="text-[9px] text-gray-500 block uppercase font-bold">Crowd Index</span>
            <p className="font-extrabold text-white mt-1 text-sm">Moderate (65%)</p>
          </div>
        </div>
      </section>

      {/* SECTION 3 & 4: Timeline & Cities Split Panel */}
      <section className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Half: Story Timeline */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Historical Epochs</h2>
            <p className="text-xs text-gray-500 mt-1">Scroll down to explore the chronological lineage that shaped this region.</p>
          </div>

          <div className="relative pl-12 space-y-8">
            <div className="story-timeline-track" />
            
            {activeTimeline.map((item, idx) => (
              <div key={idx} className="relative group">
                <div className="story-timeline-node" />
                <div className="glass-panel p-5 border border-white/5 card-cultural-border hover:border-saffron/30 transition-all">
                  <div className="flex justify-between items-center text-xs mb-2 text-saffron font-bold">
                    <span>{item.era}</span>
                    <span className="text-[9px] px-2 py-0.5 rounded bg-saffron/10 border border-saffron/20 font-black">ERA 0{idx + 1}</span>
                  </div>
                  <h4 className="font-extrabold text-white text-base mb-1.5">{item.title}</h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Half: City District Map Explorer */}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">City District Explorer</h2>
            <p className="text-xs text-gray-500 mt-1">Select pins on the interactive grid to review tourist statistics per district.</p>
          </div>

          {/* Interactive abstract city map board */}
          <div className="city-map-board aspect-[4/3] bg-slate-900/60 p-4 relative flex items-center justify-center border border-white/10 card-cultural-border">
            {/* Outline map placeholder background */}
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&auto=format&fit=crop')" }} />
            
            {/* Dynamic Map Grid Lines */}
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-5 border border-white/10 pointer-events-none">
              {Array.from({ length: 64 }).map((_, i) => <div key={i} className="border border-white/10" />)}
            </div>

            {/* Pulsing city markers */}
            {activeCities.map((city, idx) => (
              <div
                key={idx}
                style={{ left: city.x, top: city.y }}
                className="city-target-marker"
                onClick={() => setSelectedCity(idx)}
              >
                <div className={`city-marker-dot ${selectedCity === idx ? 'scale-125 border-saffron' : ''}`} />
                <span className="absolute left-1/2 -translate-x-1/2 top-4 px-2 py-0.5 rounded bg-black/80 border border-white/10 text-[8px] font-black tracking-wider text-white whitespace-nowrap">
                  {city.name}
                </span>
              </div>
            ))}

            {/* Bottom floating details card */}
            <div className="absolute bottom-4 left-4 right-4 bg-slate-950/95 border border-white/10 rounded-2xl p-4 flex justify-between items-center animate-slide-up shadow-2xl backdrop-blur-md">
              <div>
                <span className="text-[8px] font-black text-saffron uppercase tracking-widest">Active District</span>
                <h4 className="font-extrabold text-white text-base mt-0.5">{activeCities[selectedCity].name}</h4>
                <p className="text-[10px] text-gray-400 mt-1 flex items-center gap-1">
                  <Compass className="w-3.5 h-3.5 text-gold" />
                  Top spot: {activeCities[selectedCity].attraction}
                </p>
              </div>
              <div className="text-right flex flex-col gap-1 text-[10px]">
                <span className="font-extrabold text-green bg-green/10 border border-green/20 px-2 py-0.5 rounded">
                  Safety: {activeCities[selectedCity].safety}
                </span>
                <span className="font-bold text-gray-400 flex items-center justify-end gap-1 mt-1">
                  <CloudSun className="w-3.5 h-3.5 text-gold" />
                  {activeCities[selectedCity].temp}
                </span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* SECTION 5: AI Travel Planner */}
      <section className="max-w-4xl mx-auto px-6 w-full border-t border-white/5 pt-16">
        <div className="glass-panel p-8 border border-white/10 card-cultural-border relative overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-80 h-80 bg-saffron/5 rounded-full blur-[90px] pointer-events-none" />
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-white flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-8 h-8 text-saffron spin-slow" />
              AI Personal Travel Planner
            </h2>
            <p className="text-xs text-gray-400">
              Select your traveler archetype and let the planner compile a custom 4-Day itinerary dynamically.
            </p>
          </div>

          {/* Archetype buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {(['solo', 'family', 'couple', 'adventure', 'foodie'] as const).map(type => (
              <button
                key={type}
                onClick={() => setPlannerType(type)}
                className={`px-5 py-2.5 rounded-full border text-[10px] font-bold uppercase tracking-wider transition cursor-pointer ${
                  plannerType === type 
                    ? 'bg-saffron border-saffron text-white shadow-lg shadow-saffron/25' 
                    : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/20'
                }`}
              >
                {type} explorer
              </button>
            ))}
          </div>

          {/* Generated Day-by-Day Timeline */}
          <div className="space-y-4">
            {generateItinerary().map((day, dIdx) => (
              <div key={dIdx} className="flex gap-4 items-start p-4 rounded-xl bg-white/5 border border-white/5">
                <span className="w-12 h-12 rounded-full bg-saffron text-white flex items-center justify-center font-black text-sm flex-shrink-0 shadow-md">
                  D{day.day}
                </span>
                <div>
                  <h4 className="font-extrabold text-white text-sm leading-tight">{day.title}</h4>
                  <p className="text-xs text-gray-400 mt-1 leading-relaxed">{day.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: Netflix-style Experience Explorer */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Thematic Experiences</h2>
          <p className="text-xs text-gray-500 mt-1">Explore curated local activities aligned with regional specialties.</p>
        </div>

        <div className="experience-scroll-row scrollbar-none">
          {galleryItems.map((item, idx) => (
            <div 
              key={idx} 
              className="experience-snap-card flex-shrink-0"
              onClick={() => setActiveGalleryIdx(idx)}
            >
              <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
              <div className="absolute bottom-3 left-3 right-3 z-20">
                <span className="text-[8px] font-black text-saffron uppercase tracking-widest">{item.type}</span>
                <h4 className="font-black text-white text-xs mt-0.5 truncate">{item.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 7: Festival Timeline Calendar */}
      <section className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4 border-b border-white/5 pb-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-white">Festival Calendar</h2>
            <p className="text-xs text-gray-500 mt-1">Check the calendar list of events and regional gatherings.</p>
          </div>
          <div className="flex gap-2 text-[10px] font-bold bg-white/5 p-1 rounded-xl border border-white/5">
            {(['Jan-Apr', 'May-Aug', 'Sep-Dec'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveMonthTab(tab)}
                className={`px-4 py-2 rounded-lg transition border-none bg-transparent cursor-pointer ${
                  activeMonthTab === tab ? 'bg-saffron text-white shadow-sm' : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Calendar details row */}
        <div className="glass-panel p-6 border border-white/5 card-cultural-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-4 items-center text-left">
            <div className="w-16 h-16 rounded-2xl bg-saffron/10 border border-saffron/30 flex flex-col items-center justify-center text-saffron shadow-inner">
              <Calendar className="w-6 h-6" />
              <span className="text-[9px] font-black uppercase mt-1">Calendar</span>
            </div>
            <div>
              <span className="text-[9px] font-bold text-gold uppercase tracking-wider block">{state.event.date.split('T')[0]}</span>
              <h3 className="font-extrabold text-white text-xl mt-0.5 mb-1.5">{state.event.name}</h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-xl">{state.event.description}</p>
            </div>
          </div>
          <a
            href={state.event.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium flex-shrink-0 text-xs py-3 px-6"
            style={{ textDecoration: 'none' }}
          >
            Official Calendar Link
          </a>
        </div>
      </section>

      {/* SECTION 8: Travel Intelligence Desk */}
      <section className="max-w-7xl mx-auto px-6 w-full border-t border-white/5 pt-16">
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white">Travel Intelligence</h2>
          <p className="text-xs text-gray-500 mt-1">Live metrics and security briefs before you depart.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <span className="text-gray-500 font-bold uppercase text-[9px] flex items-center gap-1">
              <DollarSign className="w-3.5 h-3.5 text-gold" />
              Average Daily Cost
            </span>
            <p className="font-black text-white text-lg">₹2,800 - ₹4,500</p>
            <p className="text-[9px] text-gray-500">Includes mid-range hotels & transit</p>
          </div>
          
          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <span className="text-gray-500 font-bold uppercase text-[9px] flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-saffron" />
              Best Season
            </span>
            <p className="font-black text-white text-lg">October to March</p>
            <p className="text-[9px] text-gray-500">Cooler winter weather profiles</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <span className="text-gray-500 font-bold uppercase text-[9px] flex items-center gap-1">
              <PhoneCall className="w-3.5 h-3.5 text-green" />
              Emergency Help desk
            </span>
            <p className="font-black text-white text-lg">1363 (Tourist desk)</p>
            <p className="text-[9px] text-gray-500">24/7 Multi-language support</p>
          </div>

          <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
            <span className="text-gray-500 font-bold uppercase text-[9px] flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-gold" />
              Director's Advice
            </span>
            <p className="text-[11px] text-gray-400 leading-relaxed font-medium">
              Dress conservatively at historical shrines. Book online entries for monuments 2 days ahead.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
