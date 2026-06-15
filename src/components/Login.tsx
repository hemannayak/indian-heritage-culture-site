import { useState } from 'react';
import type { FormEvent } from 'react';
import { Mail, Lock, User, Sparkles, Compass, ShieldCheck } from 'lucide-react';

interface LoginProps {
  onLoginSuccess?: (email: string, role: string) => void;
}

export default function Login({ onLoginSuccess }: LoginProps) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [role, setRole] = useState<'traveler' | 'guide'>('guide');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (onLoginSuccess) {
      onLoginSuccess(email, role);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Decorative blurred blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-saffron/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Main glass container */}
      <div className="w-full max-w-4xl min-h-[580px] rounded-3xl glass-panel overflow-hidden border border-white/10 relative flex flex-col md:flex-row card-cultural-border">
        
        {/* Toggle/Overlay Panel */}
        <div className={`w-full md:w-1/2 p-10 flex flex-col justify-center items-center text-center relative z-25 transition-all duration-500 bg-cover bg-center ${
          isSignUp ? 'md:order-last' : ''
        }`}
          style={{ backgroundImage: `linear-gradient(rgba(11, 15, 25, 0.8), rgba(11, 15, 25, 0.85)), url('/assets/Login.jpg')` }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron/20 border border-saffron/30 mb-6">
            <Sparkles className="w-4 h-4 text-gold spin-slow" />
            <span className="text-[10px] font-bold text-saffron uppercase tracking-widest">Incredible!ndia</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
            {isSignUp ? "Already a Member?" : "Hello, Friend!"}
          </h2>
          <p className="text-sm text-gray-400 mb-8 max-w-xs leading-relaxed">
            {isSignUp 
              ? "To keep connected with us please login with your personal account details." 
              : "Enter your personal details and start your cultural journey with us."}
          </p>
          <button
            onClick={() => setIsSignUp(!isSignUp)}
            className="px-8 py-3 rounded-full border border-saffron text-saffron font-bold text-sm hover:bg-saffron hover:text-white transition duration-300 shadow-lg shadow-saffron/15 cursor-pointer bg-transparent"
          >
            {isSignUp ? "Sign In" : "Sign Up"}
          </button>
        </div>

        {/* Form Panel */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-black/20">
          <div className="mb-6">
            <h2 className="text-3xl font-extrabold text-white mb-2">
              {isSignUp ? "Create Account" : "Sign In"}
            </h2>
            <p className="text-xs text-gray-500">
              {isSignUp ? "Join Code Veda's cultural platform" : "Welcome back! Access your personalized travel desk"}
            </p>
          </div>

          {/* Custom Role Selector */}
          <div className="grid grid-cols-2 gap-2 bg-white/5 p-1 rounded-xl mb-6 text-xs font-bold border border-white/5">
            <button
              type="button"
              onClick={() => setRole('traveler')}
              className={`py-2.5 rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer border-none bg-transparent ${
                role === 'traveler' ? 'bg-saffron text-white shadow-md' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Compass className="w-4 h-4" />
              Traveler
            </button>
            <button
              type="button"
              onClick={() => setRole('guide')}
              className={`py-2.5 rounded-lg flex items-center justify-center gap-1.5 transition cursor-pointer border-none bg-transparent ${
                role === 'guide' ? 'bg-saffron text-white shadow-md' : 'text-gray-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              Certified Guide
            </button>
          </div>

          {/* Role Benefit Tag */}
          <div className="mb-5 p-3 rounded-xl bg-white/5 border border-white/5 text-[10px] text-gray-400 leading-relaxed text-center font-medium">
            {role === 'guide' 
              ? "Guide access unlocks the Route Planner, printable Itinerary Designer, and state translation cheat sheets."
              : "Traveler access allows posting experiences, upvoting reviews, and checking map countdowns."}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 flex flex-col">
            {isSignUp && (
              <div className="flex flex-col relative">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Full Name</label>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="glass-input pl-10 w-full text-sm"
                    required
                  />
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500" />
                </div>
              </div>
            )}

            <div className="flex flex-col relative">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Email Address</label>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="glass-input pl-10 w-full text-sm"
                  required
                />
                  <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500" />
              </div>
            </div>

            <div className="flex flex-col relative">
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-wider">Password</label>
                {!isSignUp && (
                  <a href="#" className="text-xs text-saffron hover:underline font-semibold" style={{ textDecoration: 'none' }}>Forgot?</a>
                )}
              </div>
              <div className="relative">
                <input 
                  type="password" 
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="glass-input pl-10 w-full text-sm"
                  required
                />
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-500" />
              </div>
            </div>

            <button type="submit" className="btn-premium w-full justify-center mt-2 text-sm cursor-pointer">
              {isSignUp ? "Register Account" : role === 'guide' ? "Access Guide Portal" : "Enter Traveler Desk"}
            </button>
          </form>

          {/* Social Logins */}
          <div className="mt-6 text-center">
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/5"></div></div>
              <div className="relative text-[10px] text-gray-600 uppercase tracking-wider bg-transparent inline-block px-3">Or continue with</div>
            </div>
            
            <div className="flex justify-center gap-4">
              <button className="p-3 rounded-full bg-white/5 border border-border-glass text-gray-400 hover:text-white hover:border-saffron/40 hover:bg-white/10 transition cursor-pointer bg-transparent">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </button>
              <button className="p-3 rounded-full bg-white/5 border border-border-glass text-gray-400 hover:text-white hover:border-saffron/40 hover:bg-white/10 transition font-bold text-sm cursor-pointer bg-transparent">
                G
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
