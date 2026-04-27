"use client"

import { motion } from "framer-motion"
import { Bot, Sparkles, Brain, Cpu, MessageSquare, Wand2 } from "lucide-react"

export function AISection() {
  return (
    <section id="ai" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-indigo-600/10 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-medium text-indigo-400 mb-6 font-mono">
              <Sparkles className="w-3 h-3" />
              TASKFLOW AI ENGINE v2.0
            </div>
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-8">
              Your tasks, <br />
              <span className="premium-text-gradient">auto-piloted by AI.</span>
            </h2>
            
            <div className="space-y-6">
              {[
                {
                  icon: Wand2,
                  title: "AI Task Breakdown",
                  desc: "Turn big projects into manageable steps instantly. No more procrastination."
                },
                {
                  icon: Brain,
                  title: "Semantic Prioritization",
                  desc: "Our AI understands what's urgent and what's important, even if you don't."
                },
                {
                  icon: MessageSquare,
                  title: "Natural Language Input",
                  desc: 'Simply say "Schedule a meeting with Sarah next Tues at 4" and we do the rest.'
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5 group">
                  <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-indigo-500/20 group-hover:scale-105 transition-all">
                    <item.icon className="w-6 h-6 text-indigo-400" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">{item.title}</h4>
                    <p className="text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="glass-dark rounded-3xl border border-white/10 p-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-4">
                  <Cpu className="w-8 h-8 text-indigo-500/30 animate-pulse" />
               </div>
               
               <div className="space-y-4">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                   </div>
                   <div className="px-4 py-2 rounded-2xl rounded-tl-none bg-indigo-600/20 border border-indigo-500/30 text-sm">
                     I've analyzed your workload. Should I reschedule the "API Documentation" to tomorrow to optimize your focus window?
                   </div>
                 </div>
                 
                 <div className="flex items-center gap-3 justify-end">
                   <div className="px-4 py-2 rounded-2xl rounded-tr-none bg-white/5 border border-white/10 text-sm">
                     Yes, that sounds good.
                   </div>
                   <div className="w-8 h-8 rounded-full bg-gray-600" />
                 </div>

                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                      <Bot className="w-4 h-4 text-white" />
                   </div>
                   <div className="px-4 py-3 rounded-2xl rounded-tl-none bg-indigo-600/20 border border-indigo-500/30 text-sm space-y-2">
                     <span className="block font-bold text-indigo-300">Action taken:</span>
                     <ul className="list-disc list-inside text-xs space-y-1 opacity-80">
                        <li>Moved "API Documentation" to 10:00 AM</li>
                        <li>Allocated 90min Deep Work block</li>
                        <li>Snoozed non-urgent notifications</li>
                     </ul>
                   </div>
                 </div>
               </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
