import React, { useState, useEffect } from 'react';
import { Star, Trash2, Calendar, FileText, Upload, Sparkles, X, ThumbsUp, Tag, Award } from 'lucide-react';

interface Review {
  id: number;
  title: string;
  content: string;
  experience: string;
  rating: number;
  suggestion: string;
  category: 'Cuisine' | 'Heritage' | 'Festival' | 'Adventure' | 'Wellness';
  upvotes: number;
  author: {
    name: string;
    level: 'Elite Guide' | 'Local Explorer' | 'Sufi Nomad' | 'Novice Traveler';
    avatar: string;
  };
  mediaUrl?: string;
  mediaType?: 'image' | 'video';
  date: string;
}

export default function Blog() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [experience, setExperience] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [category, setCategory] = useState<'Cuisine' | 'Heritage' | 'Festival' | 'Adventure' | 'Wellness'>('Heritage');
  const [mediaFile, setMediaFile] = useState<File | null>(null);
  const [mediaPreview, setMediaPreview] = useState<string | null>(null);

  const [activeFilter, setActiveFilter] = useState<string>('All');

  // Load reviews from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('indian_culture_reviews_v2');
    if (saved) {
      setReviews(JSON.parse(saved));
    } else {
      // Default placeholder reviews
      const placeholders: Review[] = [
        {
          id: 1,
          title: "Sunrise Magic at Taj Mahal",
          content: "Standing in front of the Taj Mahal at sunrise was absolutely spiritual. The white marble changes colors from soft grey to glowing pink as the sun rises, casting a beautiful orange-gold hue across the dome.",
          experience: "Magical Sunrise Visit",
          rating: 5,
          category: "Heritage",
          upvotes: 42,
          author: {
            name: "Apurba Nandi",
            level: "Elite Guide",
            avatar: "🏯"
          },
          suggestion: "Arrive at the ticket counter by 5:30 AM to beat the long entry lines.",
          mediaUrl: "https://images.unsplash.com/photo-1548013146-72479768bada?w=600&auto=format&fit=crop",
          mediaType: "image",
          date: "Jun 10, 2026"
        },
        {
          id: 2,
          title: "Unraveling the Flavors of Old Delhi",
          content: "Spiced Chole Bhature at Chandni Chowk is an explosion of cardamom, coriander, and chili. Served hot with sweet jalebis, this represents the culinary soul of North India.",
          experience: "Culinary Heritage Walk",
          rating: 5,
          category: "Cuisine",
          upvotes: 28,
          author: {
            name: "Hemanth Nayak",
            level: "Sufi Nomad",
            avatar: "🍛"
          },
          suggestion: "Drink bottled water and try only highly active shops with rapid cooking turnovers.",
          mediaUrl: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?w=600&auto=format&fit=crop",
          mediaType: "image",
          date: "Jun 14, 2026"
        }
      ];
      setReviews(placeholders);
      localStorage.setItem('indian_culture_reviews_v2', JSON.stringify(placeholders));
    }
  }, []);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setMediaFile(file);
      setMediaPreview(URL.createObjectURL(file));
    }
  };

  const handleRemoveFile = () => {
    setMediaFile(null);
    if (mediaPreview) {
      URL.revokeObjectURL(mediaPreview);
      setMediaPreview(null);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content || rating === 0) {
      alert("Please fill in Title, Content, and select a Star Rating!");
      return;
    }

    const newReview: Review = {
      id: Date.now(),
      title,
      content,
      experience,
      rating,
      category,
      upvotes: 0,
      author: {
        name: "Anonymous Explorer",
        level: "Novice Traveler",
        avatar: "🧭"
      },
      suggestion,
      mediaUrl: mediaPreview || undefined,
      mediaType: mediaFile?.type.startsWith('video') ? 'video' : 'image',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    };

    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem('indian_culture_reviews_v2', JSON.stringify(updated));

    // Clear form
    setTitle('');
    setContent('');
    setExperience('');
    setSuggestion('');
    setRating(0);
    setMediaFile(null);
    setMediaPreview(null);
  };

  const handleDeleteReview = (id: number) => {
    const updated = reviews.filter(r => r.id !== id);
    setReviews(updated);
    localStorage.setItem('indian_culture_reviews_v2', JSON.stringify(updated));
  };

  const handleUpvote = (id: number) => {
    const updated = reviews.map(rev => {
      if (rev.id === id) {
        return { ...rev, upvotes: rev.upvotes + 1 };
      }
      return rev;
    });
    setReviews(updated);
    localStorage.setItem('indian_culture_reviews_v2', JSON.stringify(updated));
  };

  // Compute filters
  const filteredReviews = reviews.filter(rev => {
    return activeFilter === 'All' || rev.category === activeFilter;
  });

  // Calculate stats
  const totalRatings = reviews.length || 1;
  const ratingBreakdown = [5, 4, 3, 2, 1].map(stars => {
    const count = reviews.filter(r => r.rating === stars).length;
    return {
      stars,
      pct: Math.round((count / totalRatings) * 100)
    };
  });

  const avgRating = (reviews.reduce((acc, curr) => acc + curr.rating, 0) / (reviews.length || 1)).toFixed(1);

  return (
    <div className="py-24 px-4 max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-start">
      {/* Blog Feed Column */}
      <div className="flex-1 w-full order-2 lg:order-1 flex flex-col gap-6">
        
        {/* Forum Header & Filter bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-4">
          <div>
            <h2 className="text-3xl font-black text-white flex items-center gap-3">
              <Calendar className="w-8 h-8 text-saffron" />
              Travelers Forum
            </h2>
            <p className="text-xs text-gray-500 mt-1">Read reviews, tips, and cultural stories shared by global nomads.</p>
          </div>

          <div className="flex gap-2 overflow-x-auto scrollbar-none w-full md:w-auto">
            {['All', 'Heritage', 'Cuisine', 'Festival', 'Adventure', 'Wellness'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition cursor-pointer whitespace-nowrap ${
                  activeFilter === cat 
                    ? 'bg-saffron border-saffron text-white' 
                    : 'bg-white/5 border-white/5 text-gray-400 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Reviews Feed */}
        <div className="space-y-6">
          {filteredReviews.map((rev) => (
            <div 
              key={rev.id} 
              className="glass-panel p-6 flex flex-col md:flex-row gap-6 relative group overflow-hidden border border-white/5 card-cultural-border"
            >
              {/* Delete button */}
              <button 
                onClick={() => handleDeleteReview(rev.id)}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-red-500/10 text-gray-500 hover:text-red-500 transition z-10 bg-transparent border-none cursor-pointer"
              >
                <Trash2 className="w-4 h-4" />
              </button>

              {/* Author Info Column */}
              <div className="md:w-36 flex flex-col items-center text-center border-r border-white/5 pr-4 flex-shrink-0">
                <div className="text-4xl mb-2">{rev.author.avatar}</div>
                <h4 className="text-xs font-extrabold text-white line-clamp-1">{rev.author.name}</h4>
                <div className="flex items-center gap-1 mt-1 px-2.5 py-0.5 rounded-full bg-saffron/10 border border-saffron/20 text-[8px] font-black text-saffron uppercase tracking-widest">
                  <Award className="w-2.5 h-2.5" />
                  {rev.author.level}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-grow flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-500 font-semibold">{rev.date}</span>
                      <span className="text-gray-600">•</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 border border-white/5 text-[9px] font-bold text-gray-400 uppercase tracking-wider">
                        {rev.category}
                      </span>
                    </div>

                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`w-3.5 h-3.5 ${star <= rev.rating ? 'fill-gold text-gold' : 'text-gray-600'}`} 
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{rev.title}</h3>
                  {rev.experience && (
                    <span className="text-xs font-semibold text-gold tracking-wide uppercase block mb-3">
                      {rev.experience}
                    </span>
                  )}
                  
                  <p className="text-gray-400 text-xs leading-relaxed mb-4">{rev.content}</p>

                  {rev.suggestion && (
                    <div className="p-3 bg-white/5 border border-white/5 rounded-xl text-[10px] text-gray-400 leading-relaxed mb-4">
                      <strong className="text-saffron">Tip:</strong> {rev.suggestion}
                    </div>
                  )}
                </div>

                {/* Media and Upvote Footer */}
                <div className="flex justify-between items-center pt-3 border-t border-white/5 mt-2">
                  <button
                    onClick={() => handleUpvote(rev.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold text-gray-400 hover:text-white hover:border-saffron/40 transition cursor-pointer"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    Helpful ({rev.upvotes})
                  </button>

                  {rev.mediaUrl && (
                    <a 
                      href={rev.mediaUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[10px] text-saffron hover:underline font-bold flex items-center gap-1"
                    >
                      <Tag className="w-3 h-3" />
                      View Image Attachment
                    </a>
                  )}
                </div>

              </div>
            </div>
          ))}

          {filteredReviews.length === 0 && (
            <div className="text-center py-20 text-gray-500 glass-panel">
              <FileText className="w-12 h-12 mx-auto mb-4 text-gray-600 animate-pulse" />
              <p>No reviews found matching the category filter.</p>
            </div>
          )}
        </div>
      </div>

      {/* Blog Submission Panel */}
      <div className="w-full lg:w-96 order-1 lg:order-2 space-y-8">
        
        {/* Forum Stats Summary */}
        <div className="glass-panel p-6 border border-white/5 space-y-4 card-cultural-border">
          <h3 className="text-lg font-bold text-white border-b border-white/5 pb-2">Community Ratings</h3>
          <div className="flex items-center gap-4">
            <span className="text-4xl font-black text-saffron">{avgRating}</span>
            <div>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    className={`w-4 h-4 ${star <= Math.round(Number(avgRating)) ? 'fill-gold text-gold' : 'text-gray-600'}`} 
                  />
                ))}
              </div>
              <span className="text-[10px] text-gray-500 mt-1 block">Based on {reviews.length} traveler reviews</span>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            {ratingBreakdown.map((row, idx) => (
              <div key={idx} className="flex items-center justify-between text-[10px] text-gray-400">
                <span className="w-8 font-bold">{row.stars} Star</span>
                <div className="flex-grow mx-3 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="bg-saffron h-full rounded-full" style={{ width: `${row.pct}%` }} />
                </div>
                <span className="w-6 text-right font-semibold">{row.pct}%</span>
              </div>
            ))}
          </div>
        </div>

        {/* Review Form */}
        <div className="glass-panel p-6 border border-white/5 card-cultural-border">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-saffron" />
            Share Your Experience
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5 flex flex-col">
            <div className="flex flex-col">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Blogging Title</label>
              <input 
                type="text" 
                placeholder="Give your trip/topic a title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="glass-input text-sm"
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value as any)}
                  className="glass-input text-xs"
                >
                  <option value="Heritage" className="bg-slate-950">Heritage Tour</option>
                  <option value="Cuisine" className="bg-slate-950">Local Cuisine</option>
                  <option value="Festival" className="bg-slate-950">Festival Visit</option>
                  <option value="Adventure" className="bg-slate-950">Outdoor Sport</option>
                  <option value="Wellness" className="bg-slate-950">Yoga & Spa</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Experience Tag</label>
                <input 
                  type="text" 
                  placeholder="e.g. Divine Temples"
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="glass-input text-sm"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Trip Content</label>
              <textarea 
                placeholder="Tell us the story of your experience..."
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="glass-input text-sm resize-none"
                required
              />
            </div>

            {/* Media Upload */}
            <div className="flex flex-col">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Add Media Link (Unsplash/Imgur)</label>
              {mediaPreview ? (
                <div className="relative rounded-xl overflow-hidden border border-white/15 h-36 bg-black">
                  <img src={mediaPreview} alt="upload preview" className="w-full h-full object-cover" />
                  <button 
                    type="button"
                    onClick={handleRemoveFile}
                    className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 hover:bg-black text-gray-400 hover:text-white transition bg-transparent border-none cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <label className="border border-dashed border-white/10 hover:border-saffron/40 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer transition bg-white/5">
                  <Upload className="w-8 h-8 text-gray-500 mb-2" />
                  <span className="text-xs text-gray-400">Click to upload image/video</span>
                  <input 
                    type="file" 
                    accept="image/*,video/*" 
                    onChange={handleFileChange}
                    className="hidden" 
                  />
                </label>
              )}
            </div>

            {/* Star Rating */}
            <div className="flex flex-col items-center py-2 bg-white/5 rounded-xl border border-white/5">
              <span className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Overall Rating</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    type="button"
                    key={star}
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 focus:outline-none transition transform hover:scale-110 bg-transparent border-none cursor-pointer"
                  >
                    <Star 
                      className={`w-6 h-6 ${
                        star <= (hoverRating || rating) ? 'fill-gold text-gold' : 'text-gray-600'
                      }`} 
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Suggestions</label>
              <textarea 
                placeholder="Any advice or warnings for other travelers?"
                rows={2}
                value={suggestion}
                onChange={(e) => setSuggestion(e.target.value)}
                className="glass-input text-sm resize-none"
              />
            </div>

            <button type="submit" className="btn-premium w-full justify-center text-sm">
              Post Experience
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
