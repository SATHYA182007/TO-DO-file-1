import { Navbar } from "@/components/marketing/navbar"
import { Check } from "lucide-react"

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
         <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6">Simple, transparent <span className="premium-text-gradient">pricing.</span></h1>
            <p className="text-gray-400 max-w-xl mx-auto italic">"Invest in your focus. It's the only currency that matters."</p>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {/* Reuse pricing cards from landing or expand them */}
            {[
              {
                name: "Starter",
                price: "0",
                desc: "Perfect for students and freelancers.",
                features: ["Unlimited Tasks", "AI Task Breakdown (10/mo)", "Kanban & List View", "Basic Analytics", "Mobile App Access"]
              },
              {
                name: "Pro",
                price: "19",
                popular: true,
                desc: "For high achievers and professionals.",
                features: ["Everything in Starter", "Unlimited AI Breakdown", "Focus Mode & Timer", "Advanced Heatmaps", "Team Workspaces", "Custom AI Coach", "Priority Support"]
              },
              {
                name: "Enterprise",
                price: "49",
                desc: "Custom solutions for large teams.",
                features: ["Everything in Pro", "Custom AI Training", "Dedicated Support", "SSO & Security", "Advanced API Access", "SLA Guarantees", "Unlimited Storage"]
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
                  <span className="text-5xl font-bold">${plan.price}</span>
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
                  Get Started Now
                </button>
              </div>
            ))}
         </div>
      </div>
    </main>
  )
}
