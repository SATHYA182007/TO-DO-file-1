"use client"

import { Bell, Search, Plus, Calendar as CalendarIcon } from "lucide-react"

export function DashboardHeader() {
  return (
    <header className="h-16 border-b border-white/5 flex items-center justify-between px-8 bg-[#050505]/50 backdrop-blur-xl sticky top-0 z-30">
      <div className="flex items-center gap-4">
         <h2 className="text-sm font-bold text-gray-400">Workspace / <span className="text-white font-outfit">Main Project</span></h2>
         
         <button 
           onClick={() => document.dispatchEvent(new CustomEvent('toggle-search'))}
           className="ml-4 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs text-gray-500 hover:text-white transition-all group"
         >
           <Search className="w-3.5 h-3.5" />
           <span>Search...</span>
           <span className="ml-2 px-1 rounded bg-white/5 border border-white/5 text-[8px] font-mono group-hover:border-white/20">⌘K</span>
         </button>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 text-[10px] bg-white/5 border border-white/5 px-2 py-1 rounded text-orange-400 font-bold">
           <CalendarIcon className="w-3.5 h-3.5" />
           APRIL 27, 2026
        </div>
        <button className="p-2 rounded-full hover:bg-white/5 text-gray-400 relative">
           <Bell className="w-5 h-5" />
           <span className="absolute top-2 right-2 w-2 h-2 bg-indigo-500 rounded-full border-2 border-[#050505]" />
        </button>
        <button 
          onClick={() => document.dispatchEvent(new CustomEvent('new-task'))}
          className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-white text-black text-sm font-bold hover:bg-gray-200 transition-all active:scale-95"
        >
          <Plus className="w-4 h-4" /> New Task
        </button>
      </div>
    </header>
  )
}
