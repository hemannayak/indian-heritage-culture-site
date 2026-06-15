import { useEffect, useState } from 'react';
import { 
  Sparkles, 
  Calendar, 
  Heart, 
  Shield, 
  Award, 
  Map, 
  Compass, 
  Flame, 
  Leaf,
  ArrowLeft,
  ArrowRight,
  Plane,
  Train,
  Bus,
  Car,
  Search,
  Ticket,
  Printer
} from 'lucide-react';

export default function Home({ onTabChange }: { onTabChange: (tab: string) => void }) {
  const [typedText, setTypedText] = useState('');
  const slogans = ["Incredible!ndia", "Dekho Apna Desh!", "Explore Indian Culture & Heritage"];
  const [sloganIndex, setSloganIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const [selectedTheme, setSelectedTheme] = useState<'spiritual' | 'heritage' | 'adventure' | 'wildlife' | 'wellness'>('spiritual');

  // Attractions Carousel State
  const [carouselIdx, setCarouselIdx] = useState(0);

  // Transit Trip Planner State
  const [transitTab, setTransitTab] = useState<'flights' | 'trains' | 'buses' | 'cabs'>('flights');
  const [fromLoc, setFromLoc] = useState('New Delhi (DEL)');
  const [toLoc, setToLoc] = useState('Agra Cantt (AGC)');
  const [departDate, setDepartDate] = useState('2026-06-16');
  const [ticketClass, setTicketClass] = useState('Economy');
  const [showTicket, setShowTicket] = useState(false);
  const [simulatedTicket, setSimulatedTicket] = useState<any>(null);

  useEffect(() => {
    const activeSlogan = slogans[sloganIndex];
    let timer: any;

    if (isDeleting) {
      timer = setTimeout(() => {
        setTypedText(activeSlogan.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      }, 50);
    } else {
      timer = setTimeout(() => {
        setTypedText(activeSlogan.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      }, 100);
    }

    if (!isDeleting && charIndex === activeSlogan.length) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setSloganIndex(prev => (prev + 1) % slogans.length);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, sloganIndex]);

  const eras = [
    {
      period: "2500 BCE - 1500 BCE",
      title: "Indus Valley Civilization",
      description: "One of the world's earliest urban cultures, boasting advanced town planning, metallurgy, and grid systems.",
      badge: "Ancient Era"
    },
    {
      period: "1500 BCE - 500 BCE",
      title: "Vedic & Epic Periods",
      description: "Composition of the sacred Vedas, Upanishads, and epic sagas like Mahabharata and Ramayana shaping the spiritual landscape.",
      badge: "Spiritual Dawn"
    },
    {
      period: "322 BCE - 550 CE",
      title: "The Golden Age (Maurya & Gupta)",
      description: "Peak of science, arts, astronomy, and mathematics (discovery of zero). Reign of Emperor Ashoka and expansion of Buddhism.",
      badge: "Scientific Zenith"
    },
    {
      period: "1206 CE - 1857 CE",
      title: "Medieval & Mughal Dynasties",
      description: "Synthesized Indo-Islamic architecture, giving birth to monuments like the Taj Mahal and classical miniature paintings.",
      badge: "Architectural Boom"
    }
  ];

  const themesData = {
    spiritual: [
      { name: "Ganges River Aarti", loc: "Varanasi, UP", img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop" },
      { name: "Harmandir Sahib Golden Temple", loc: "Amritsar, Punjab", img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=500&auto=format&fit=crop" },
      { name: "Hemis Monastery", loc: "Leh, Ladakh", img: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=500&auto=format&fit=crop" }
    ],
    heritage: [
      { name: "Taj Mahal Marble Mausoleum", loc: "Agra, Uttar Pradesh", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&auto=format&fit=crop" },
      { name: "Hampi Monument Ruins", loc: "Vijayanagara, Karnataka", img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=500&auto=format&fit=crop" },
      { name: "Khajuraho Chandela Sculptures", loc: "Chhatarpur, MP", img: "https://images.unsplash.com/photo-1608958416715-fc93946059d0?w=500&auto=format&fit=crop" }
    ],
    adventure: [
      { name: "High-Altitude Trekking", loc: "Leh & Ladakh Passes", img: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=500&auto=format&fit=crop" },
      { name: "Bir Billing Paragliding", loc: "Kangra Valley, HP", img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop" },
      { name: "River Rafting Currents", loc: "Rishikesh, Uttarakhand", img: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop" }
    ],
    wildlife: [
      { name: "Kaziranga Rhino Safari", loc: "Golaghat, Assam", img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop" },
      { name: "Bengal Tiger Tracking", loc: "Jim Corbett Reserve, UK", img: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=500&auto=format&fit=crop" },
      { name: "Gir Asiatic Lion Sanctuary", loc: "Talala, Gujarat", img: "https://images.unsplash.com/photo-1608958416715-fc93946059d0?w=500&auto=format&fit=crop" }
    ],
    wellness: [
      { name: "Ayurvedic Backwater Spa", loc: "Alappuzha, Kerala", img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop" },
      { name: "Ananda Meditation Retreat", loc: "Garhwal, Uttarakhand", img: "https://images.unsplash.com/photo-1545128485-c400e7702796?w=500&auto=format&fit=crop" }
    ]
  };

  const experienceTabs = [
    { id: 'spiritual', name: 'Spiritual', icon: Flame },
    { id: 'heritage', name: 'Heritage', icon: Award },
    { id: 'adventure', name: 'Adventure', icon: Compass },
    { id: 'wildlife', name: 'Wildlife', icon: Map },
    { id: 'wellness', name: 'Wellness & Yoga', icon: Leaf }
  ] as const;

  // Attractions Carousel Data
  const attractions = [
    { name: "Taj Mahal", loc: "Agra, Uttar Pradesh", img: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=600&auto=format&fit=crop" },
    { name: "Hawa Mahal", loc: "Jaipur, Rajasthan", img: "https://images.unsplash.com/photo-1603262110263-fb0112e7cc33?w=600&auto=format&fit=crop" },
    { name: "Har Ki Pauri", loc: "Haridwar, Uttarakhand", img: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=600&auto=format&fit=crop" },
    { name: "Sri Jagannath Temple", loc: "Puri, Odisha", img: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=600&auto=format&fit=crop" },
    { name: "Red Fort", loc: "Old Delhi", img: "https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=600&auto=format&fit=crop" },
    { name: "Ajanta Caves", loc: "Aurangabad, Maharashtra", img: "https://images.unsplash.com/photo-1608958416755-e7f09f471e62?w=600&auto=format&fit=crop" }
  ];

  // Exquisite Crafts Data
  const crafts = [
    { name: "Bastar Dhokra", loc: "Chhattisgarh", type: "Metal Sculpture", desc: "Ancient lost-wax bell-metal casting method tracing back 4,000 years to the Indus Valley.", img: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=400&auto=format&fit=crop" },
    { name: "Patan Patola", loc: "Gujarat", type: "Double Ikat Silk", desc: "A rare double ikat silk weave from Patan, where warp and weft are tie-dyed before weaving.", img: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=400&auto=format&fit=crop" },
    { name: "Walnut Wood Carving", loc: "Jammu & Kashmir", type: "Handicraft", desc: "Highly skilled hand carving of semi-hard walnut wood showcasing delicate floral motifs.", img: "https://images.unsplash.com/photo-1608958416715-fc93946059d0?w=400&auto=format&fit=crop" },
    { name: "Channapatna Toys", loc: "Karnataka", type: "Lacware Toys", desc: "Bright wooden toys colored using non-toxic natural organic dyes and lacquer polish.", img: "https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=400&auto=format&fit=crop" }
  ];

  // Festivals Data
  const festivals = [
    { name: "Bastar Goncha", loc: "Chhattisgarh", date: "16-19 Jul", desc: "Ancient chariot festival of Bastar celebrating tribal deity representations and mock weaponry shooting." },
    { name: "Bonalu Celebration", loc: "Telangana", date: "26 Jul", desc: "Thanksgiving festival to Goddess Mahakali featuring earthen pots (bonam) decorated with turmeric and neem." },
    { name: "Teej Festival", loc: "Rajasthan", date: "15 Aug", desc: "Monsoon festival honoring Goddess Parvati's union with Lord Shiva, celebrated with swings and cultural processions." },
    { name: "Sri Jagannatha Ratha Yatra", loc: "Odisha", date: "16 Jul", desc: "Grand annual chariot procession pulling massive wooden chariots of Lord Jagannatha and siblings." }
  ];

  const nextCarousel = () => {
    setCarouselIdx((prev) => (prev + 1) % 3);
  };

  const prevCarousel = () => {
    setCarouselIdx((prev) => (prev - 1 + 3) % 3);
  };

  const handleSearchTrip = (e: React.FormEvent) => {
    e.preventDefault();
    const routesMap: Record<string, { price: string; code: string; duration: string; number: string; gate: string; seat: string; safety: string }> = {
      'flights': { price: '₹4,250', code: 'AI-102', duration: '55 mins', number: 'Air India 102', gate: 'Gate 4B', seat: '14A', safety: '9.8' },
      'trains': { price: '₹950', code: 'SHA-12002', duration: '1h 50m', number: 'Shatabdi Express', gate: 'Platform 3', seat: 'Coach C4, 32', safety: '9.6' },
      'buses': { price: '₹650', code: 'VOL-9921', duration: '3h 10m', number: 'Volvo Club Class', gate: 'Bay 12', seat: 'Seat 18', safety: '9.4' },
      'cabs': { price: '₹2,800', code: 'CAB-TAJ', duration: '2h 45m', number: 'Express Sedan', gate: 'Terminal Pick', seat: 'Private', safety: '9.7' }
    };
    setSimulatedTicket(routesMap[transitTab]);
    setShowTicket(true);
  };

  return (
    <div className="home-container">
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/assets/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-6 border-saffron/30">
            <Sparkles className="w-5 h-5 text-gold spin-slow" />
            <span className="text-sm font-semibold tracking-wider text-saffron uppercase">Namaste & Welcome</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 min-h-[80px] leading-tight">
            {typedText}
            <span className="animate-pulse text-saffron">|</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl font-light leading-relaxed">
            India is a country dotted with stunning wildlife diversity and rich traditions. 
            While the Western coast greets you with mouth-watering delicacies, the Eastern part invites you to experience its greenery.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={() => onTabChange('heritage')}
              className="btn-premium"
            >
              Explore Heritage
            </button>
            <button 
              onClick={() => onTabChange('map')}
              className="px-6 py-3 rounded-full border border-white/20 glass-panel hover:border-saffron/50 transition duration-300 text-white font-semibold cursor-pointer"
            >
              Interactive Map
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-xs uppercase tracking-widest text-gray-400">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-saffron rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>

      {/* Main Content Info */}
      <section className="py-24 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text-saffron">Where Science Meets the Sacred</h2>
          <div className="h-1 w-24 bg-gradient-to-r from-saffron to-green mx-auto mb-6 rounded-full" />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Witness the grand Architecture! Experience a civilization that developed advanced surgery, calculated the speed of light, and created profound spiritual systems.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="glass-panel p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-saffron/10 flex items-center justify-center mb-6 border border-saffron/20">
              <Shield className="w-8 h-8 text-saffron" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Prosperous Heritage</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Preserving thousands of years of monuments, physical sites, literature, and art representing absolute human excellence.
            </p>
          </div>

          <div className="glass-panel p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mb-6 border border-gold/20">
              <Award className="w-8 h-8 text-gold" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Paramount Diversity</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              A vibrant tapestry of languages, unique state traditions, religious harmony, and colorful festivals that unite a billion hearts.
            </p>
          </div>

          <div className="glass-panel p-8 text-center flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center mb-6 border border-green/20">
              <Heart className="w-8 h-8 text-green" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-white">Global Philosophy</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Advocating the values of generosity, frugality, and peace through deep ancient wisdom: "Vasudhaiva Kutumbakam" (The World is One Family).
            </p>
          </div>
        </div>
      </section>

      {/* NEW: Attractions Carousel Section */}
      <section className="py-20 bg-slate-950/40 border-y border-border-glass">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4">
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white">Attractions Worth Exploring</h2>
              <p className="text-xs text-gray-500 mt-1">Discover legendary monuments and historical destinations across the sub-continent.</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={prevCarousel}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-saffron/40 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={nextCarousel}
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-saffron/40 hover:bg-white/10 text-gray-400 hover:text-white transition cursor-pointer"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="carousel-wrapper">
            <div 
              className="carousel-track"
              style={{ transform: `translate3d(-${carouselIdx * 25}%, 0px, 0px)` }}
            >
              {attractions.map((att, idx) => (
                <div key={idx} className="carousel-card-item">
                  <div className="glass-panel overflow-hidden group border border-white/5 hover:border-saffron/30 transition-all duration-300 rounded-2xl card-cultural-border flex flex-col h-full">
                    <div className="h-56 relative overflow-hidden">
                      <img 
                        src={att.img} 
                        alt={att.name} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />
                    </div>
                    <div className="p-4 flex-grow flex flex-col justify-end">
                      <span className="text-[10px] font-bold text-saffron uppercase tracking-wider">{att.loc}</span>
                      <h4 className="font-extrabold text-white text-base mt-1 group-hover:text-gold transition duration-300">{att.name}</h4>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Explore by Experience (Incredible India Style) */}
      <section className="py-24 bg-black/30 border-b border-border-glass">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text-saffron">Explore by Experiences</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-saffron to-gold mx-auto mb-6 rounded-full" />
            <p className="text-gray-400 max-w-xl mx-auto">
              India offers a plethora of experiences that cater to all traveler types. Explore by interest themes.
            </p>
          </div>

          {/* Experience Tabs */}
          <div className="flex justify-center flex-wrap gap-4 mb-12">
            {experienceTabs.map(tab => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTheme(tab.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full border text-xs font-bold uppercase tracking-wider transition ${
                    selectedTheme === tab.id 
                      ? 'bg-saffron border-saffron text-white shadow-lg' 
                      : 'bg-white/5 border-white/5 text-gray-400 hover:border-saffron/30 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.name}
                </button>
              );
            })}
          </div>

          {/* Dynamic Theme Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {themesData[selectedTheme].map((card, idx) => (
              <div key={idx} className="experience-card group">
                <img src={card.img} alt={card.name} className="experience-card-img" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10" />
                
                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                  <span className="text-[10px] font-bold text-saffron uppercase tracking-widest">{card.loc}</span>
                  <h4 className="font-extrabold text-white text-lg mt-1 group-hover:text-saffron transition duration-300">{card.name}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: Exquisite Crafts Showcase Section */}
      <section className="py-24 bg-slate-950/60 border-b border-border-glass">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 glow-text-saffron">Exquisite Traditional Crafts</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-saffron to-green mx-auto mb-6 rounded-full" />
            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Discover centuries of handmade excellence representing absolute dedication to geometry, design, and folklore.
            </p>
          </div>

          <div className="craft-card-grid">
            {crafts.map((craft, idx) => (
              <div key={idx} className="glass-panel craft-card flex flex-col card-cultural-border h-full border border-white/5">
                <div className="h-48 relative overflow-hidden">
                  <img src={craft.img} alt={craft.name} className="w-full h-full object-cover" />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-black/60 text-[8px] font-black text-saffron uppercase tracking-wider border border-white/10">
                    {craft.type}
                  </span>
                </div>
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[9px] font-bold text-gold uppercase tracking-wider block">{craft.loc}</span>
                    <h4 className="font-extrabold text-white text-lg mt-1 mb-2">{craft.name}</h4>
                    <p className="text-[11px] text-gray-400 leading-relaxed">{craft.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Eras Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Journey Through Time</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-saffron to-gold mx-auto mb-6 rounded-full" />
            <p className="text-gray-400">Discover the key developmental eras that sculpted modern India</p>
          </div>

          <div className="relative">
            {/* The vertical tracking line */}
            <div className="timeline-connector" style={{ bottom: '40px' }} />

            <div className="space-y-12">
              {eras.map((era, index) => (
                <div key={index} className="timeline-wrapper">
                  {/* Glowing dot representing the node */}
                  <div className="timeline-card-dot" />

                  <div 
                    className="glass-panel p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start hover:border-saffron/30 transition duration-300 relative overflow-hidden card-cultural-border"
                  >
                    {/* Era Badge background subtle */}
                    <div className="absolute right-0 top-0 text-7xl font-bold text-white/5 font-sans pointer-events-none select-none">
                      0{index + 1}
                    </div>
                    
                    <div className="flex-shrink-0 md:w-48">
                      <div className="flex items-center gap-2 text-saffron font-bold text-sm mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{era.period}</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-saffron/10 text-saffron border border-saffron/20 text-xs font-semibold uppercase tracking-wider">
                        {era.badge}
                      </span>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-2xl font-bold text-white mb-3">{era.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{era.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* NEW: Festival Calendar Section ("Every Day a Celebration") */}
      <section className="py-20 bg-slate-950/40 border-t border-border-glass">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Every Day a Celebration</h2>
            <div className="h-1 w-24 bg-gradient-to-r from-saffron to-gold mx-auto mt-4 mb-6 rounded-full" />
            <p className="text-gray-400 text-sm max-w-lg mx-auto">Explore upcoming cultural festivals happening across various regions in India.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {festivals.map((fest, idx) => (
              <div key={idx} className="glass-panel p-5 border border-white/5 flex flex-col gap-4 relative group hover:border-saffron/30 transition-all card-cultural-border">
                <div className="flex justify-between items-start">
                  <div className="festival-date-badge flex-shrink-0">
                    <span className="text-xs uppercase tracking-wider leading-none block font-black">{fest.date.split(' ')[1]}</span>
                    <span className="text-xl font-black block mt-0.5 leading-none">{fest.date.split(' ')[0]}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-saffron/10 text-saffron text-[9px] font-bold uppercase tracking-wider border border-saffron/20">
                    {fest.loc}
                  </span>
                </div>
                <div>
                  <h4 className="font-extrabold text-white text-base mt-2 mb-1 group-hover:text-gold transition duration-300">{fest.name}</h4>
                  <p className="text-[11px] text-gray-400 leading-relaxed mt-1">{fest.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW: SaaS Trip Planner Section ("Inspired? Get Started") */}
      <section className="py-24 bg-slate-950/80 border-t border-border-glass relative overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-saffron/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-green/5 rounded-full blur-[90px] pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black text-white">Inspired? Get Started!</h2>
            <p className="text-gray-400 text-xs md:text-sm mt-3">Plan your route, look up ticket estimates, and check safety indices instantly.</p>
          </div>

          {/* Booking search glass-panel */}
          <div className="glass-panel p-6 border border-white/10 card-cultural-border relative z-20 flex flex-col gap-6">
            
            {/* Planner Transit Tabs */}
            <div className="grid grid-cols-4 gap-2 bg-white/5 p-1 rounded-xl text-xs font-bold border border-white/5">
              <button
                type="button"
                onClick={() => { setTransitTab('flights'); setShowTicket(false); }}
                className={`py-3 rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer border-none bg-transparent ${
                  transitTab === 'flights' ? 'bg-saffron text-white shadow-md' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Plane className="w-4 h-4" />
                <span>Flights</span>
              </button>
              <button
                type="button"
                onClick={() => { setTransitTab('trains'); setShowTicket(false); }}
                className={`py-3 rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer border-none bg-transparent ${
                  transitTab === 'trains' ? 'bg-saffron text-white shadow-md' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Train className="w-4 h-4" />
                <span>Trains</span>
              </button>
              <button
                type="button"
                onClick={() => { setTransitTab('buses'); setShowTicket(false); }}
                className={`py-3 rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer border-none bg-transparent ${
                  transitTab === 'buses' ? 'bg-saffron text-white shadow-md' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Bus className="w-4 h-4" />
                <span>Buses</span>
              </button>
              <button
                type="button"
                onClick={() => { setTransitTab('cabs'); setShowTicket(false); }}
                className={`py-3 rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer border-none bg-transparent ${
                  transitTab === 'cabs' ? 'bg-saffron text-white shadow-md' : 'text-gray-400 hover:text-white'
                }`}
              >
                <Car className="w-4 h-4" />
                <span>Cabs</span>
              </button>
            </div>

            {/* Inputs Form */}
            <form onSubmit={handleSearchTrip} className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-bold text-gray-500 uppercase">From Location</label>
                <input 
                  type="text" 
                  value={fromLoc}
                  onChange={(e) => setFromLoc(e.target.value)}
                  className="glass-input text-xs"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-bold text-gray-500 uppercase">To Destination</label>
                <input 
                  type="text" 
                  value={toLoc}
                  onChange={(e) => setToLoc(e.target.value)}
                  className="glass-input text-xs"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-bold text-gray-500 uppercase">Departure Date</label>
                <input 
                  type="date" 
                  value={departDate}
                  onChange={(e) => setDepartDate(e.target.value)}
                  className="glass-input text-xs"
                  required
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-bold text-gray-500 uppercase">Class Tier</label>
                <select
                  value={ticketClass}
                  onChange={(e) => setTicketClass(e.target.value)}
                  className="glass-input text-xs"
                >
                  <option value="Economy" className="bg-slate-950 text-white">Economy / Sleeper</option>
                  <option value="Premium" className="bg-slate-950 text-white">Premium / 3AC</option>
                  <option value="First" className="bg-slate-950 text-white">First Class / 1AC</option>
                </select>
              </div>

              <div className="md:col-span-4 mt-2">
                <button type="submit" className="btn-premium w-full justify-center text-xs font-bold uppercase tracking-wider py-3.5">
                  <Search className="w-4 h-4" />
                  Search Routes & Generate Boarding Pass
                </button>
              </div>
            </form>

            {/* Generated Mock Boarding Pass */}
            {showTicket && simulatedTicket && (
              <div className="mock-ticket p-6 mt-4 border border-white/10 animate-slide-up flex flex-col md:flex-row justify-between items-center gap-6 print-section">
                
                {/* Left Half: Route Details */}
                <div className="flex-grow space-y-4 text-left w-full">
                  <div className="flex justify-between items-center border-b border-white/5 pb-2">
                    <span className="text-[9px] font-bold text-saffron uppercase tracking-widest flex items-center gap-1">
                      <Ticket className="w-3.5 h-3.5 text-saffron" />
                      BOARDING PASS • SIMULATED ROUTE
                    </span>
                    <span className="text-[9px] text-green bg-green/10 px-2 py-0.5 rounded border border-green/20 font-bold">
                      Safety: {simulatedTicket.safety} / 10
                    </span>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                    <div>
                      <span className="text-[9px] text-gray-500 block uppercase font-bold">Departure Station</span>
                      <p className="font-extrabold text-white mt-0.5">{fromLoc}</p>
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-500 block uppercase font-bold">Destination</span>
                      <p className="font-extrabold text-white mt-0.5">{toLoc}</p>
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-500 block uppercase font-bold">Boarding Date</span>
                      <p className="font-extrabold text-gold mt-0.5">{departDate}</p>
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-500 block uppercase font-bold">Vehicle Info</span>
                      <p className="font-extrabold text-white mt-0.5">{simulatedTicket.number}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs pt-3 border-t border-white/5">
                    <div>
                      <span className="text-[9px] text-gray-500 block uppercase font-bold">Seat / Coach</span>
                      <p className="font-extrabold text-white mt-0.5">{simulatedTicket.seat}</p>
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-500 block uppercase font-bold">Boarding Gate</span>
                      <p className="font-extrabold text-white mt-0.5">{simulatedTicket.gate}</p>
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-500 block uppercase font-bold">Transit Duration</span>
                      <p className="font-extrabold text-white mt-0.5">{simulatedTicket.duration}</p>
                    </div>
                    <div>
                      <span className="text-[9px] text-gray-500 block uppercase font-bold">Estimated Cost</span>
                      <p className="font-extrabold text-green mt-0.5">{simulatedTicket.price}</p>
                    </div>
                  </div>
                </div>

                {/* Vertical Divider for ticket stubs */}
                <div className="hidden md:block w-px border-r border-dashed border-white/25 h-32 mx-2" />

                {/* Right Half: Stub Barcode */}
                <div className="flex flex-col items-center justify-center text-center w-full md:w-48 gap-3 flex-shrink-0">
                  <div className="barcode-sim w-full">
                    <span className="barcode-line w-2" />
                    <span className="barcode-line w-1" />
                    <span className="barcode-line w-3" />
                    <span className="barcode-line w-1" />
                    <span className="barcode-line w-2" />
                    <span className="barcode-line w-4" />
                    <span className="barcode-line w-1" />
                    <span className="barcode-line w-2" />
                    <span className="barcode-line w-1" />
                    <span className="barcode-line w-3" />
                  </div>
                  <div>
                    <span className="text-[8px] font-black text-gray-400 font-mono tracking-widest">{simulatedTicket.code}</span>
                    <button 
                      onClick={() => window.print()}
                      className="mt-3 w-full px-4 py-2 bg-white/5 hover:bg-white/10 text-white rounded-full border border-white/10 hover:border-saffron/40 text-[9px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 cursor-pointer transition"
                    >
                      <Printer className="w-3.5 h-3.5" />
                      Print Boarding Pass
                    </button>
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}
