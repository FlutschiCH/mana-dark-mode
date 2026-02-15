import { Badge } from "@/components/ui/badge"
import { ChevronRight, BookOpen, Zap, Shield, Flame } from "lucide-react"
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-slate-100 typography-sans">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-red-600 rounded-full flex items-center justify-center">
              <span className="font-bold text-xs">M</span>
            </div>
            <span className="font-bold text-xl tracking-tighter typography-serif">MANA DARK</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <a href="#" className="hover:text-purple-400 transition-colors">Meta Reports</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Deck Techs</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Strategy</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Market</a>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <section className="relative mb-20">
          <div className="mythic-border rounded-2xl overflow-hidden bg-zinc-900 flex flex-col md:flex-row min-h-[500px]">
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center">
              <Badge variant="outline" className="mb-4 border-amber-500/50 text-amber-500 bg-amber-500/10">
                Latest Set Deep Dive
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 typography-serif leading-tight">
                {/* Changed 'Slivers' to 'Slivers of the Mists' as per user request */}
                Slivers of the Mists: <br />
                <span className="mana-text-gradient">All Will Be One</span>
              </h1>
              <p className="text-slate-400 text-lg mb-8 max-w-lg">
                The compleation of the multiverse begins here. We break down the most impactful mechanics, 
                the mythic staples, and how the oil counters are warping the current Standard meta.
              </p>
              <div className="flex gap-4">
                <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all">
                  {/* Changed 'Read the Meta' to 'View more' as per user request */}
                  View more <ChevronRight size={18} />
                </button>
                <button className="border border-white/10 hover:bg-white/5 px-8 py-4 rounded-lg font-bold transition-all">
                  View Set Gallery
                </button>
              </div>
            </div>
            <div className="flex-1 bg-[url('https://images.unsplash.com/photo-1614850523296-d8c1af93d400?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60 md:opacity-100">
              <div className="w-full h-full bg-gradient-to-r from-zinc-900 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* Deck Techs Grid */}
        <section className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold typography-serif">Top Tier Deck Techs</h2>
            <a href="#" className="text-purple-400 text-sm font-medium flex items-center gap-1">
              View all decks <ChevronRight size={16} />
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
              { title: "Dimir Midrange", colors: "UB", icon: <Shield className="text-purple-400" /> },
              { title: "Mono-Red Aggro", colors: "R", icon: <Flame className="text-red-500" /> },
              { title: "Esper Control", colors: "WUB", icon: <Zap className="text-blue-400" /> }
            ].map((deck, i) => (
              <div key={i} className="card-frame group cursor-pointer">
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-white/5 rounded-lg group-hover:bg-purple-500/10 transition-colors">
                    {deck.icon}
                  </div>
                  <div className="flex gap-1">
                    {deck.colors.split('').map(c => (
                      <div key={c} className="w-4 h-4 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center text-[8px] font-bold">
                        {c}
                      </div>
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{deck.title}</h3>
                <p className="text-slate-500 text-sm mb-4">
                  A comprehensive guide to mastering the latest iteration of {deck.title} in the current competitive landscape.
                </p>
                <div className="flex items-center gap-4 text-xs font-medium text-slate-400">
                  <span>Win Rate: 58%</span>
                  <span>•</span>
                  <span>Tier 1</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Strategy Guides */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold typography-serif">Strategy Guides</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="flex gap-6 p-6 rounded-xl border border-white/5 hover:bg-white/5 transition-colors group cursor-pointer">
                <div className="w-32 h-32 bg-zinc-800 rounded-lg shrink-0 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-zinc-700 to-zinc-900" />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-2">Strategy</Badge>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-500 transition-colors">
                    {i === 1 ? "Mastering the Stack: Advanced Priority" : "Sideboarding Against the Current Meta"}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2">
                    Deep dive into the technical aspects of the game that separate the pros from the grinders. 
                    Learn how to leverage every phase of the turn.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 mt-20 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-slate-500 text-sm">
            © 2024 Mana Dark. All rights reserved. Wizards of the Coast is a trademark of Hasbro.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><BookOpen size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Zap size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App