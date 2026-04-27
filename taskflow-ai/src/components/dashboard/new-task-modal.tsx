"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, X, Zap, Calendar as CalendarIcon, Flag, Tag } from "lucide-react"

export function NewTaskModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [taskTitle, setTaskTitle] = useState("")

  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev)
    document.addEventListener('new-task', handleToggle)
    return () => document.removeEventListener('new-task', handleToggle)
  }, [])

  if (!isOpen) return null

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsOpen(false)}
          className="absolute inset-0 bg-black/80 backdrop-blur-sm" 
        />
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          className="relative w-full max-w-xl glass-dark rounded-3xl border border-white/10 p-6 shadow-2xl overflow-hidden"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
               <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                  <Plus className="w-5 h-5 text-white" />
               </div>
               <h3 className="font-bold font-outfit uppercase tracking-widest text-xs">Create New Task</h3>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white transition-colors">
               <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            <input 
              autoFocus
              type="text" 
              placeholder="What needs to be done?"
              className="w-full bg-transparent border-none text-2xl font-medium outline-none placeholder:text-gray-700"
              value={taskTitle}
              onChange={(e) => setTaskTitle(e.target.value)}
            />

            <div className="flex flex-wrap gap-3">
               <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 text-xs text-gray-400 transition-all">
                  <CalendarIcon className="w-3.5 h-3.5" /> Due Date
               </button>
               <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 text-xs text-gray-400 transition-all">
                  <Flag className="w-3.5 h-3.5" /> Priority
               </button>
               <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 text-xs text-gray-400 transition-all">
                  <Tag className="w-3.5 h-3.5" /> Project
               </button>
            </div>

            <div className="pt-6 border-t border-white/5 flex items-center justify-between">
               <button className="flex items-center gap-2 text-[10px] font-bold text-indigo-400 uppercase tracking-widest hover:text-indigo-300 transition-colors">
                  <Zap className="w-3.5 h-3.5" /> AI Suggestion
               </button>
               <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono text-gray-600">ENTER TO SAVE</span>
                  <button className="px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold transition-all shadow-lg shadow-indigo-500/20">
                     Create Task
                  </button>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  )
}
