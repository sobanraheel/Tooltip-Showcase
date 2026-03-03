import { Info, HelpCircle, Settings, User, Bell, Share2, Heart, MessageSquare, ExternalLink, Github, Twitter, Mail } from 'lucide-react';
import { Tooltip } from './components/Tooltip';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header className="max-w-5xl mx-auto pt-20 pb-12 px-6">
        <h1 className="text-5xl font-bold tracking-tight mb-4 bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
          Tooltip Gallery
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl leading-relaxed">
          A collection of versatile, animated tooltip layouts designed for clarity and elegance. 
          Built with React, Tailwind CSS, and Motion.
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-24 space-y-20">
        
        {/* Section: Basic Positions */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px flex-1 bg-slate-200" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 px-4">Directional Layouts</h2>
            <div className="h-px flex-1 bg-slate-200" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <Tooltip content="Tooltip on top" position="top">
                <button className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
                  <Info className="w-6 h-6 text-slate-600" />
                </button>
              </Tooltip>
              <span className="text-xs font-medium text-slate-500">Top</span>
            </div>

            <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <Tooltip content="Tooltip on bottom" position="bottom">
                <button className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
                  <HelpCircle className="w-6 h-6 text-slate-600" />
                </button>
              </Tooltip>
              <span className="text-xs font-medium text-slate-500">Bottom</span>
            </div>

            <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <Tooltip content="Tooltip on left" position="left">
                <button className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
                  <Settings className="w-6 h-6 text-slate-600" />
                </button>
              </Tooltip>
              <span className="text-xs font-medium text-slate-500">Left</span>
            </div>

            <div className="flex flex-col items-center gap-4 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm">
              <Tooltip content="Tooltip on right" position="right">
                <button className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
                  <User className="w-6 h-6 text-slate-600" />
                </button>
              </Tooltip>
              <span className="text-xs font-medium text-slate-500">Right</span>
            </div>
          </div>
        </section>

        {/* Section: Visual Variants */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px flex-1 bg-slate-200" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 px-4">Visual Styles</h2>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Dark Variant */}
            <div className="p-8 bg-slate-900 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-6">
              <Tooltip content="Dark theme tooltip" variant="dark">
                <button className="px-6 py-2.5 bg-white text-slate-900 font-semibold rounded-lg hover:bg-slate-100 transition-colors">
                  Dark Tooltip
                </button>
              </Tooltip>
              <p className="text-xs text-slate-400 text-center">High contrast for dark backgrounds</p>
            </div>

            {/* Glass Variant */}
            <div className="p-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-xl flex flex-col items-center justify-center gap-6">
              <Tooltip content="Frosted glass effect" variant="glass">
                <button className="px-6 py-2.5 bg-white/20 backdrop-blur-sm text-white border border-white/30 font-semibold rounded-lg hover:bg-white/30 transition-colors">
                  Glass Tooltip
                </button>
              </Tooltip>
              <p className="text-xs text-white/60 text-center">Modern frosted glass aesthetic</p>
            </div>

            {/* Default Variant */}
            <div className="p-8 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center justify-center gap-6">
              <Tooltip content="Clean and simple" variant="default">
                <button className="px-6 py-2.5 bg-slate-100 text-slate-900 font-semibold rounded-lg hover:bg-slate-200 transition-colors">
                  Default Tooltip
                </button>
              </Tooltip>
              <p className="text-xs text-slate-400 text-center">Minimalist standard design</p>
            </div>
          </div>
        </section>

        {/* Section: Rich Content */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px flex-1 bg-slate-200" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 px-4">Rich Content Layouts</h2>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* User Profile Tooltip */}
            <div className="p-10 bg-white rounded-3xl border border-slate-200 shadow-sm flex items-center justify-center">
              <Tooltip 
                variant="rich"
                position="top"
                content={
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <img 
                        src="https://picsum.photos/seed/avatar/40/40" 
                        alt="Avatar" 
                        className="w-10 h-10 rounded-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="font-bold text-slate-900 leading-none">Sarah Jenkins</h4>
                        <p className="text-xs text-slate-500 mt-1">Product Designer</p>
                      </div>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Passionate about building intuitive interfaces and accessible design systems.
                    </p>
                    <div className="flex gap-2 pt-1">
                      <button className="p-1.5 rounded-md bg-slate-100 hover:bg-slate-200 transition-colors">
                        <Twitter className="w-3.5 h-3.5 text-slate-600" />
                      </button>
                      <button className="p-1.5 rounded-md bg-slate-100 hover:bg-slate-200 transition-colors">
                        <Github className="w-3.5 h-3.5 text-slate-600" />
                      </button>
                      <button className="p-1.5 rounded-md bg-slate-100 hover:bg-slate-200 transition-colors">
                        <Mail className="w-3.5 h-3.5 text-slate-600" />
                      </button>
                    </div>
                  </div>
                }
              >
                <div className="flex items-center gap-3 cursor-pointer group">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md ring-2 ring-slate-100 group-hover:ring-indigo-200 transition-all">
                    <img 
                      src="https://picsum.photos/seed/avatar/48/48" 
                      alt="User" 
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="font-medium text-slate-700 group-hover:text-indigo-600 transition-colors">View Profile</span>
                </div>
              </Tooltip>
            </div>

            {/* Action Preview Tooltip */}
            <div className="p-10 bg-white rounded-3xl border border-slate-200 shadow-sm flex items-center justify-center">
              <Tooltip 
                variant="rich"
                position="bottom"
                content={
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Notification</span>
                      <span className="text-[10px] text-slate-400">2m ago</span>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center flex-shrink-0">
                        <Bell className="w-4 h-4 text-indigo-600" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-900">New message received</p>
                        <p className="text-[11px] text-slate-500 mt-0.5">Alex sent you a file for review.</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="flex-1 py-1.5 text-[11px] font-bold bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
                        View Message
                      </button>
                      <button className="px-3 py-1.5 text-[11px] font-bold bg-slate-100 text-slate-600 rounded-md hover:bg-slate-200 transition-colors">
                        Dismiss
                      </button>
                    </div>
                  </div>
                }
              >
                <button className="relative p-4 bg-slate-50 rounded-2xl hover:bg-slate-100 transition-all border border-slate-200 group">
                  <Bell className="w-6 h-6 text-slate-600 group-hover:text-indigo-600 transition-colors" />
                  <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 border-2 border-white rounded-full" />
                </button>
              </Tooltip>
            </div>
          </div>
        </section>

        {/* Section: Interactive Elements */}
        <section>
          <div className="flex items-center gap-2 mb-8">
            <div className="h-px flex-1 bg-slate-200" />
            <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-400 px-4">Interactive Triggers</h2>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Tooltip content="Add to favorites" position="top">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium hover:border-pink-200 hover:text-pink-600 transition-all shadow-sm">
                <Heart className="w-4 h-4" />
                <span>Like</span>
              </button>
            </Tooltip>

            <Tooltip content="Share with friends" position="top">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium hover:border-indigo-200 hover:text-indigo-600 transition-all shadow-sm">
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </Tooltip>

            <Tooltip content="Start a conversation" position="top">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium hover:border-emerald-200 hover:text-emerald-600 transition-all shadow-sm">
                <MessageSquare className="w-4 h-4" />
                <span>Comment</span>
              </button>
            </Tooltip>

            <Tooltip content="Open in new tab" position="top">
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium hover:border-slate-300 transition-all shadow-sm">
                <ExternalLink className="w-4 h-4" />
                <span>External</span>
              </button>
            </Tooltip>
          </div>
        </section>
      </main>
    </div>
  );
}
