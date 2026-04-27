"use client"

import { useState } from "react"
import { motion, Reorder } from "framer-motion"
import { 
  Plus, 
  MoreHorizontal, 
  Clock, 
  AlertCircle, 
  Filter, 
  LayoutGrid, 
  List, 
  Sparkles 
} from "lucide-react"
import { cn } from "@/lib/utils"

const initialTasks = {
  todo: [
    { id: "1", title: "Refactor Auth Middleware", priority: "HIGH", date: "Apr 24" },
    { id: "2", title: "Update Documentation", priority: "LOW", date: "Apr 25" },
  ],
  doing: [
    { id: "3", title: "AI Integration Module", priority: "URGENT", date: "Apr 22" },
  ],
  done: [
    { id: "4", title: "Setup Project Scaffold", priority: "MEDIUM", date: "Apr 20" },
  ]
}

export default function TasksPage() {
  const [view, setView] = useState<"board" | "list">("board")

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-bold font-outfit">Tasks</h1>
           <p className="text-gray-500">Organize and manage your workflows.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="flex items-center bg-white/5 border border-white/5 rounded-lg p-1">
             <button 
               onClick={() => setView("board")}
               className={cn("p-1.5 rounded-md transition-all", view === "board" ? "bg-white/10 text-white shadow-lg" : "text-gray-500 hover:text-gray-300")}
             >
                <LayoutGrid className="w-4 h-4" />
             </button>
             <button 
               onClick={() => setView("list")}
               className={cn("p-1.5 rounded-md transition-all", view === "list" ? "bg-white/10 text-white shadow-lg" : "text-gray-500 hover:text-gray-300")}
             >
                <List className="w-4 h-4" />
             </button>
          </div>
          <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm font-medium hover:bg-white/10 flex items-center gap-2">
             <Filter className="w-4 h-4" /> Filter
          </button>
          <button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-sm font-bold flex items-center gap-2">
             <Plus className="w-4 h-4" /> Create Task
          </button>
        </div>
      </div>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {Object.entries(initialTasks).map(([column, tasks]) => (
          <div key={column} className="w-80 flex-shrink-0 space-y-4">
            <div className="flex items-center justify-between px-2">
               <div className="flex items-center gap-2">
                  <h3 className="font-bold uppercase text-[10px] tracking-widest text-gray-500">{column}</h3>
                  <span className="w-5 h-5 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-[10px] font-bold text-gray-400">
                    {tasks.length}
                  </span>
               </div>
               <button className="text-gray-500 hover:text-white"><Plus className="w-4 h-4" /></button>
            </div>

            <div className="space-y-3">
               {tasks.map((task) => (
                 <motion.div
                   key={task.id}
                   whileHover={{ y: -4, scale: 1.02 }}
                   className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all cursor-grab active:cursor-grabbing group shadow-xl"
                 >
                    <div className="flex items-start justify-between mb-4">
                       <span className={cn(
                          "px-2 py-0.5 rounded text-[8px] font-bold tracking-tighter",
                          task.priority === "URGENT" && "bg-red-500/10 text-red-400 border border-red-500/20",
                          task.priority === "HIGH" && "bg-orange-500/10 text-orange-400 border border-orange-500/20",
                          task.priority === "MEDIUM" && "bg-blue-500/10 text-blue-400 border border-blue-500/20",
                          task.priority === "LOW" && "bg-gray-500/10 text-gray-400 border border-gray-500/20",
                       )}>
                          {task.priority}
                       </span>
                       <button className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-white/5 text-gray-500 transition-all">
                          <MoreHorizontal className="w-4 h-4" />
                       </button>
                    </div>
                    
                    <h4 className="text-sm font-medium mb-4">{task.title}</h4>
                    
                    <div className="flex items-center justify-between">
                       <div className="flex items-center gap-1.5 text-gray-500">
                          <Clock className="w-3 h-3" />
                          <span className="text-[10px]">{task.date}</span>
                       </div>
                       <div className="flex -space-x-2">
                          <div className="w-6 h-6 rounded-full bg-indigo-600 border border-black flex items-center justify-center text-[8px]">AM</div>
                          {task.id === "3" && (
                             <div className="w-6 h-6 rounded-full bg-purple-600 border border-black flex items-center justify-center">
                                <Sparkles className="w-3 h-3" />
                             </div>
                          )}
                       </div>
                    </div>
                 </motion.div>
               ))}

               {column === "doing" && (
                  <button className="w-full py-4 rounded-2xl border-2 border-dashed border-white/5 hover:border-indigo-500/30 hover:bg-indigo-500/5 transition-all group">
                     <span className="text-xs font-bold text-gray-600 group-hover:text-indigo-400 flex items-center justify-center gap-2">
                        <Sparkles className="w-4 h-4" /> AI Suggested Task
                     </span>
                  </button>
               )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
