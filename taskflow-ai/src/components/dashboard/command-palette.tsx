"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Command, Layout, FileText, Settings, Users, Activity } from "lucide-react"

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev)
    document.addEventListener('toggle-search', handleToggle)
    return () => document.removeEventListener('toggle-search', handleToggle)
  }, [])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-20">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        />
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: -20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: -20 }}
          className="relative w-full max-w-2xl glass-dark rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
        >
          <div className="flex items-center gap-3 px-4 py-4 border-b border-white/5">
             <Search className="w-5 h-5 text-gray-500" />
             <input 
                autoFocus
                placeholder="Search tasks, docs, or settings..." 
                className="flex-1 bg-transparent border-none text-sm outline-none text-white"
             />
             <div className="px-1.5 py-0.5 rounded bg-white/5 border border-white/5 text-[10px] font-mono text-gray-500 flex items-center gap-1">
                <Command className="w-3 h-3" />
                <span>ESC</span>
             </div>
          </div>

          <div className="p-2">
             <p className="px-3 py-2 text-[10px] font-bold text-gray-600 uppercase tracking-widest">Navigation</p>
             <div className="space-y-1">
                {[
                  { label: "Go to Tasks", icon: Layout, shortcut: "G T" },
                  { label: "Analytics Overview", icon: Activity, shortcut: "G A" },
                  { label: "Team Members", icon: Users, shortcut: "G M" },
                  { label: "System Settings", icon: Settings, shortcut: "G S" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-white/5 cursor-pointer group transition-all">
                     <div className="flex items-center gap-3">
                        <item.icon className="w-4 h-4 text-gray-500 group-hover:text-indigo-400" />
                        <span className="text-sm text-gray-300 group-hover:text-white font-medium">{item.label}</span>
                     </div>
                     <span className="text-[10px] font-mono text-gray-700">{item.shortcut}</span>
                  </div>
                ))}
             </div>
          </div>

          <div className="bg-black/50 p-3 flex items-center justify-between border-t border-white/5">
             <div className="flex gap-4">
                <div className="flex items-center gap-1 text-[10px] text-gray-600">
                   <Command className="w-3 h-3" />
                   <span>Enter to select</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] text-gray-600">
                   <span>↑↓ to navigate</span>
                </div>
             </div>
             <div className="text-[10px] text-indigo-500/50 font-bold tracking-widest">TaskFlow AI Search</div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
