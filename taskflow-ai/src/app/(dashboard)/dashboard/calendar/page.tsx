"use client"

import { ChevronLeft, ChevronRight, Plus } from "lucide-react"

export default function CalendarPage() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-bold font-outfit">Calendar</h1>
           <p className="text-gray-500">Plan your weeks and schedule deep work.</p>
        </div>
        
        <div className="flex items-center gap-4">
           <div className="flex items-center bg-white/5 border border-white/5 rounded-lg p-1">
              <button className="p-1 px-3 text-xs font-bold bg-white/10 text-white rounded-md">Month</button>
              <button className="p-1 px-3 text-xs font-bold text-gray-500 hover:text-gray-300">Week</button>
           </div>
           <div className="flex items-center gap-2">
              <button className="p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10"><ChevronLeft className="w-4 h-4" /></button>
              <span className="text-sm font-bold min-w-32 text-center">April 2026</span>
              <button className="p-2 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10"><ChevronRight className="w-4 h-4" /></button>
           </div>
           <button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-sm font-bold flex items-center gap-2">
              <Plus className="w-4 h-4" /> Add Event
           </button>
        </div>
      </div>

      <div className="rounded-3xl border border-white/5 bg-white/[0.01] overflow-hidden">
        <div className="grid grid-cols-7 border-b border-white/5">
           {days.map(day => (
             <div key={day} className="py-4 text-center text-[10px] font-bold text-gray-500 uppercase tracking-widest bg-white/[0.02]">
                {day}
             </div>
           ))}
        </div>
        
        <div className="grid grid-cols-7">
           {Array.from({ length: 35 }).map((_, i) => {
              const day = i - 2 // Start offset for April 2026
              const isToday = day === 22
              const isCurrentMonth = day > 0 && day <= 30
              
              return (
                <div key={i} className="min-h-[140px] p-2 border-r border-b border-white/5 last:border-r-0 hover:bg-white/[0.02] transition-colors relative group">
                   <div className="flex justify-between items-start mb-2">
                      <span className={cn(
                        "text-xs font-bold w-6 h-6 flex items-center justify-center rounded-full transition-colors",
                        !isCurrentMonth ? "text-gray-700" : isToday ? "bg-indigo-600 text-white" : "text-gray-400 group-hover:text-white"
                      )}>
                         {day > 0 && day <= 30 ? day : day <= 0 ? day + 31 : day - 30}
                      </span>
                      {isToday && (
                         <div className="w-1 h-1 rounded-full bg-indigo-500" />
                      )}
                   </div>
                   
                   <div className="space-y-1">
                      {isCurrentMonth && day === 24 && (
                         <div className="px-2 py-1 rounded bg-indigo-500/20 border border-indigo-500/30 text-[10px] font-bold text-indigo-300 truncate">
                            Marketing Review
                         </div>
                      )}
                      {isCurrentMonth && day === 22 && (
                         <div className="px-2 py-1 rounded bg-purple-500/20 border border-purple-500/30 text-[10px] font-bold text-purple-300 truncate">
                            Deep Work Block
                         </div>
                      )}
                   </div>
                   
                   <button className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 p-1 rounded bg-white/5 text-gray-500 hover:text-white transition-all">
                      <Plus className="w-3 h-3" />
                   </button>
                </div>
              )
           })}
        </div>
      </div>
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
