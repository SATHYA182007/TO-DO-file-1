"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, CheckCircle, Layout } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 -left-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-40 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-400 mb-8"
        >
          <Sparkles className="w-3 h-3" />
          <span>Intelligent Productivity is here</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold font-outfit tracking-tight mb-6"
        >
          Manage tasks with the <br />
          <span className="premium-text-gradient">speed of thought.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-gray-400 mb-10"
        >
          TaskFlow AI combines the power of AI with deep work systems to help you achieve goals 3x faster. The ultimate workspace for winners.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/register"
            className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/25"
          >
            Start for free <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="#demo"
            className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold transition-all"
          >
            Watch Demo
          </Link>
        </motion.div>

        {/* Mockup Preview */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 relative group"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative glass-dark rounded-2xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-3 py-1 rounded bg-black/50 text-[10px] text-gray-500 font-mono">app.taskflow.ai/dashboard</div>
              </div>
            </div>
            
            <div className="aspect-[16/9] bg-[#0A0A0B] p-4 md:p-6 flex flex-col gap-6 text-left">
               <div className="grid grid-cols-12 gap-6 h-full">
                  <div className="col-span-3 space-y-6">
                    <div className="flex items-center gap-2">
                       <div className="w-6 h-6 rounded bg-indigo-600 flex items-center justify-center">
                          <Sparkles className="w-3.5 h-3.5 text-white" />
                       </div>
                       <div className="h-3 w-20 bg-white/10 rounded" />
                    </div>
                    <div className="space-y-3">
                       {[
                         { label: "Dashboard", active: true },
                         { label: "AI Planner" },
                         { label: "Project Alpha" },
                         { label: "Team Space" }
                       ].map((item, i) => (
                         <div key={i} className={cn(
                           "flex items-center gap-2 p-2 rounded-lg transition-colors",
                           item.active ? "bg-white/5 border border-white/5" : "opacity-40"
                         )}>
                            <div className="w-3 h-3 rounded-sm bg-white/20" />
                            <span className="text-[10px] font-bold tracking-tight text-white/70">{item.label}</span>
                         </div>
                       ))}
                    </div>
                  </div>
                  <div className="col-span-9 space-y-6">
                    <div className="grid grid-cols-3 gap-4">
                       {[
                         { val: "84%", label: "Productivity", sub: "+12%" },
                         { val: "24/32", label: "Tasks Done", sub: "Today" },
                         { val: "18.5h", label: "Focus Time", sub: "This week" }
                       ].map((stat, i) => (
                         <div key={i} className="p-4 bg-white/5 rounded-xl border border-white/5 space-y-1">
                            <span className="text-[8px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</span>
                            <div className="text-lg font-bold text-white">{stat.val}</div>
                            <span className="text-[8px] text-indigo-400 font-bold">{stat.sub}</span>
                         </div>
                       ))}
                    </div>
                    <div className="flex-1 bg-white/[0.02] rounded-2xl border border-white/5 p-6 space-y-4">
                       <div className="flex justify-between items-center mb-2">
                          <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Today's Focus</h4>
                          <span className="text-[8px] text-indigo-400 font-bold">AI Suggested</span>
                       </div>
                       <div className="space-y-4">
                          {[
                            { title: "Review Q2 Marketing Strategy", time: "10:00 AM", priority: "HIGH" },
                            { title: "Design System Refactor - Phase 2", time: "11:30 AM", priority: "URGENT", done: true },
                            { title: "Team Sync with Cloud Squad", time: "2:00 PM", priority: "MEDIUM" },
                            { title: "Prepare Investor Deck", time: "4:00 PM", priority: "HIGH" }
                          ].map((t, i) => (
                            <div key={i} className="flex items-center gap-4">
                               <div className={cn("w-4 h-4 rounded border flex items-center justify-center", t.done ? "bg-indigo-500 border-indigo-500" : "border-white/10")}>
                                  {t.done && <CheckCircle className="w-3 h-3 text-white" />}
                               </div>
                               <div className="flex-1">
                                  <p className={cn("text-[9px] font-bold text-white mb-0.5", t.done && "opacity-30 line-through")}>{t.title}</p>
                                  <div className="flex justify-between">
                                     <span className="text-[7px] text-gray-500 font-bold">{t.time}</span>
                                     <span className="text-[7px] text-indigo-400 font-bold">{t.priority}</span>
                                  </div>
                               </div>
                            </div>
                          ))}
                       </div>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
