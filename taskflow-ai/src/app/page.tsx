import { Navbar } from "@/components/marketing/navbar"
import { Hero } from "@/components/marketing/hero"
import { Features } from "@/components/marketing/features"
import { AISection } from "@/components/marketing/ai-section"
import { Check } from "lucide-react"

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <Hero />
      <Features />
      <AISection />
      
      {/* Pricing Section */}
      <section id="pricing" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">Choose your speed</h2>
            <p className="text-gray-400">Scale your productivity with TaskFlow AI.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "0",
                desc: "Perfect for students and freelancers.",
                features: ["Unlimited Tasks", "AI Task Breakdown (10/mo)", "Kanban & List View", "Basic Analytics"]
              },
              {
                name: "Pro",
                price: "19",
                popular: true,
                desc: "For high achievers and professionals.",
                features: ["Everything in Starter", "Unlimited AI Breakdown", "Focus Mode & Timer", "Advanced Heatmaps", "Team Workspaces"]
              },
              {
                name: "Enterprise",
                price: "49",
                desc: "Custom solutions for large teams.",
                features: ["Everything in Pro", "Custom AI Training", "Dedicated Support", "SSO & Security", "Advanced API Access"]
              }
            ].map((plan, i) => (
              <div 
                key={i}
                className={`p-8 rounded-3xl border ${plan.popular ? 'border-indigo-500 bg-indigo-500/5' : 'border-white/10 bg-white/[0.02]'} flex flex-col`}
              >
                {plan.popular && (
                   <span className="bg-indigo-600 text-white text-[10px] font-bold px-3 py-1 rounded-full w-fit mb-4">MOST POPULAR</span>
                )}
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-gray-500">/mo</span>
                </div>
                <p className="text-sm text-gray-400 mb-8">{plan.desc}</p>
                <div className="space-y-4 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex gap-3 items-start text-sm text-gray-300">
                      <Check className="w-4 h-4 text-indigo-500 flex-shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-4 rounded-xl font-bold transition-all ${plan.popular ? 'bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-500/20' : 'bg-white/5 hover:bg-white/10'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 bg-black">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 rounded bg-indigo-600" />
              <span className="font-bold">TaskFlow AI</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              Building the future of productivity through intelligent engineering and design.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-500">
               <li><a href="#" className="hover:text-white">Features</a></li>
               <li><a href="#" className="hover:text-white">AI Engine</a></li>
               <li><a href="#" className="hover:text-white">Integrations</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-500">
               <li><a href="#" className="hover:text-white">About</a></li>
               <li><a href="#" className="hover:text-white">Privacy</a></li>
               <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 mt-12 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-600 font-mono tracking-widest uppercase">
          <span>&copy; 2026 TASKFLOW AI INC.</span>
          <span>SYSTEM STATUS: NORMAL</span>
        </div>
      </footer>
    </main>
  )
}
