import { useState } from 'react';
import { 
  Plus, 
  Trash2, 
  FileText, 
  Printer, 
  TrendingUp, 
  Compass, 
  Volume2, 
  AlertTriangle, 
  DollarSign, 
  ShieldCheck 
} from 'lucide-react';
import { statesData } from '../data/statesData';

interface ItineraryDay {
  day: number;
  stateId: string;
  activities: string;
  focus: 'Heritage' | 'Cuisine' | 'Nature' | 'Shopping' | 'Adventure';
  notes: string;
}

export default function GuidePortal() {
  const [activeTab, setActiveTab] = useState<'circuits' | 'designer' | 'cheatsheets' | 'insights'>('circuits');

  // Route Planner circuits
  const circuits = [
    {
      title: "The Golden Triangle",
      states: ["Delhi", "Uttar Pradesh", "Rajasthan"],
      stops: "Delhi - Agra - Jaipur - Delhi",
      duration: "5 Days",
      season: "October to March (Winter)",
      difficulty: "Easy",
      tips: "Schedule early morning visits to the Taj Mahal to avoid the crowds and capture ideal sunrise lighting. Purchase composite entry tickets in Jaipur.",
      schedule: [
        { day: 1, title: "Delhi Heritage Tour", desc: "Explore Red Fort, Qutub Minar, and Chandni Chowk street food." },
        { day: 2, title: "Agra Mughal Marvels", desc: "Travel to Agra, visit Taj Mahal and Agra Fort at sunset." },
        { day: 3, title: "Jaipur Pink City Transition", desc: "Drive to Jaipur via Fatehpur Sikri, explore local bazaars." },
        { day: 4, title: "Royal Jaipur Forts", desc: "Elephant-ride style views of Amer Fort, City Palace, and Jantar Mantar." },
        { day: 5, title: "Delhi Return", desc: "Return to Delhi with shopping stops at local handicraft centers." }
      ]
    },
    {
      title: "Southern Heritage & Temple Run",
      states: ["Tamil Nadu", "Puducherry", "Karnataka"],
      stops: "Chennai - Mahabalipuram - Puducherry - Tanjore - Madurai",
      duration: "7 Days",
      season: "November to February",
      difficulty: "Medium",
      tips: "Dress conservatively at all ancient temples. Footwear must be deposited outside. Keep hydrated as weather is warm year-round.",
      schedule: [
        { day: 1, title: "Chennai Gateway", desc: "Kapaleeshwarar Temple and Marina Beach walk." },
        { day: 2, title: "Shore Temples of Mahabalipuram", desc: "Explore rock-cut Rathas and Shore Temple architecture." },
        { day: 3, title: "French Colonial Puducherry", desc: "Walk the White Town, visit Auroville Matrimandir." },
        { day: 4, title: "Chola Temple Trail", desc: "Explore Brihadeeswarar Temple in Thanjavur." },
        { day: 5, title: "Madurai Temple Tour", desc: "Visit Meenakshi Amman Temple and witness the night ceremony." }
      ]
    },
    {
      title: "The Eastern Buddhist Trail",
      states: ["Bihar", "Jharkhand", "West Bengal"],
      stops: "Kolkata - Bodh Gaya - Nalanda - Rajgir",
      duration: "6 Days",
      season: "October to March",
      difficulty: "Medium",
      tips: "Arrange a local meditation guide at the Mahabodhi Temple. Carry light slip-on shoes for quick removal at monastery ruins.",
      schedule: [
        { day: 1, title: "Kolkata Arrival", desc: "Visit Victoria Memorial and Indian Museum." },
        { day: 2, title: "Journey to Bodh Gaya", desc: "Travel by express train, settle in local monasteries." },
        { day: 3, title: "Enlightenment Site Tour", desc: "Meditation under the Bodhi Tree, Mahabodhi temple tour." },
        { day: 4, title: "Nalanda & Rajgir Excursion", desc: "Explore ancient university ruins and Vishwa Shanti Stupa." }
      ]
    }
  ];

  const [selectedCircuit, setSelectedCircuit] = useState<number | null>(0);

  // Itinerary Designer State
  const [tripName, setTripName] = useState('Imperial Rajasthan & Delhi');
  const [groupSize, setGroupSize] = useState(12);
  const [startDate, setStartDate] = useState('2026-11-10');
  const [days, setDays] = useState<ItineraryDay[]>([
    { day: 1, stateId: 'delhi', activities: 'Explore Old Delhi bazaar and Red Fort tour', focus: 'Heritage', notes: 'Book tickets online in advance' },
    { day: 2, stateId: 'uttar-pradesh', activities: 'Sunrise Taj Mahal tour and Fatehpur Sikri stopover', focus: 'Cuisine', notes: 'Taj is closed on Fridays' }
  ]);

  const addDay = () => {
    const nextDay = days.length + 1;
    setDays([...days, {
      day: nextDay,
      stateId: 'delhi',
      activities: 'Sightseeing and local guide briefings',
      focus: 'Heritage',
      notes: ''
    }]);
  };

  const removeDay = (idx: number) => {
    const updated = days.filter((_, i) => i !== idx).map((day, i) => ({ ...day, day: i + 1 }));
    setDays(updated);
  };

  const updateDayField = (idx: number, field: keyof ItineraryDay, value: any) => {
    const updated = days.map((day, i) => {
      if (i === idx) {
        return { ...day, [field]: value };
      }
      return day;
    });
    setDays(updated);
  };

  // Guide Cheat Sheets State
  const [cheatStateId, setCheatStateId] = useState('uttar-pradesh');
  const selectedCheatState = statesData.find(s => s.id === cheatStateId) || statesData[0];

  // Simulated language translator map
  const translationGuide: Record<string, { welcome: string; thankYou: string; cost: string; help: string }> = {
    'telangana': { welcome: "Namaskaram", thankYou: "Dhanyavaadalu", cost: "Idhi entha?", help: "Sahayam cheyandi" },
    'andhra-pradesh': { welcome: "Namaskaram", thankYou: "Dhanyavaadalu", cost: "Idhi entha?", help: "Sahayam cheyandi" },
    'tamil-nadu': { welcome: "Vanakkam", thankYou: "Nandri", cost: "Idhu evvalavu?", help: "Utavi ceyyunkal" },
    'kerala': { welcome: "Namaskaram", thankYou: "Nanni", cost: "Idhinu ethraya?", help: "Sahayikkuka" },
    'karnataka': { welcome: "Namaskara", thankYou: "Dhanyavadagalu", cost: "Idu estu?", help: "Sahaya madi" },
    'west-bengal': { welcome: "Nomoshkar", thankYou: "Dhonnobad", cost: "Etar daam koto?", help: "Sahajjo korun" },
    'rajasthan': { welcome: "Khamma Ghani", thankYou: "Dhanyavaad", cost: "Aa kyan ra peesa h?", help: "Madad karo" },
    'gujarat': { welcome: "Kem Cho", thankYou: "Aabhar", cost: "Aa ketla nu chhe?", help: "Madaad karo" }
  };

  const currentTranslation = translationGuide[cheatStateId] || { welcome: "Namaste", thankYou: "Dhanyavaad", cost: "Yeh kitne ka hai?", help: "Madad kijiye" };

  return (
    <div className="py-24 px-4 max-w-7xl mx-auto flex flex-col gap-8">
      {/* Title Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-black text-white flex items-center gap-3">
            <Compass className="w-10 h-10 text-saffron spin-slow" />
            Guide Portal
          </h1>
          <p className="text-gray-400 text-sm mt-2">
            Certified Tour Director Dashboard. Design itineraries, check local coordinates, translate terms, and plan circuits.
          </p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-saffron/10 border border-saffron/20 text-saffron text-xs font-bold uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          Access Level: Certified Guide
        </div>
      </div>

      {/* Tabs Menu */}
      <div className="flex border-b border-white/5 overflow-x-auto whitespace-nowrap gap-6 pb-2">
        <button
          onClick={() => setActiveTab('circuits')}
          className={`pb-3 text-sm font-bold uppercase tracking-wider transition relative ${
            activeTab === 'circuits' ? 'text-saffron' : 'text-gray-400 hover:text-white'
          }`}
        >
          Tour Circuits
          {activeTab === 'circuits' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-saffron rounded-full" />}
        </button>
        <button
          onClick={() => setActiveTab('designer')}
          className={`pb-3 text-sm font-bold uppercase tracking-wider transition relative ${
            activeTab === 'designer' ? 'text-saffron' : 'text-gray-400 hover:text-white'
          }`}
        >
          Itinerary Designer
          {activeTab === 'designer' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-saffron rounded-full" />}
        </button>
        <button
          onClick={() => setActiveTab('cheatsheets')}
          className={`pb-3 text-sm font-bold uppercase tracking-wider transition relative ${
            activeTab === 'cheatsheets' ? 'text-saffron' : 'text-gray-400 hover:text-white'
          }`}
        >
          State Cheat Sheets
          {activeTab === 'cheatsheets' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-saffron rounded-full" />}
        </button>
        <button
          onClick={() => setActiveTab('insights')}
          className={`pb-3 text-sm font-bold uppercase tracking-wider transition relative ${
            activeTab === 'insights' ? 'text-saffron' : 'text-gray-400 hover:text-white'
          }`}
        >
          Travel Analytics & Density
          {activeTab === 'insights' && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-saffron rounded-full" />}
        </button>
      </div>

      {/* Content Panels */}
      <div className="min-h-[500px] animate-fade-in">
        
        {/* Tab 1: Circuits */}
        {activeTab === 'circuits' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-4">
              <h3 className="text-xl font-bold text-white mb-2">Preset Circuits</h3>
              {circuits.map((circ, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCircuit(idx)}
                  className={`w-full text-left p-5 rounded-2xl border transition flex flex-col gap-2 ${
                    selectedCircuit === idx 
                      ? 'bg-saffron/10 border-saffron/40' 
                      : 'bg-white/5 border-white/5 hover:bg-white/10'
                  }`}
                >
                  <span className="text-xs text-saffron font-bold uppercase tracking-wider">{circ.duration}</span>
                  <span className="font-extrabold text-white text-lg">{circ.title}</span>
                  <span className="text-xs text-gray-400 line-clamp-1">{circ.stops}</span>
                </button>
              ))}
            </div>

            <div className="lg:col-span-2 glass-panel p-6 border border-white/5 card-cultural-border">
              {selectedCircuit !== null ? (
                <div className="space-y-6">
                  <div className="flex justify-between items-start border-b border-white/5 pb-4">
                    <div>
                      <h2 className="text-2xl font-extrabold text-white">{circuits[selectedCircuit].title}</h2>
                      <p className="text-sm text-saffron font-medium mt-1">{circuits[selectedCircuit].stops}</p>
                    </div>
                    <span className="px-4 py-1.5 rounded-full bg-saffron/10 border border-saffron/20 text-saffron text-xs font-bold uppercase">
                      {circuits[selectedCircuit].season}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-xs text-gray-500 font-bold uppercase">Duration</span>
                      <p className="font-bold text-white mt-1">{circuits[selectedCircuit].duration}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <span className="text-xs text-gray-500 font-bold uppercase">Difficulty Level</span>
                      <p className="font-bold text-white mt-1">{circuits[selectedCircuit].difficulty}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-3">Day-by-Day Schedule</h4>
                    <div className="space-y-4">
                      {circuits[selectedCircuit].schedule.map((day, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="flex flex-col items-center">
                            <span className="w-8 h-8 rounded-full bg-saffron text-white flex items-center justify-center font-bold text-sm">
                              {day.day}
                            </span>
                            {i < circuits[selectedCircuit].schedule.length - 1 && (
                              <div className="w-0.5 bg-white/10 flex-grow my-1 min-h-[30px]" />
                            )}
                          </div>
                          <div className="pt-0.5">
                            <h5 className="font-bold text-white text-sm">{day.title}</h5>
                            <p className="text-xs text-gray-400 mt-1">{day.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-saffron/5 border border-saffron/20 flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-saffron flex-shrink-0" />
                    <div>
                      <span className="text-xs text-saffron font-bold uppercase">Director's Local Advice</span>
                      <p className="text-xs text-gray-300 leading-relaxed mt-1">{circuits[selectedCircuit].tips}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center text-gray-500 py-12">
                  <Compass className="w-16 h-16 mb-4 text-gray-600" />
                  <p className="text-sm">Select a tour circuit to view day-by-day itineraries and guide notes.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Tab 2: Itinerary Designer */}
        {activeTab === 'designer' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 glass-panel p-6 border border-white/5 space-y-5 card-cultural-border">
              <h3 className="text-xl font-bold text-white border-b border-white/5 pb-3">Trip Info</h3>
              
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Trip Name</label>
                <input 
                  type="text" 
                  value={tripName}
                  onChange={(e) => setTripName(e.target.value)}
                  className="glass-input text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Group Size</label>
                  <input 
                    type="number" 
                    value={groupSize}
                    onChange={(e) => setGroupSize(Number(e.target.value))}
                    className="glass-input text-sm"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Start Date</label>
                  <input 
                    type="date" 
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="glass-input text-sm"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <button 
                  onClick={addDay}
                  className="btn-premium w-full justify-center text-sm"
                >
                  <Plus className="w-4 h-4" />
                  Add Journey Day
                </button>
              </div>

              <button 
                onClick={() => window.print()}
                className="w-full py-3 rounded-full border border-white/10 bg-white/5 text-white font-bold text-sm hover:bg-white/10 transition flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                Print Tour Sheet
              </button>
            </div>

            <div className="lg:col-span-2 glass-panel p-6 border border-white/5 space-y-6 print-section card-cultural-border">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-white">{tripName || "Custom Expedition"}</h3>
                  <p className="text-xs text-gray-400 mt-1">
                    Group size: {groupSize} people • Scheduled Start: {startDate}
                  </p>
                </div>
                <FileText className="w-8 h-8 text-saffron hidden md:block" />
              </div>

              <div className="space-y-6">
                {days.map((day, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-4 relative group">
                    <button
                      onClick={() => removeDay(idx)}
                      className="absolute top-4 right-4 p-1.5 rounded-full hover:bg-red-500/10 text-gray-400 hover:text-red-400 transition md:opacity-0 group-hover:opacity-100"
                      title="Remove Day"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>

                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded-md bg-saffron text-white font-bold text-xs">
                        Day {day.day}
                      </span>
                      <div className="flex-grow grid grid-cols-1 md:grid-cols-2 gap-4">
                        <select
                          value={day.stateId}
                          onChange={(e) => updateDayField(idx, 'stateId', e.target.value)}
                          className="glass-input text-xs py-1.5"
                        >
                          {statesData.map(st => (
                            <option key={st.id} value={st.id} className="bg-slate-950 text-white">{st.name}</option>
                          ))}
                        </select>
                        <select
                          value={day.focus}
                          onChange={(e) => updateDayField(idx, 'focus', e.target.value)}
                          className="glass-input text-xs py-1.5"
                        >
                          <option value="Heritage" className="bg-slate-950">Heritage & Culture</option>
                          <option value="Cuisine" className="bg-slate-950">Food & Dining</option>
                          <option value="Nature" className="bg-slate-950">Eco-Nature</option>
                          <option value="Shopping" className="bg-slate-950">Craft Shopping</option>
                          <option value="Adventure" className="bg-slate-950">Outdoor Sport</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-gray-500 uppercase">Daily Schedule & Visited Spots</label>
                      <textarea
                        rows={2}
                        value={day.activities}
                        onChange={(e) => updateDayField(idx, 'activities', e.target.value)}
                        placeholder="Add monuments, timings, and transportation details..."
                        className="glass-input text-xs w-full resize-none"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-bold text-gray-500 uppercase">Internal Guide Notes</label>
                      <input
                        type="text"
                        value={day.notes}
                        onChange={(e) => updateDayField(idx, 'notes', e.target.value)}
                        placeholder="E.g., camera fees, clothing rules, ticket QR codes..."
                        className="glass-input text-xs w-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Cheat Sheets */}
        {activeTab === 'cheatsheets' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 glass-panel p-6 border border-white/5 space-y-4 card-cultural-border">
              <h3 className="text-xl font-bold text-white mb-2">Select Target State</h3>
              <div className="flex flex-col gap-2 max-h-[450px] overflow-y-auto pr-2">
                {statesData.map(st => (
                  <button
                    key={st.id}
                    onClick={() => setCheatStateId(st.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-semibold transition ${
                      cheatStateId === st.id 
                        ? 'bg-saffron border-saffron text-white' 
                        : 'bg-white/5 border-white/5 text-gray-300 hover:border-saffron/40'
                    }`}
                  >
                    {st.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 glass-panel p-6 border border-white/5 space-y-6 card-cultural-border">
              <div className="flex justify-between items-center border-b border-white/5 pb-4">
                <div>
                  <h2 className="text-2xl font-extrabold text-white">{selectedCheatState.name} Quick Sheet</h2>
                  <p className="text-sm text-saffron font-semibold mt-1">Capital: {selectedCheatState.capital}</p>
                </div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 rounded-lg text-xs text-gray-400">
                  Lang: {selectedCheatState.quickFacts.language}
                </div>
              </div>

              {/* Language Helper */}
              <div>
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <Volume2 className="w-5 h-5 text-saffron" />
                  Language Translation Guide
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase font-bold">Welcome</span>
                      <p className="font-extrabold text-white text-lg mt-1">{currentTranslation.welcome}</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase font-bold">Thank You</span>
                      <p className="font-extrabold text-white text-lg mt-1">{currentTranslation.thankYou}</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase font-bold">"How much does it cost?"</span>
                      <p className="font-extrabold text-white text-lg mt-1">{currentTranslation.cost}</p>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex justify-between items-center">
                    <div>
                      <span className="text-[10px] text-gray-500 uppercase font-bold">"Please help me"</span>
                      <p className="font-extrabold text-white text-lg mt-1">{currentTranslation.help}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Monument Ticketing estimates */}
              <div>
                <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-gold" />
                  Monument Entry & Ticketing
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead>
                      <tr className="border-b border-white/10 text-gray-400">
                        <th className="py-2.5 font-bold uppercase">Monument / Site</th>
                        <th className="py-2.5 font-bold uppercase">Domestic Ticket</th>
                        <th className="py-2.5 font-bold uppercase">International Ticket</th>
                      </tr>
                    </thead>
                    <tbody>
                      {selectedCheatState.monuments.map((m, i) => (
                        <tr key={i} className="border-b border-white/5 text-gray-200">
                          <td className="py-3 font-semibold">{m.name}</td>
                          <td className="py-3 font-medium text-green">₹ 50 - ₹ 80</td>
                          <td className="py-3 font-medium text-saffron">₹ 600 - ₹ 1,100</td>
                        </tr>
                      ))}
                      {selectedCheatState.monuments.length === 0 && (
                        <tr>
                          <td colSpan={3} className="py-4 text-center text-gray-500">No ticket records loaded.</td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Contacts */}
              <div>
                <h4 className="font-bold text-white mb-3">Local Emergency Contacts</h4>
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-gray-500 font-bold uppercase block">Police Desk</span>
                    <span className="text-sm font-extrabold text-white block mt-1">100 / 112</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-gray-500 font-bold uppercase block">Tourist Helpline</span>
                    <span className="text-sm font-extrabold text-saffron block mt-1">1363</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                    <span className="text-[10px] text-gray-500 font-bold uppercase block">Medical Helpline</span>
                    <span className="text-sm font-extrabold text-white block mt-1">108</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Tab 4: Insights */}
        {activeTab === 'insights' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="glass-panel p-6 border border-white/5 flex flex-col gap-4 text-center items-center justify-center card-cultural-border">
              <TrendingUp className="w-12 h-12 text-saffron" />
              <div>
                <h4 className="font-bold text-white text-lg">National Travel Score</h4>
                <p className="text-3xl font-black text-saffron mt-2">9.4 / 10</p>
                <p className="text-[10px] text-gray-500 uppercase font-bold mt-2">Highly Recommended</p>
              </div>
            </div>

            <div className="glass-panel p-6 border border-white/5 space-y-4 card-cultural-border">
              <h4 className="font-bold text-white text-sm">Density and Footfall (Peak Seasonal)</h4>
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Delhi NCR</span>
                    <span>High (85%)</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="bg-saffron h-full rounded-full" style={{ width: '85%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Rajasthan Forts</span>
                    <span>Moderate (60%)</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="bg-gold h-full rounded-full" style={{ width: '60%' }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-400 mb-1">
                    <span>Kerala Backwaters</span>
                    <span>Steady (75%)</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <div className="bg-green h-full rounded-full" style={{ width: '75%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 border border-white/5 space-y-4 card-cultural-border">
              <h4 className="font-bold text-white text-sm">Monsoon & Weather Alerts</h4>
              <div className="p-3.5 rounded-xl bg-orange-500/10 border border-orange-500/25 flex gap-3 text-xs">
                <AlertTriangle className="w-5 h-5 text-orange-400 flex-shrink-0" />
                <div>
                  <span className="font-bold text-orange-400">Rainfall Advisory</span>
                  <p className="text-gray-300 leading-relaxed mt-1">
                    Moderate rain forecast in Southern Kerala. Ensure guides pack umbrellas and secure waterproof covers.
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-panel p-6 border border-white/5 space-y-3 card-cultural-border">
              <h4 className="font-bold text-white text-sm">Security & Dress Code Guidelines</h4>
              <ul className="text-xs text-gray-400 space-y-2 leading-relaxed list-disc list-inside">
                <li>Cover knees and shoulders in temples.</li>
                <li>Secure photography permits at Hampi.</li>
                <li>Validate guide licensing tags at entrances.</li>
                <li>Check local weather reports before Ladakh travel.</li>
              </ul>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
