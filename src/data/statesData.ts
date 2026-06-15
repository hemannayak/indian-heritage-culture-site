export interface CuisineItem {
  name: string;
  description: string;
  image: string;
}

export interface MonumentItem {
  name: string;
  description: string;
  image: string;
  url: string;
}

export interface LiteratureItem {
  lang: string;
  desc: string;
}

export interface PanoramaItem {
  name: string;
  url: string;
}

export interface RegionalEvent {
  name: string;
  date: string;
  link: string;
  description: string;
}

export interface QuickFacts {
  area: string;
  population: string;
  language: string;
  fact: string;
}

export interface StateData {
  name: string;
  id: string;
  type: 'state' | 'ut';
  region: 'North' | 'South' | 'East' | 'West' | 'Central' | 'North-East';
  capital: string;
  left: string;
  top: string;
  history: string;
  cuisine: CuisineItem[];
  monuments: MonumentItem[];
  literature: LiteratureItem[];
  panoramas: PanoramaItem[];
  event: RegionalEvent;
  quickFacts: QuickFacts;
}

export const statesData: StateData[] = [
  {
    name: "Andhra Pradesh",
    id: "andhra-pradesh",
    type: "state",
    region: "South",
    capital: "Amaravati",
    left: "45%",
    top: "70%",
    history: "Andhra Pradesh is mentioned in Sanskrit epics such as Aitareya Brahmana. It was ruled by Satavahanas, Ikshvakus, Eastern Chalukyas, and the Vijayanagara Empire, serving as a historic hub for Buddhism and Hindu architecture.",
    cuisine: [
      { name: "Pootharekulu", description: "A wafer-thin sweet made of rice starch, powdered sugar, ghee, and cardamom.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop" },
      { name: "Gongura Pachadi", description: "Tangy chutney prepared from sorrel leaves, green chilies, and tempering spices.", image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Lepakshi Temple", description: "Famous for its hanging pillars and Vijayanagara style murals.", image: "https://images.unsplash.com/photo-1608958416715-fc93946059d0?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Lepakshi+Veerabhadra+Temple" },
      { name: "Tirumala Venkateswara", description: "One of the most visited Hindu temples in the world.", image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Tirumala+Venkateswara+Temple" }
    ],
    literature: [
      { lang: "Telugu", desc: "Known as the 'Italian of the East'. Formed by Nannayya, Tikkana, and Yerrapragada (the Kavitrayam)." }
    ],
    panoramas: [
      { name: "Lepakshi Hanging Pillar View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.8197771780496!2d77.80735!3d13.802319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb175e119438993%3A0xeab7d81a95e79ff7!2sVeerabhadra%20Temple!5e0!3m2!1sen!2sin!4v1716360000000!5m2!1sen!2sin" }
    ],
    event: {
      name: "Ugadi (Telugu New Year)",
      date: "2027-04-07T00:00:00",
      link: "https://aptourism.gov.in/",
      description: "Celebrating the new year with Ugadi Pachadi, representing six tastes of life."
    },
    quickFacts: {
      area: "162,970 sq km",
      population: "49.5 Million",
      language: "Telugu",
      fact: "India's second longest coastline (~974 km)."
    }
  },
  {
    name: "Arunachal Pradesh",
    id: "arunachal-pradesh",
    type: "state",
    region: "North-East",
    capital: "Itanagar",
    left: "86%",
    top: "30%",
    history: "Known as the 'Land of the Dawn-Lit Mountains'. Mentioned in Kalika Purana and Mahabharata, it is home to numerous indigenous tribes with rich oral traditions and historic Buddhist monasteries.",
    cuisine: [
      { name: "Thukpa", description: "Comforting noodle soup filled with fresh vegetables, local herbs, and meat.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop" },
      { name: "Pike Pila", description: "A unique pickle style made from bamboo shoot, pork fat, and hot chilies.", image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Tawang Monastery", description: "The largest monastery in India and second largest in the world.", image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Tawang+Monastery" }
    ],
    literature: [
      { lang: "Nyishi, Adi, Mishmi", desc: "Primarily rich oral epics, folktales, and contemporary English writing pioneered by Mamang Dai." }
    ],
    panoramas: [
      { name: "Tawang Monastery Virtual Tour", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3513.7846158!2d91.859!3d27.588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375d0458ffffffbf%3A0xe54d24177d48374!2sTawang%20Monastery!5e0!3m2!1sen!2sin!4v1716370000000" }
    ],
    event: {
      name: "Losar Festival",
      date: "2027-02-28T00:00:00",
      link: "https://arunachaltourism.com/",
      description: "Monpa tribe's traditional celebration of the Tibetan New Year with prayers and dances."
    },
    quickFacts: {
      area: "83,743 sq km",
      population: "1.38 Million",
      language: "English, Hindi, tribal dialects",
      fact: "India's easternmost state, seeing the first sunrise in the country."
    }
  },
  {
    name: "Assam",
    id: "assam",
    type: "state",
    region: "North-East",
    capital: "Dispur",
    left: "79%",
    top: "35%",
    history: "Historically called Pragjyotisha or Kamarupa. Ruled by the Ahom dynasty for nearly 600 years, defeating Mughal expansion repeatedly, leaving behind a legacy of Vaishnavite monasteries (Sattras).",
    cuisine: [
      { name: "Masor Tenga", description: "A light, tangy fish curry prepared with tomatoes, lemon, or elephant apple.", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop" },
      { name: "Khar", description: "A unique starter made from ash extract of banana peel cooked with raw papaya.", image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Kamakhya Temple", description: "Renowned hilltop shaktipeeth dedicated to Goddess Kamakhya.", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Kamakhya+Temple" },
      { name: "Rang Ghar", description: "Double-storied royal sports pavilion built by the Ahom kings in Sivasagar.", image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Rang+Ghar+Sivasagar" }
    ],
    literature: [
      { lang: "Assamese", desc: "Rich heritage of buranjis (chronicles) written during the Ahom rule and modern literature led by Lakshminath Bezbaroa." }
    ],
    panoramas: [
      { name: "Kamakhya Temple 360", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5647!2d91.705!3d26.166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a50785ea8494d%3A0xe54d24177d48374!2sKamakhya%20Temple!5e0!3m2!1sen!2sin!4v1716380000000" }
    ],
    event: {
      name: "Bohag Bihu",
      date: "2027-04-14T00:00:00",
      link: "https://tourism.assam.gov.in/",
      description: "Assamese spring festival marking the start of the harvest season with dance and dhol drums."
    },
    quickFacts: {
      area: "78,438 sq km",
      population: "31.2 Million",
      language: "Assamese, Bodo",
      fact: "Home to Kaziranga, shelter of two-thirds of the world's great one-horned rhinoceroses."
    }
  },
  {
    name: "Bihar",
    id: "bihar",
    type: "state",
    region: "East",
    capital: "Patna",
    left: "58%",
    top: "38%",
    history: "The cradle of empires. Ancient Magadha, Maurya, and Gupta dynasties ruled here. Birthplace of Buddhism and Jainism, it was the location of the world's oldest residential university at Nalanda.",
    cuisine: [
      { name: "Litti Chokha", description: "Baked wheat dough balls stuffed with roasted chickpea flour (sattu) served with mashed brinjal and potato.", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Mahabodhi Temple", description: "UNESCO site marking the place where Lord Buddha attained enlightenment.", image: "https://images.unsplash.com/photo-1604537466158-719b1972edd8?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Mahabodhi+Temple+Bodh+Gaya" },
      { name: "Nalanda Ruins", description: "Excavated remains of the ancient 5th-century university.", image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Nalanda+University+Ruins" }
    ],
    literature: [
      { lang: "Maithili & Hindi", desc: "Vidyapati's love poems and renowned modern writers like Ramdhari Singh Dinkar." }
    ],
    panoramas: [
      { name: "Mahabodhi Temple View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.9622!2d84.991!3d24.695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32c3f85ffffff%3A0xe54d24177d48374!2sMahabodhi%20Temple!5e0!3m2!1sen!2sin!4v1716390000000" }
    ],
    event: {
      name: "Chhath Puja",
      date: "2026-11-15T00:00:00",
      link: "https://tourism.bihar.gov.in/",
      description: "Ancient Vedic festival thanking the Sun God on river banks with holy offerings."
    },
    quickFacts: {
      area: "94,163 sq km",
      population: "104 Million",
      language: "Hindi, Maithili, Urdu",
      fact: "Bodh Gaya is the absolute epicenter of international Buddhist pilgrimage."
    }
  },
  {
    name: "Chhattisgarh",
    id: "chhattisgarh",
    type: "state",
    region: "Central",
    capital: "Raipur",
    left: "51%",
    top: "51%",
    history: "Historically known as Dakshina Kosala. Ruled by the Kalachuri and Gond dynasties, Chhattisgarh is known for its heavy forest canopy, rich tribal lifestyle, and pristine waterfalls.",
    cuisine: [
      { name: "Chila", description: "Savory pancake made of fermented rice batter and lentil flour.", image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Sirpur Monuments", description: "Brick temple structures dating to the 7th century.", image: "https://images.unsplash.com/photo-1608958416715-fc93946059d0?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Sirpur+Lakshmana+Temple" }
    ],
    literature: [
      { lang: "Chhattisgarhi", desc: "Rich oral folk epics like Pandavani (traditional Mahabharata musical storytelling)." }
    ],
    panoramas: [
      { name: "Chitrakote Falls View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.293!2d81.53!3d19.23!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2e0eaaaaaa%3A0xe54d24177d48374!2sChitrakote%20Waterfalls!5e0!3m2!1sen!2sin!4v1716400000000" }
    ],
    event: {
      name: "Bastar Dussehra",
      date: "2026-10-19T00:00:00",
      link: "https://chhand.gov.in/",
      description: "A 75-day long tribal festival honoring the local deity Goddess Danteshwari."
    },
    quickFacts: {
      area: "135,192 sq km",
      population: "29.4 Million",
      language: "Chhattisgarhi, Hindi",
      fact: "Widely regarded as the 'rice bowl' of Central India."
    }
  },
  {
    name: "Goa",
    id: "goa",
    type: "state",
    region: "West",
    capital: "Panaji",
    left: "30%",
    top: "70%",
    history: "Goa's unique culture stems from 450 years of Portuguese rule combined with Konkani heritage. Famous ancient trade port, integrated into India in 1961.",
    cuisine: [
      { name: "Goan Fish Curry", description: "Spicy, tangy cod or kingfish cooked in freshly ground coconut paste with kokum.", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop" },
      { name: "Bebinca", description: "Traditional multi-layered Goan dessert made of flour, egg yolk, coconut milk, and ghee.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Basilica of Bom Jesus", description: "Holds the sacred mortal remains of Saint Francis Xavier.", image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Basilica+of+Bom+Jesus" }
    ],
    literature: [
      { lang: "Konkani", desc: "Vibrant local poetry and theatrical acts (Tiatr) that combine social messaging with music." }
    ],
    panoramas: [
      { name: "Basilica of Bom Jesus 360", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3844.757!2d73.911!3d15.501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bbfba7a8aaaaaaf%3A0xe54d24177d48374!2sBasilica%20of%20Bom%20Jesus!5e0!3m2!1sen!2sin!4v1716410000000" }
    ],
    event: {
      name: "Goa Carnival",
      date: "2027-02-06T00:00:00",
      link: "https://goatourism.gov.in/",
      description: "Color-packed street float parades, music, and dances introduced by Portuguese colonizers."
    },
    quickFacts: {
      area: "3,702 sq km",
      population: "1.5 Million",
      language: "Konkani",
      fact: "India's smallest state by area but highest GDP per capita."
    }
  },
  {
    name: "Gujarat",
    id: "gujarat",
    type: "state",
    region: "West",
    capital: "Gandhinagar",
    left: "20%",
    top: "47%",
    history: "Home of the Indus Valley ports (Lothal). Gujarat was a key maritime hub. It is the birthplace of Mahatma Gandhi and Sardar Vallabhbhai Patel, harboring a deep mercantile legacy.",
    cuisine: [
      { name: "Khaman Dhokla", description: "Steamed savory cake made from chickpea flour, seasoned with mustard seeds and curry leaves.", image: "https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Rani ki Vav", description: "Ornate 11th-century stepwell shaped like an inverted temple.", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Rani+ki+Vav+Patan" },
      { name: "Sun Temple, Modhera", description: "Magnificent Solanki-era temple dedicated to the Solar deity.", image: "https://images.unsplash.com/photo-1608958416715-fc93946059d0?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Sun+Temple+Modhera" }
    ],
    literature: [
      { lang: "Gujarati", desc: "Rich devotional poems of Narsinh Mehta and modern literary movement led by K.M. Munshi." }
    ],
    panoramas: [
      { name: "Rani ki Vav Stepwell View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.45!2d72.102!3d23.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c80aaaaaa%3A0xe54d24177d48374!2sRani%20Ki%20Vav!5e0!3m2!1sen!2sin!4v1716420000000" }
    ],
    event: {
      name: "International Kite Festival (Uttarayan)",
      date: "2027-01-14T00:00:00",
      link: "https://www.gujarattourism.com/",
      description: "Massive skyline takeover with millions of colorful kites celebrating winter solstice."
    },
    quickFacts: {
      area: "196,024 sq km",
      population: "60.4 Million",
      language: "Gujarati",
      fact: "Contains the Statue of Unity, the world's tallest statue (182m)."
    }
  },
  {
    name: "Haryana",
    id: "haryana",
    type: "state",
    region: "North",
    capital: "Chandigarh",
    left: "35%",
    top: "28%",
    history: "Cradle of Vedic civilization. The epic battle of Mahabharata was fought in Kurukshetra here. Carved from Punjab in 1966 as a major agricultural and industrial engine.",
    cuisine: [
      { name: "Bajra Khichri", description: "Slow-cooked porridge made of crushed pearl millet and split green gram.", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Kurukshetra Brahma Sarovar", description: "Ancient holy water tank associated with solar eclipses.", image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Brahma+Sarovar+Kurukshetra" }
    ],
    literature: [
      { lang: "Haryanvi & Hindi", desc: "Known for Swang (folk theatre) and satirical poems reflecting rustic life." }
    ],
    panoramas: [
      { name: "Brahma Sarovar Pool View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3457.123!2d76.83!3d29.96!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390e3aaaaaa%3A0xe54d24177d48374!2sBrahma%20Sarovar!5e0!3m2!1sen!2sin!4v1716430000000" }
    ],
    event: {
      name: "Surajkund International Crafts Mela",
      date: "2027-02-01T00:00:00",
      link: "https://www.haryanatourism.gov.in/",
      description: "One of the largest international craft fairs displaying heritage handlooms."
    },
    quickFacts: {
      area: "44,212 sq km",
      population: "25.3 Million",
      language: "Hindi, Haryanvi",
      fact: "Surrounds New Delhi on three sides, creating the Gurgaon industrial hub."
    }
  },
  {
    name: "Himachal Pradesh",
    id: "himachal-pradesh",
    type: "state",
    region: "North",
    capital: "Shimla",
    left: "38%",
    top: "20%",
    history: "The land of snow. Inhabited since prehistoric times, it saw the rise of small hill states (Thakurains) before integrating as a union territory and later a state in 1971.",
    cuisine: [
      { name: "Siddu", description: "Steamed wheat bread stuffed with poppy seeds, walnuts, and local spices served with ghee.", image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&auto=format&fit=crop" },
      { name: "Dham", description: "Traditional multi-course feast served on leaf plates during celebrations.", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Kalka-Shimla Toy Train", description: "UNESCO Heritage narrow-gauge mountain railway built in 1898.", image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Kalka+Shimla+Toy+Train" }
    ],
    literature: [
      { lang: "Pahari", desc: "Rich folklore, mountain ballads, and oral epics of deity worship." }
    ],
    panoramas: [
      { name: "Shimla Mall Road View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3415.75!2d77.17!3d31.10!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39057aaaaaa%3A0xe54d24177d48374!2sMall%20Road%20Shimla!5e0!3m2!1sen!2sin!4v1716440000000" }
    ],
    event: {
      name: "Kullu Dussehra",
      date: "2026-10-20T00:00:00",
      link: "https://himachaltourism.gov.in/",
      description: "Grand congregation of local village gods carried in wooden palanquins."
    },
    quickFacts: {
      area: "55,673 sq km",
      population: "6.8 Million",
      language: "Hindi, Pahari",
      fact: "First state in India to mandate plastic bans and move towards organic agriculture."
    }
  },
  {
    name: "Jharkhand",
    id: "jharkhand",
    type: "state",
    region: "East",
    capital: "Ranchi",
    left: "58%",
    top: "45%",
    history: "Carved from Bihar in 2000, Jharkhand is home to tribal populations like Santals, Mundas, and Oraons, who led historical anti-colonial struggles (Birsa Munda rebellion).",
    cuisine: [
      { name: "Dhooska", description: "Deep-fried savory snack made from rice and chana dal batter served with potato curry.", image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Baidyanath Dham", description: "One of the twelve sacred Jyotirlingas of Lord Shiva in Deoghar.", image: "https://images.unsplash.com/photo-1608958416715-fc93946059d0?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Baidyanath+Temple+Deoghar" }
    ],
    literature: [
      { lang: "Santhali, Mundari", desc: "Written in Ol Chiki script, characterized by rich forest mythology and revolutionary songs." }
    ],
    panoramas: [
      { name: "Deoghar Temple Entrance", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.123!2d86.7!3d24.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f13aaaaaa%3A0xe54d24177d48374!2sBaidyanath%20Temple!5e0!3m2!1sen!2sin!4v1716450000000" }
    ],
    event: {
      name: "Sarhul Festival",
      date: "2027-03-24T00:00:00",
      link: "https://jharkhandtourism.gov.in/",
      description: "Tribal spring festival worshipping trees and nature when Sal flowers bloom."
    },
    quickFacts: {
      area: "79,716 sq km",
      population: "33 Million",
      language: "Hindi, Santhali",
      fact: "Contains over 40% of India's total mineral resource deposits."
    }
  },
  {
    name: "Karnataka",
    id: "karnataka",
    type: "state",
    region: "South",
    capital: "Bengaluru",
    left: "36%",
    top: "73%",
    history: "Home of dynasties like Kadambas, Chalukyas, Rashtrakutas, and Hoysalas. The Vijayanagara Empire built its spectacular capital at Hampi, leaving a legacy of temple building.",
    cuisine: [
      { name: "Bisi Bele Bath", description: "Spicy rice dish cooked with split pigeon peas, tamarind, vegetables, and a unique spice powder.", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop" },
      { name: "Mysore Pak", description: "Rich, crumbly sweet prepared from gram flour, ghee, sugar, and cardamom.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Hampi Ruins", description: "UNESCO site displaying the architectural peak of Vijayanagara Empire.", image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Hampi+UNESCO+World+Heritage+Site" },
      { name: "Mysore Palace", description: "Indo-Saracenic palace, seat of the Wodeyar kings.", image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Mysore+Palace" }
    ],
    literature: [
      { lang: "Kannada", desc: "Oldest recorded language in the south with works like Kavirajamarga. Leads with 8 Jnanpith Awards." }
    ],
    panoramas: [
      { name: "Hampi Stone Chariot View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.123!2d76.467!3d15.335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb77aaaaaa%3A0xe54d24177d48374!2sStone%20Chariot%20Hampi!5e0!3m2!1sen!2sin!4v1716460000000" }
    ],
    event: {
      name: "Mysore Dasara",
      date: "2026-10-11T00:00:00",
      link: "https://karnatakatourism.org/",
      description: "State festival celebrating victory of Chamundeshwari over Mahishasura with elephant parades."
    },
    quickFacts: {
      area: "191,791 sq km",
      population: "61 Million",
      language: "Kannada",
      fact: "Bengaluru is known worldwide as the 'Silicon Valley of India'."
    }
  },
  {
    name: "Kerala",
    id: "kerala",
    type: "state",
    region: "South",
    capital: "Thiruvananthapuram",
    left: "37%",
    top: "86%",
    history: "Kerala was an ancient spice exporter trading with Babylonians, Romans, and Arabs. Home to the Chera Empire, it integrated spice routes into its distinct syncretic culture.",
    cuisine: [
      { name: "Appam with Stew", description: "Soft fermented rice pancakes with a creamy coconut milk vegetable stew.", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Bekal Fort", description: "Giant keyhole-shaped fort bordering the Arabian Sea in Kasaragod.", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Bekal+Fort" }
    ],
    literature: [
      { lang: "Malayalam", desc: "Rooted in classical poetry and modernized by triumvirate poets Kumaran Asan, Vallathol, and Ulloor." }
    ],
    panoramas: [
      { name: "Alleppey Backwaters Virtual", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.123!2d76.35!3d9.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08aaaaaa%3A0xe54d24177d48374!2sAlappuzha%20Backwaters!5e0!3m2!1sen!2sin!4v1716470000000" }
    ],
    event: {
      name: "Onam (Harvest Festival)",
      date: "2026-08-27T00:00:00",
      link: "https://www.keralatourism.org/",
      description: "Welcoming King Mahabali with flower carpets (Pookalam) and Vallam Kali snake boat races."
    },
    quickFacts: {
      area: "38,863 sq km",
      population: "33.4 Million",
      language: "Malayalam",
      fact: "Highest literacy rate (94%) and highest life expectancy in India."
    }
  },
  {
    name: "Madhya Pradesh",
    id: "madhya-pradesh",
    type: "state",
    region: "Central",
    capital: "Bhopal",
    left: "42%",
    top: "46%",
    history: "Heart of India. Ruled by Avanti Mahajanapada, Mauryas, Guptas, and Chandela Rajputs who built the temples of Khajuraho. Harbors central rock shelter paintings dating to the Paleolithic era.",
    cuisine: [
      { name: "Poha Jalebi", description: "Steamed flaked rice topped with sev and served alongside hot syrup-filled jalebis.", image: "https://images.unsplash.com/photo-1589302168068-9646c2e923f1?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Khajuraho Temples", description: "UNESCO site famous for Nagara-style architecture and erotic sculptures.", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Khajuraho+Group+of+Monuments" },
      { name: "Sanchi Stupa", description: "Oldest stone structure in India commissioned by Emperor Ashoka.", image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Sanchi+Stupa" }
    ],
    literature: [
      { lang: "Hindi & Sanskrit", desc: "Birthplace of the legendary poet Kalidasa, writer of Shakuntala and Meghaduta." }
    ],
    panoramas: [
      { name: "Khajuraho Temple 3D View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3641.123!2d79.93!3d24.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39818aaaaaa%3A0xe54d24177d48374!2sKhajuraho%20Temples!5e0!3m2!1sen!2sin!4v1716480000000" }
    ],
    event: {
      name: "Khajuraho Dance Festival",
      date: "2027-02-20T00:00:00",
      link: "https://www.mptourism.com/",
      description: "Indian classical dancers performing against the illuminated backdrop of Khajuraho temples."
    },
    quickFacts: {
      area: "308,252 sq km",
      population: "72.6 Million",
      language: "Hindi",
      fact: "Contains the largest forest cover area among all Indian states."
    }
  },
  {
    name: "Maharashtra",
    id: "maraharashtra",
    type: "state",
    region: "West",
    capital: "Mumbai",
    left: "35%",
    top: "56%",
    history: "Ruled by Satavahanas, Rashtrakutas, and Yadavas. The rise of the Maratha Empire under Chhatrapati Shivaji Maharaj in the 17th century defined Maharashtra's strong military history.",
    cuisine: [
      { name: "Misal Pav", description: "Spicy curry made of sprouted moth beans topped with farsan and served with bread rolls.", image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop" },
      { name: "Vada Pav", description: "Deep fried potato dumpling placed inside a sliced bread bun with chutneys.", image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Gateway of India", description: "Triumphal arch monument constructed during the British Raj in Mumbai.", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Gateway+of+India" },
      { name: "Ajanta & Ellora Caves", description: "Rock-cut caves featuring Buddhist frescoes and monolithic Kailash temple.", image: "https://images.unsplash.com/photo-1608958416715-fc93946059d0?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Ellora+Caves" }
    ],
    literature: [
      { lang: "Marathi", desc: "Saint-poet movements (Sant Dnyaneshwar, Tukaram) and pioneering modern Marathi theater and essays." }
    ],
    panoramas: [
      { name: "Kailash Temple (Ellora)", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.03264426543!2d75.177583!3d20.024833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdbb8c735555555%3A0xd68d71ea407c08fa!2sKailasa%20Temple!5e0!3m2!1sen!2sin!4v1716350000000!5m2!1sen!2sin" }
    ],
    event: {
      name: "Ganesh Chaturthi",
      date: "2026-09-15T00:00:00",
      link: "https://maharashtratourism.gov.in/",
      description: "Huge public celebrations, massive Ganpati idols, and dynamic dhol-tasha music."
    },
    quickFacts: {
      area: "307,713 sq km",
      population: "112.3 Million",
      language: "Marathi",
      fact: "Mumbai is India's financial capital and the home of Bollywood."
    }
  },
  {
    name: "Manipur",
    id: "manipur",
    type: "state",
    region: "North-East",
    capital: "Imphal",
    left: "85%",
    top: "38%",
    history: "A historic princely state, Manipur has a documented history of kings since 33 CE. Famous for introducing Polo to the modern world (Sagol Kangjei) and rich classical dance.",
    cuisine: [
      { name: "Kangshoi", description: "A healthy vegetable stew boiled with dried fish, local herbs, and served hot.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Kangla Fort", description: "Historic seat of Meitei rulers, situated in the heart of Imphal.", image: "https://images.unsplash.com/photo-1608958416715-fc93946059d0?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Kangla+Fort" }
    ],
    literature: [
      { lang: "Manipuri (Meiteilon)", desc: "Ancient chronicle Cheitharol Kumbaba and devotional lyrical songs celebrating Radha-Krishna." }
    ],
    panoramas: [
      { name: "Kangla Fort Palace View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.123!2d93.93!3d24.81!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37493aaaaaa%3A0xe54d24177d48374!2sKangla%20Fort!5e0!3m2!1sen!2sin!4v1716500000000" }
    ],
    event: {
      name: "Sangai Festival",
      date: "2026-11-21T00:00:00",
      link: "https://manipurtourism.gov.in/",
      description: "Grand cultural show displaying Manipuri arts, martial arts (Thang-Ta), and dance."
    },
    quickFacts: {
      area: "22,327 sq km",
      population: "2.8 Million",
      language: "Manipuri",
      fact: "Home to Keibul Lamjao, the world's only floating national park on Loktak Lake."
    }
  },
  {
    name: "Meghalaya",
    id: "meghalaya",
    type: "state",
    region: "North-East",
    capital: "Shillong",
    left: "76%",
    top: "38%",
    history: "The abode of clouds. Home to the Khasi, Jaintia, and Garo tribes, Meghalaya is famous for maintaining matrilineal tribal structures and building double-decker living root bridges.",
    cuisine: [
      { name: "Jadoh", description: "Fragrant short-grain rice cooked with minced meat and local spices.", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Living Root Bridges", description: "Bridges grown organically from the roots of rubber trees by Khasi villagers.", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Living+Root+Bridges+Meghalaya" }
    ],
    literature: [
      { lang: "Khasi & Garo", desc: "Deeply oral folk stories of hills, waterfalls, and nature, recorded recently in Latin script." }
    ],
    panoramas: [
      { name: "Nohkalikai Falls View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.123!2d91.68!3d25.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37507aaaaaa%3A0xe54d24177d48374!2sNohkalikai%20Falls!5e0!3m2!1sen!2sin!4v1716510000000" }
    ],
    event: {
      name: "Shillong Cherry Blossom Festival",
      date: "2026-11-14T00:00:00",
      link: "https://www.meghalayatourism.gov.in/",
      description: "Music and art festival celebrating pink Himalayan cherry blossoms taking over the city."
    },
    quickFacts: {
      area: "22,429 sq km",
      population: "2.9 Million",
      language: "English, Khasi, Garo",
      fact: "Mawsynram is recorded as the wettest place on Earth, receiving 11,872mm rain annually."
    }
  },
  {
    name: "Mizoram",
    id: "mizoram",
    type: "state",
    region: "North-East",
    capital: "Aizawl",
    left: "83%",
    top: "43%",
    history: "Mizoram was a district of Assam before becoming a union territory and later a state in 1987. Known for its strong tribal code of ethics (Tlawmngaihna) and traditional bamboo dance.",
    cuisine: [
      { name: "Bai", description: "Vegetable stew made from bamboo shoot, local vegetables, and pork fat.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Solomon Temple, Aizawl", description: "A massive modern white stone church run by Kohhran Thianghlim.", image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Solomon+Temple+Aizawl" }
    ],
    literature: [
      { lang: "Mizo", desc: "Folklore of tribal heroes, love ballads, and hymns written down post-Christianization." }
    ],
    panoramas: [
      { name: "Aizawl City Overlook", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.123!2d92.71!3d23.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x374d7aaaaaa%3A0xe54d24177d48374!2sAizawl%20Mizoram!5e0!3m2!1sen!2sin!4v1716520000000" }
    ],
    event: {
      name: "Chapchar Kut",
      date: "2027-03-05T00:00:00",
      link: "https://tourism.mizoram.gov.in/",
      description: "Bamboo dance (Cheraw), folk songs, and community feasts marking clearing of forests."
    },
    quickFacts: {
      area: "21,081 sq km",
      population: "1.1 Million",
      language: "Mizo, English",
      fact: "Contains over 90% forest cover, one of the densest green states in India."
    }
  },
  {
    name: "Nagaland",
    id: "nagaland",
    type: "state",
    region: "North-East",
    capital: "Kohima",
    left: "87%",
    top: "34%",
    history: "Inhabited by 16 major Naga tribes, each with distinctive custom shawls and woodcraft. Fought against British incursions, obtaining statehood in 1963.",
    cuisine: [
      { name: "Smoked Pork with Bamboo Shoot", description: "Tender smoked meat cooked in a thick fermented bamboo shoot gravy.", image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Kohima War Cemetery", description: "Memorial to Allied soldiers who died defending India from Japanese invasion.", image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Kohima+War+Cemetery" }
    ],
    literature: [
      { lang: "English & Ao/Naga", desc: "Pioneering tribal narratives written in English, led by Sahitya Akademi winner Easterine Kire." }
    ],
    panoramas: [
      { name: "Kohima War Memorial 360", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3625.123!2d94.1!3d25.66!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37463aaaaaa%3A0xe54d24177d48374!2sKohima%20War%20Cemetery!5e0!3m2!1sen!2sin!4v1716530000000" }
    ],
    event: {
      name: "Hornbill Festival",
      date: "2026-12-01T00:00:00",
      link: "https://tourism.nagaland.gov.in/",
      description: "The 'Festival of Festivals' uniting all 16 tribes in Kisama Heritage Village for dances."
    },
    quickFacts: {
      area: "16,579 sq km",
      population: "1.97 Million",
      language: "English, Nagamese",
      fact: "English is the official state language, used in government and schools."
    }
  },
  {
    name: "Odisha",
    id: "odisha",
    type: "state",
    region: "East",
    capital: "Bhubaneswar",
    left: "57%",
    top: "53%",
    history: "Historically Kalinga. Emperor Ashoka's bloody conquest of Kalinga in 261 BCE prompted his conversion to Buddhism. Famous for medieval Kalinga architecture and temple empires.",
    cuisine: [
      { name: "Pakhala Bhata", description: "Fermented rice dish served with curd, mustard seeds, and fried fish/vegetables.", image: "https://images.unsplash.com/photo-1625220194771-7ebedd0b4a1b?w=500&auto=format&fit=crop" },
      { name: "Chhena Poda", description: "Baked cheese dessert sweetened with sugar syrup, smelling of burnt cardamom.", image: "https://images.unsplash.com/photo-1589302168068-9646c2e923f1?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Konark Sun Temple", description: "UNESCO site built as a gigantic solar chariot with stone wheels.", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Konark+Sun+Temple" },
      { name: "Jagannath Temple, Puri", description: "Major pilgrimage temple famous for the annual Ratha Yatra chariot festival.", image: "https://images.unsplash.com/photo-1608958416715-fc93946059d0?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Jagannath+Temple+Puri" }
    ],
    literature: [
      { lang: "Odia", desc: "Classical language since the 15th-century Mahabharata translation by Sarala Das and Panchasakha poets." }
    ],
    panoramas: [
      { name: "Konark Sun Chariot View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3744.03264426543!2d86.09!3d19.88!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19eaaaaaa%3A0xe54d24177d48374!2sKonark%20Sun%20Temple!5e0!3m2!1sen!2sin!4v1716540000000" }
    ],
    event: {
      name: "Puri Rath Yatra",
      date: "2026-07-06T00:00:00",
      link: "https://odishatourism.gov.in/",
      description: "Deities drawn on massive decorated wooden chariots through the streets of Puri."
    },
    quickFacts: {
      area: "155,707 sq km",
      population: "41.9 Million",
      language: "Odia",
      fact: "Contains Chilika Lake, Asia's largest brackish water lagoon."
    }
  },
  {
    name: "Punjab",
    id: "punjab",
    type: "state",
    region: "North",
    capital: "Chandigarh",
    left: "32%",
    top: "22%",
    history: "Land of Five Rivers. Birthplace of Sikhism under Guru Nanak. Punjab was a wealthy Mughal province and later a sovereign Sikh Empire under Maharaja Ranjit Singh.",
    cuisine: [
      { name: "Sarson ka Saag & Makki ki Roti", description: "Spiced mustard greens curry served with flatbread made of yellow corn flour.", image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Golden Temple (Harmandir Sahib)", description: "The preeminent spiritual site of Sikhism covered in pure gold leaf.", image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Harmandir+Sahib+Golden+Temple" }
    ],
    literature: [
      { lang: "Punjabi", desc: "Sufi literature of Bulleh Shah, Sikh scripture Guru Granth Sahib, and romantic epics like Heer Ranjha by Waris Shah." }
    ],
    panoramas: [
      { name: "Golden Temple Sarovar View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3396.123!2d74.87!3d31.62!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919aaaaaa%3A0xe54d24177d48374!2sGolden%20Temple%20Amritsar!5e0!3m2!1sen!2sin!4v1716550000000" }
    ],
    event: {
      name: "Baisakhi (Harvest & Khalsa Day)",
      date: "2027-04-14T00:00:00",
      link: "https://punjabtourism.punjab.gov.in/",
      description: "Bhangra dances, colorful fairs, and community food halls (langar) celebrating crop harvests."
    },
    quickFacts: {
      area: "50,362 sq km",
      population: "27.7 Million",
      language: "Punjabi",
      fact: "Called the 'Granary of India', leading the green revolution."
    }
  },
  {
    name: "Rajasthan",
    id: "rajasthan",
    type: "state",
    region: "West",
    capital: "Jaipur",
    left: "25%",
    top: "38%",
    history: "Home of Rajput clans who built towering desert forts and palaces. Fought medieval conflicts against Delhi Sultanates, cultivating a legend of chivalry and folk heroism.",
    cuisine: [
      { name: "Dal Baati Churma", description: "Round baked wheat rolls served with spiced lentil curry and sweet crushed wheat mixture.", image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Hawa Mahal", description: "Five-story honeycomb red sandstone palace of winds in Jaipur.", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Hawa+Mahal" },
      { name: "Amer Fort", description: "Hillside Rajput fort overlooking Maota Lake.", image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Amer+Fort" }
    ],
    literature: [
      { lang: "Rajasthani", desc: "Heroic bardic chronicles (Dingal) and bhakti poetry written by saint Mira Bai." }
    ],
    panoramas: [
      { name: "Amer Fort Panorama", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3555.22879555627!2d75.848888!3d26.985556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db1211b81cd7f%3A0xa44f9cfb42e7eb0!2sAmer%20Fort!5e0!3m2!1sen!2sin!4v1716330000000!5m2!1sen!2sin" }
    ],
    event: {
      name: "Pushkar Camel Fair",
      date: "2026-11-18T00:00:00",
      link: "https://www.tourism.rajasthan.gov.in/",
      description: "Huge desert camel trade, cultural games, and holy dips in Pushkar Lake."
    },
    quickFacts: {
      area: "342,239 sq km",
      population: "68.5 Million",
      language: "Hindi, Rajasthani",
      fact: "India's largest state by land area, containing the Thar Desert."
    }
  },
  {
    name: "Sikkim",
    id: "sikkim",
    type: "state",
    region: "North-East",
    capital: "Gangtok",
    left: "67%",
    top: "35%",
    history: "A sovereign Buddhist kingdom ruled by the Namgyal dynasty (Chogyals) since the 17th century, before holding a popular referendum to join India as a state in 1975.",
    cuisine: [
      { name: "Momo", description: "Steamed flour dumplings stuffed with seasoned minced vegetables or meat.", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Rumtek Monastery", description: "Beautiful seat of the Karma Kagyu lineage of Tibetan Buddhism.", image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Rumtek+Monastery" }
    ],
    literature: [
      { lang: "Nepali, Bhutia, Lepcha", desc: "Written and oral narratives explaining the sacred peaks of Kanchenjunga." }
    ],
    panoramas: [
      { name: "Rumtek Monastery Entrance", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3544.123!2d88.58!3d27.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e6aaaaaa%3A0xe54d24177d48374!2sRumtek%20Dharma%20Chakra%20Centre!5e0!3m2!1sen!2sin!4v1716570000000" }
    ],
    event: {
      name: "Losoong Festival",
      date: "2026-12-18T00:00:00",
      link: "https://www.sikkimtourism.gov.in/",
      description: "Sikkimese New Year marked by traditional Cham masked dances at monasteries."
    },
    quickFacts: {
      area: "7,096 sq km",
      population: "610,000",
      language: "Nepali, Sikkimese",
      fact: "India's first fully certified 100% organic agriculture state."
    }
  },
  {
    name: "Tamil Nadu",
    id: "tamil-nadu",
    type: "state",
    region: "South",
    capital: "Chennai",
    left: "43%",
    top: "82%",
    history: "Home of ancient dynasties: Cholas, Cheras, Pandyas, and Pallavas. Cholas built great maritime fleets and massive stone temples, establishing classical Tamil cultural footprints.",
    cuisine: [
      { name: "Masala Dosa", description: "Crisp fermented rice crepe stuffed with spiced potato mash served with sambar and chutneys.", image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Brihadeeswarar Temple", description: "UNESCO site built of granite by Raja Raja Chola I in Thanjavur.", image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Brihadeeswarar+Temple" },
      { name: "Mahabalipuram Shore Temple", description: "7th-century rock-cut monolithic carvings overlooking the bay.", image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Group+of+Monuments+at+Mahabalipuram" }
    ],
    literature: [
      { lang: "Tamil", desc: "One of the world's longest-surviving classical languages, beginning with Sangam literature (Tolkaappiyam)." }
    ],
    panoramas: [
      { name: "Thanjavur Temple Inner Courtyard", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.123!2d79.13!3d10.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baabaaaaaa%3A0xe54d24177d48374!2sBrihadisvara%20Temple!5e0!3m2!1sen!2sin!4v1716580000000" }
    ],
    event: {
      name: "Pongal (Harvest Festival)",
      date: "2027-01-14T00:00:00",
      link: "https://www.tamilnadutourism.tn.gov.in/",
      description: "Cooking sweet rice pudding in earthen pots until it overflows, shouting 'Pongalo Pongal!'"
    },
    quickFacts: {
      area: "130,058 sq km",
      population: "72.1 Million",
      language: "Tamil",
      fact: "Contains the largest number of UNESCO World Heritage sites in India."
    }
  },
  {
    name: "Telangana",
    id: "telangana",
    type: "state",
    region: "South",
    capital: "Hyderabad",
    left: "45%",
    top: "60%",
    history: "Ruled by the Kakatiya dynasty, Bahmani Sultanate, and Qutb Shahis before serving as the royal domain of the Nizams of Hyderabad. Became India's 29th state in 2014.",
    cuisine: [
      { name: "Hyderabadi Biryani", description: "Slow-cooked basmati rice with meat, spices, yogurt, and saffron.", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop" },
      { name: "Sarva Pindi", description: "Savory pancake made of rice flour, chana dal, peanuts, and spices.", image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Golconda Fort", description: "Historic diamond trading fort with advanced acoustics.", image: "https://images.unsplash.com/photo-1608958416715-fc93946059d0?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Golconda+Fort" },
      { name: "Charminar", description: "16th-century landmark mosque built to mark the end of plague.", image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Charminar" }
    ],
    literature: [
      { lang: "Telugu & Urdu", desc: "Home to legendary poets like Bammera Pothana and royal Urdu literary movements under the Nizams." }
    ],
    panoramas: [
      { name: "Golconda Fort 3D View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.4124896796335!2d78.4008693!3d17.3846909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb968ea6aea98f%3A0x6b76ecdfd65a335a!2sGolconda%20Fort!5e0!3m2!1sen!2sin!4v1716328655137!5m2!1sen!2sin" },
      { name: "Charminar Street View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.2323136224357!2d78.4741395!3d17.3617689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb978a632b719b%3A0xe54d24177d48374!2sCharminar!5e0!3m2!1sen!2sin!4v1716329000000!5m2!1sen!2sin" }
    ],
    event: {
      name: "Bathukamma Floral Festival",
      date: "2026-10-10T00:00:00",
      link: "https://telanganatourism.gov.in/",
      description: "Floral festival celebrated by women, forming pyramids of local seasonal flowers."
    },
    quickFacts: {
      area: "112,077 sq km",
      population: "35.1 Million",
      language: "Telugu, Urdu",
      fact: "Home to the Kakatiya Rudreshwara (Ramappa) Temple, a UNESCO site."
    }
  },
  {
    name: "Tripura",
    id: "tripura",
    type: "state",
    region: "North-East",
    capital: "Agartala",
    left: "80%",
    top: "42%",
    history: "Ruled by the Manikya dynasty for centuries, documenting royal lineage in Rajmala chronicles, before joining India as a state in 1972.",
    cuisine: [
      { name: "Mui Borok", description: "Traditional tribal meal cooked with berma (fermented dried fish) and local vegetables.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Unakoti Rock Cut Images", description: "Spectacular giant rock-cut carvings of Shiva dating to the 7th-9th century.", image: "https://images.unsplash.com/photo-1608958416715-fc93946059d0?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Unakoti+Tripura" }
    ],
    literature: [
      { lang: "Kokborok & Bengali", desc: "Folk lyrics and tales about royal kings, updated via Rabindranath Tagore's close royal relations." }
    ],
    panoramas: [
      { name: "Neermahal Palace View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.123!2d91.31!3d23.48!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37536aaaaaa%3A0xe54d24177d48374!2sNeermahal!5e0!3m2!1sen!2sin!4v1716600000000" }
    ],
    event: {
      name: "Kharchi Puja",
      date: "2026-07-21T00:00:00",
      link: "https://tripuratourism.gov.in/",
      description: "Worship of fourteen deities protecting the dynasty and mother earth."
    },
    quickFacts: {
      area: "10,491 sq km",
      population: "3.6 Million",
      language: "Bengali, Kokborok",
      fact: "Surrounded by Bangladesh on three sides, creating close cultural links."
    }
  },
  {
    name: "Uttar Pradesh",
    id: "uttar-pradesh",
    type: "state",
    region: "North",
    capital: "Lucknow",
    left: "47%",
    top: "34%",
    history: "Center of historic empires: Kosala, Maurya, Gupta, Kannauj, and Mughals. The Nawabs of Awadh nurtured classical arts, while Agra served as the capital of the Mughal Empire.",
    cuisine: [
      { name: "Galouti Kebab", description: "Mouth-melting minced lamb patties seasoned with over 150 local spices.", image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=500&auto=format&fit=crop" },
      { name: "Peda", description: "Traditional sweet fudge made from thickened milk solids (khoya) and sugar.", image: "https://images.unsplash.com/photo-1589302168068-9646c2e923f1?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Taj Mahal", description: "UNESCO monument and modern wonder built by Shah Jahan in memory of Mumtaz Mahal.", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Taj+Mahal" },
      { name: "Fatehpur Sikri", description: "16th-century fortified capital city built by Mughal Emperor Akbar.", image: "https://images.unsplash.com/photo-1608958416715-fc93946059d0?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Fatehpur+Sikri" }
    ],
    literature: [
      { lang: "Hindi & Urdu", desc: "Produced iconic poets Kabirdas, Tulsidas (Ramcharitmanas), and Urdu giants like Mirza Ghalib." }
    ],
    panoramas: [
      { name: "Taj Mahal Gardens View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3540.123!2d78.04!3d27.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974aaaaaa%3A0xe54d24177d48374!2sTaj%20Mahal!5e0!3m2!1sen!2sin!4v1716610000000" }
    ],
    event: {
      name: "Lathmar Holi",
      date: "2027-03-17T00:00:00",
      link: "https://up-tourism.com/",
      description: "Festive celebration in Barsana where women beat men with wooden sticks playfully."
    },
    quickFacts: {
      area: "240,928 sq km",
      population: "200 Million",
      language: "Hindi, Urdu",
      fact: "Most populous state in India and primary center of Hindi politics."
    }
  },
  {
    name: "Uttarakhand",
    id: "uttarakhand",
    type: "state",
    region: "North",
    capital: "Dehradun",
    left: "42%",
    top: "24%",
    history: "Known as 'Devbhumi' (Land of the Gods). Ruled by the Katyuri and Chand dynasties, Uttarakhand contains major Himalayan peaks and is the source of the holy rivers Ganga and Yamuna.",
    cuisine: [
      { name: "Kafuli", description: "A thick green leafy dish prepared from spinach, fenugreek leaves, and rice paste.", image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Kedarnath Temple", description: "Ancient stone temple dedicated to Lord Shiva situated in the Garhwal Himalayas.", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Kedarnath+Temple" }
    ],
    literature: [
      { lang: "Kumaoni & Garhwali", desc: "Rich epic folk songs (Jagar) sung to invoke local deities." }
    ],
    panoramas: [
      { name: "Kedarnath Temple Frontage", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.123!2d79.06!3d30.73!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908aaaaaa%3A0xe54d24177d48374!2sKedarnath%20Temple!5e0!3m2!1sen!2sin!4v1716620000000" }
    ],
    event: {
      name: "Ganga Aarti (Rishikesh)",
      date: "2026-11-20T00:00:00",
      link: "https://uttarakhandtourism.gov.in/",
      description: "Sunset rituals with fire lamps, prayers, and chants on the banks of river Ganges."
    },
    quickFacts: {
      area: "53,483 sq km",
      population: "10.1 Million",
      language: "Hindi, Sanskrit",
      fact: "Sanskrit is declared as the second official language of the state."
    }
  },
  {
    name: "West Bengal",
    id: "west-bengal",
    type: "state",
    region: "East",
    capital: "Kolkata",
    left: "64%",
    top: "46%",
    history: "Ancient Gauda and Vanga. West Bengal was the epicenter of the British East India Company. It led the 19th-century Bengal Renaissance, initiating modern Indian literature, reform, and sciences.",
    cuisine: [
      { name: "Rosogolla", description: "Soft, spongy cottage cheese balls soaked in clear sugar syrup.", image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=500&auto=format&fit=crop" },
      { name: "Sorse Ilish", description: "Hilsa fish cooked in a sharp mustard and green chili paste.", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Victoria Memorial", description: "Grand white marble monument built during the British Raj in Kolkata.", image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Victoria+Memorial" }
    ],
    literature: [
      { lang: "Bengali", desc: "Produced Nobel laureate Rabindranath Tagore, author of India's national anthem, and Bankim Chandra Chattopadhyay." }
    ],
    panoramas: [
      { name: "Victoria Memorial Grounds View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.757!2d88.34!3d22.54!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027aaaaaa%3A0xe54d24177d48374!2sVictoria%20Memorial!5e0!3m2!1sen!2sin!4v1716630000000" }
    ],
    event: {
      name: "Durga Puja",
      date: "2026-10-15T00:00:00",
      link: "https://www.wbtourismgov.in/",
      description: "Huge public art pandals displaying clay idols of Goddess Durga, recognized by UNESCO."
    },
    quickFacts: {
      area: "88,752 sq km",
      population: "91.3 Million",
      language: "Bengali, English",
      fact: "Contains the Sundarbans, the world's largest mangrove forest and home of Bengal Tigers."
    }
  },
  {
    name: "Delhi",
    id: "delhi",
    type: "ut",
    region: "North",
    capital: "New Delhi",
    left: "38%",
    top: "30%",
    history: "The political heart of India. Ancient Indraprastha of Mahabharata, Delhi has been sacked and rebuilt eight times by Tomar Rajputs, Delhi Sultanates, and Mughals.",
    cuisine: [
      { name: "Chole Bhature", description: "Spiced chickpea curry paired with deep-fried puffy leavened flatbread.", image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=500&auto=format&fit=crop" },
      { name: "Butter Chicken", description: "Tender tandoori chicken cooked in a smooth, creamy tomato and butter gravy.", image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Red Fort", description: "Mughal imperial fort constructed of red sandstone in Old Delhi.", image: "https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Red+Fort" },
      { name: "Qutub Minar", description: "73-meter tall red sandstone minaret dating back to the 12th century.", image: "https://images.unsplash.com/photo-1608958416715-fc93946059d0?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Qutub+Minar" }
    ],
    literature: [
      { lang: "Urdu, Hindi, Punjabi", desc: "Center of Urdu Mushairas and court poetry of Mirza Ghalib, Mir Taqi Mir, and Zauq." }
    ],
    panoramas: [
      { name: "Red Fort Gate Street View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.91238965!2d77.24105!3d28.6562!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd1b00000001%3A0xe54d24177d48374!2sRed%20Fort!5e0!3m2!1sen!2sin!4v1716340000000!5m2!1sen!2sin" }
    ],
    event: {
      name: "India Art Fair",
      date: "2027-02-05T00:00:00",
      link: "https://indiaartfair.in/",
      description: "Huge annual exhibition of contemporary South Asian art and design."
    },
    quickFacts: {
      area: "1,484 sq km",
      population: "16.7 Million",
      language: "Hindi, English, Punjabi",
      fact: "Contains New Delhi, the official capital of India, housing the Parliament."
    }
  },
  {
    name: "Jammu and Kashmir",
    id: "jammu-kashmir",
    type: "ut",
    region: "North",
    capital: "Srinagar",
    left: "34%",
    top: "14%",
    history: "A historic center of Sanskrit culture, Shaivism, and Sufism. Ruled by Kashmira kings, Mughals, and Dogra rulers, J&K was reorganized into a union territory in 2019.",
    cuisine: [
      { name: "Rogan Josh", description: "Spicy lamb curry flavored with Kashmiri red chilies and local spices.", image: "https://images.unsplash.com/photo-1547825407-2d060104b7f8?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Shalimar Bagh", description: "Beautiful Mughal terraced garden built by Jahangir in Srinagar.", image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Shalimar+Bagh" }
    ],
    literature: [
      { lang: "Kashmiri", desc: "Devotional poems of Lal Ded and Sufi lyrics of Nund Reshi." }
    ],
    panoramas: [
      { name: "Dal Lake Shikara View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3300.123!2d74.87!3d34.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1aaaaaa%3A0xe54d24177d48374!2sDal%20Lake!5e0!3m2!1sen!2sin!4v1716650000000" }
    ],
    event: {
      name: "Srinagar Tulip Festival",
      date: "2027-04-05T00:00:00",
      link: "https://jktourism.jk.gov.in/",
      description: "Millions of blooming tulips framed by the Zabarwan range."
    },
    quickFacts: {
      area: "42,241 sq km",
      population: "12.2 Million",
      language: "Kashmiri, Urdu, Dogri",
      fact: "Called 'Paradise on Earth' for its snow peaks and lakes."
    }
  },
  {
    name: "Ladakh",
    id: "ladakh",
    type: "ut",
    region: "North",
    capital: "Leh",
    left: "42%",
    top: "9%",
    history: "A trans-Himalayan high-altitude desert closely linked with Tibetan culture. Formerly part of J&K, it became a separate union territory in 2019.",
    cuisine: [
      { name: "Skyu", description: "Traditional Ladakhi pasta stew cooked with vegetables and wheat dough balls.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Leh Palace", description: "9-story royal palace built in the 17th century, resembling Lhasa's Potala.", image: "https://images.unsplash.com/photo-1540959733332-eab4deceeaf7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Leh+Palace" }
    ],
    literature: [
      { lang: "Ladakhi & Tibetan", desc: "Buddhist scriptures, mountain songs, and oral epics of Gesar." }
    ],
    panoramas: [
      { name: "Pangong Tso Lake View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.123!2d78.9!3d33.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e3aaaaaa%3A0xe54d24177d48374!2sPangong%20Tso!5e0!3m2!1sen!2sin!4v1716660000000" }
    ],
    event: {
      name: "Hemis Festival",
      date: "2026-06-25T00:00:00",
      link: "https://tourism.ladakh.gov.in/",
      description: "Religious masked dances (Cham) at Hemis Monastery commemorating Guru Padmasambhava."
    },
    quickFacts: {
      area: "59,146 sq km",
      population: "274,000",
      language: "Ladakhi, Tibetan",
      fact: "Contains the highest motorable roads in the world, like Khardung La."
    }
  },
  {
    name: "Puducherry",
    id: "puducherry",
    type: "ut",
    region: "South",
    capital: "Puducherry",
    left: "46%",
    top: "79%",
    history: "Former French colonial enclave, Puducherry maintains French street layout, colonial architecture, and mixed Franco-Tamil heritage. Formed in 1962.",
    cuisine: [
      { name: "Creole Fish Curry", description: "Local fish curry cooked with coconut milk and French-styled seasoning paste (vadouvan).", image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=500&auto=format&fit=crop" }
    ],
    monuments: [
      { name: "Auroville Matrimandir", description: "Golden metallic sphere representing human unity and silence.", image: "https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=500&auto=format&fit=crop", url: "https://www.google.com/search?q=Matrimandir+Auroville" }
    ],
    literature: [
      { lang: "French & Tamil", desc: "Philosophical writings of Sri Aurobindo and Tamil poet Subramania Bharati." }
    ],
    panoramas: [
      { name: "Matrimandir Auroville View", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3902.123!2d79.81!3d12.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba0aaaaaa%3A0xe54d24177d48374!2sMatrimandir!5e0!3m2!1sen!2sin!4v1716670000000" }
    ],
    event: {
      name: "International Yoga Festival",
      date: "2027-01-04T00:00:00",
      link: "https://tourism.py.gov.in/",
      description: "Huge annual gathering of yoga practitioners from all over the globe."
    },
    quickFacts: {
      area: "479 sq km",
      population: "1.2 Million",
      language: "Tamil, French, English",
      fact: "Retains a vibrant French Quarter ('Ville Blanche') with colonial buildings."
    }
  }
];
