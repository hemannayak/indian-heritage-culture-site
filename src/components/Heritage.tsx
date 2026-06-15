import { useState } from 'react';
import { Search, Compass, Landmark, Flame, Utensils, MapPin, Palette, Award, HelpCircle, RefreshCw, CheckCircle, XCircle } from 'lucide-react';

interface HeritageItem {
  id: string;
  category: 'monuments' | 'festivals' | 'cuisine' | 'unesco' | 'arts' | 'dance';
  title: string;
  subtitle?: string;
  description: string;
  image: string;
  details?: string[];
}

interface TriviaQuestion {
  question: string;
  options: string[];
  answer: string;
  explanation: string;
}

export default function Heritage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Trivia Quiz State
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  const categories = [
    { id: 'all', name: 'All Heritage', icon: Compass },
    { id: 'monuments', name: 'Monuments', icon: Landmark },
    { id: 'festivals', name: 'Festivals', icon: Flame },
    { id: 'cuisine', name: 'Cuisine', icon: Utensils },
    { id: 'unesco', name: 'UNESCO Sites', icon: MapPin },
    { id: 'arts', name: 'Arts & Architecture', icon: Palette },
    { id: 'dance', name: 'Dance Forms', icon: Award }
  ];

  const heritageItems: HeritageItem[] = [
    {
      id: 'taj-mahal',
      category: 'monuments',
      title: 'Taj Mahal',
      subtitle: 'Agra, Uttar Pradesh',
      description: 'An ivory-white marble mausoleum on the south bank of the Yamuna river. Commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&auto=format&fit=crop&q=80',
      details: ['Built over 20 years', 'Combines Persian and Mughal architecture', 'One of the New Seven Wonders of the World']
    },
    {
      id: 'qutub-minar',
      category: 'monuments',
      title: 'Qutub Minar',
      subtitle: 'New Delhi',
      description: 'A 73-metre tall minaret that forms part of the Qutb complex, a UNESCO World Heritage Site. It is a five-story tower constructed of red sandstone and marble, covered with intricate carvings and verses from the Quran.',
      image: 'https://images.unsplash.com/photo-1585123334904-845d60e97b29?w=800&auto=format&fit=crop&q=80',
      details: ['Built starting in 1199 CE', 'Tallest brick minaret in the world', 'Surrounded by ancient ruins and the famous Iron Pillar']
    },
    {
      id: 'konark-sun',
      category: 'monuments',
      title: 'Konark Sun Temple',
      subtitle: 'Puri, Odisha',
      description: 'A 13th-century CE Sun Temple, shaped like a colossal chariot with stone wheels, pillars, and walls. Dedicated to the Hindu Sun God Surya, it is a masterpiece of Kalinga architecture.',
      image: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?w=800&auto=format&fit=crop&q=80',
      details: ['24 intricately carved stone wheels', 'Built by King Narasimhadeva I', 'Designed to capture the first rays of the sun']
    },
    {
      id: 'diwali',
      category: 'festivals',
      title: 'Diwali',
      subtitle: 'Festival of Lights',
      description: 'Diwali symbolizes the spiritual victory of light over darkness, good over evil, and knowledge over ignorance. Houses are decorated with clay lamps (diyas), colorful rangolis, and spectacular fireworks.',
      image: 'https://images.unsplash.com/photo-1605649487212-47bdab064df7?w=800&auto=format&fit=crop&q=80',
      details: ['Marks Lord Rama\'s return to Ayodhya', 'Worship of Lakshmi, goddess of wealth', 'Celebrated across five consecutive days']
    },
    {
      id: 'holi',
      category: 'festivals',
      title: 'Holi',
      subtitle: 'Festival of Colors',
      description: 'A popular ancient Hindu festival, also known as the "Festival of Spring", the "Festival of Colors", or the "Festival of Love". It celebrates the arrival of spring and the triumph of good over evil.',
      image: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?w=800&auto=format&fit=crop&q=80',
      details: ['Celebrated with organic colors (gulal)', 'Signifies gathering of communities', 'Marks bonfire burning of Holika']
    },
    {
      id: 'indian-cuisine',
      category: 'cuisine',
      title: 'Spices & Flavors',
      subtitle: 'Culinary Heritage',
      description: 'Indian culinary arts are defined by the sophisticated use of spices, herbs, and locally sourced vegetables, grains, and fruits. Each state presents its own distinct culinary identity based on climate and regional cultures.',
      image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=800&auto=format&fit=crop&q=80',
      details: ['Traditional use of Ayurvedic spice blending', 'Signature tandoor and clay oven techniques', 'Vast array of vegetarian choices']
    },
    {
      id: 'ajanta-ellora',
      category: 'unesco',
      title: 'Ajanta & Ellora Caves',
      subtitle: 'Aurangabad, Maharashtra',
      description: 'Rock-cut cave monuments containing absolute masterpieces of Buddhist, Hindu, and Jain art. Ellora features the Kailash Temple—the largest monolithic rock excavation in the world.',
      image: 'https://images.unsplash.com/photo-1608958416755-e7f09f471e62?w=800&auto=format&fit=crop&q=80',
      details: ['Dating from 2nd century BCE to 10th century CE', 'Kailash Temple carved from top to bottom', 'Stunning ancient frescoes and wall paintings']
    },
    {
      id: 'bharatanatyam',
      category: 'dance',
      title: 'Bharatanatyam',
      subtitle: 'Classical Dance of Tamil Nadu',
      description: 'One of the oldest classical dance traditions of India, expressing South Indian religious themes and devotions. Known for its fixed upper torso, bent legs, and spectacular footwork combined with stylized sign language (Mudras).',
      image: 'https://images.unsplash.com/photo-1583089892943-e02e5b017b6a?w=800&auto=format&fit=crop&q=80',
      details: ['Originates from ancient temples (Sadir)', 'Accompanied by Carnatic classical music', 'Includes expressive mime (Abhinaya)']
    },
    {
      id: 'kathakali',
      category: 'dance',
      title: 'Kathakali',
      subtitle: 'Dance-Drama of Kerala',
      description: 'Distinguished by its colorful make-up, elaborate costumes, and detailed face gestures. Performers enact stories from the epics using specialized mudras and dramatic mime.',
      image: 'https://images.unsplash.com/photo-1545128485-c400e7702796?w=800&auto=format&fit=crop&q=80',
      details: ['Elaborate makeup takes up to 4 hours', 'Traditional green-painted face represents noble characters', 'Combines dance, music, drama, and martial arts']
    }
  ];

  const triviaQuestions: TriviaQuestion[] = [
    {
      question: "Which Indian emperor embraced Buddhism after witnessing the bloodshed of the Kalinga War?",
      options: ["Chandragupta Maurya", "Emperor Ashoka", "Harsha", "Samudragupta"],
      answer: "Emperor Ashoka",
      explanation: "Emperor Ashoka the Great embraced Buddhism in 261 BCE after seeing the destruction and deaths during the Battle of Kalinga."
    },
    {
      question: "Which classical dance form from Kerala features green face paint and heavy costume dramas?",
      options: ["Kathak", "Kathakali", "Bharatanatyam", "Kuchipudi"],
      answer: "Kathakali",
      explanation: "Kathakali actors use elaborate makeup (Vesham) including a green mask (Paccha) to represent noble characters and gods."
    },
    {
      question: "The massive monolithic rock-cut Kailash Temple is located at which UNESCO site?",
      options: ["Ajanta Caves", "Elephanta Caves", "Ellora Caves", "Bhimbetka Shelters"],
      answer: "Ellora Caves",
      explanation: "Kailash Temple (Cave 16) at Ellora Caves in Maharashtra is the world's largest monolithic rock excavation, carved top-down."
    },
    {
      question: "Which royal monument in Jaipur contains 953 small window slits called Jharokhas?",
      options: ["Amer Fort", "City Palace", "Hawa Mahal", "Jal Mahal"],
      answer: "Hawa Mahal",
      explanation: "Hawa Mahal (Palace of Winds) was built in 1799 to allow royal women to observe street festivals without being seen."
    }
  ];

  const filteredItems = heritageItems.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          (item.subtitle && item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Quiz click handler
  const handleAnswerSubmit = (option: string) => {
    if (showFeedback) return;
    setSelectedAnswer(option);
    setShowFeedback(true);
    if (option === triviaQuestions[currentQuestionIdx].answer) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    setShowFeedback(false);
    if (currentQuestionIdx < triviaQuestions.length - 1) {
      setCurrentQuestionIdx(prev => prev + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setShowFeedback(false);
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <div className="py-24 px-4 max-w-7xl mx-auto flex flex-col gap-16">
      
      {/* Search & Categories Section */}
      <div>
        {/* Title & Search */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 glow-text-saffron">Heritage & Culture</h1>
          <p className="text-gray-400 mb-8 text-base md:text-lg">
            Embark on a voyage to explore the architectural landmarks, sacred festivals, diverse culinary arts, and classical dances of India.
          </p>

          {/* Search Bar */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search monuments, festivals, dances..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/5 border border-border-glass rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-saffron/50 focus:ring-1 focus:ring-saffron/50 transition duration-300"
            />
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-3 overflow-x-auto pb-6 mb-12 scrollbar-none justify-start md:justify-center">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full border transition-all duration-300 whitespace-nowrap font-medium text-xs md:text-sm cursor-pointer ${
                  isActive 
                    ? 'bg-saffron text-white border-saffron shadow-lg shadow-saffron/20' 
                    : 'bg-white/5 border-border-glass text-gray-300 hover:border-saffron/40 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Heritage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id} 
              className="glass-panel overflow-hidden group flex flex-col h-full border border-white/5 hover:border-saffron/30 transition-all duration-300 rounded-2xl card-cultural-border"
            >
              {/* Image section with hover zoom */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-black/60 backdrop-blur-md rounded-full border border-white/10 text-xs font-semibold uppercase tracking-wider text-saffron">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-saffron transition-colors duration-300">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <span className="text-sm text-gold font-medium mb-4 block">
                    {item.subtitle}
                  </span>
                )}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>

                {/* Bullet details */}
                {item.details && (
                  <ul className="space-y-2 border-t border-white/5 pt-4" style={{ listStyle: 'none' }}>
                    {item.details.map((detail, idx) => (
                      <li key={idx} className="text-xs text-gray-400 flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No heritage items match your search.</p>
          </div>
        )}
      </div>

      {/* Cultural Trivia Quiz Section (Incredible India Style) */}
      <div className="max-w-3xl mx-auto w-full border-t border-white/5 pt-16">
        <div className="glass-panel p-8 border border-white/5 relative overflow-hidden card-cultural-border">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-saffron/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-extrabold text-white flex items-center justify-center gap-2 mb-2">
              <HelpCircle className="w-8 h-8 text-saffron spin-slow" />
              Cultural Trivia Challenge
            </h2>
            <p className="text-xs text-gray-400">
              Test your knowledge of Indian historical monuments, classical dances, and kingdoms!
            </p>
          </div>

          {!quizFinished ? (
            <div className="space-y-6">
              {/* Question card header */}
              <div className="flex justify-between items-center text-xs text-gray-400 border-b border-white/5 pb-3">
                <span>Question {currentQuestionIdx + 1} of {triviaQuestions.length}</span>
                <span>Active Score: {score}</span>
              </div>

              {/* Question text */}
              <h3 className="text-xl font-bold text-white text-center leading-relaxed">
                {triviaQuestions[currentQuestionIdx].question}
              </h3>

              {/* Options list */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {triviaQuestions[currentQuestionIdx].options.map((option, oIdx) => {
                  const isSelected = selectedAnswer === option;
                  const isCorrect = option === triviaQuestions[currentQuestionIdx].answer;
                  
                  let buttonStyle = 'bg-white/5 border-white/5 hover:bg-white/10 text-gray-300';
                  if (showFeedback) {
                    if (isCorrect) {
                      buttonStyle = 'bg-green-500/20 border-green-500/50 text-green font-bold';
                    } else if (isSelected) {
                      buttonStyle = 'bg-red-500/20 border-red-500/50 text-red-400 font-bold';
                    } else {
                      buttonStyle = 'bg-white/5 border-white/5 text-gray-500 opacity-60';
                    }
                  }

                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleAnswerSubmit(option)}
                      className={`w-full p-4 rounded-xl border text-left text-sm transition-all duration-300 flex items-center justify-between cursor-pointer ${buttonStyle}`}
                      disabled={showFeedback}
                    >
                      <span>{option}</span>
                      {showFeedback && isCorrect && <CheckCircle className="w-4 h-4 text-green" />}
                      {showFeedback && isSelected && !isCorrect && <XCircle className="w-4 h-4 text-red-400" />}
                    </button>
                  );
                })}
              </div>

              {/* Explanatory feedback */}
              {showFeedback && (
                <div className="p-4 rounded-xl bg-white/5 border border-white/5 space-y-3 animate-fade-in text-center">
                  <p className="text-xs text-gray-300 leading-relaxed font-medium">
                    {triviaQuestions[currentQuestionIdx].explanation}
                  </p>
                  <button 
                    onClick={handleNextQuestion}
                    className="btn-premium py-2 px-6 text-xs justify-center"
                  >
                    {currentQuestionIdx < triviaQuestions.length - 1 ? "Next Question" : "View Results"}
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="text-center py-8 space-y-6">
              <Award className="w-16 h-16 mx-auto text-gold animate-bounce" />
              <div>
                <h3 className="text-2xl font-black text-white">Quiz Completed!</h3>
                <p className="text-sm text-gray-400 mt-2">
                  You scored <span className="text-saffron font-bold">{score}</span> out of <span className="text-white font-bold">{triviaQuestions.length}</span>.
                </p>
                <p className="text-xs text-gray-500 mt-1.5 max-w-sm mx-auto leading-relaxed">
                  {score === triviaQuestions.length 
                    ? "Absolute Maharaja! Your knowledge of Indian heritage is supreme." 
                    : "Fantastic effort! Every journey is an opportunity to learn more."}
                </p>
              </div>

              <button 
                onClick={restartQuiz}
                className="px-6 py-3 rounded-full border border-saffron/50 bg-saffron/10 hover:bg-saffron/20 transition text-saffron text-xs font-bold uppercase tracking-wider flex items-center gap-2 mx-auto cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                Play Again
              </button>
            </div>
          )}

        </div>
      </div>

    </div>
  );
}
