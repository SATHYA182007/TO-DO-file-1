"use client"

import { motion } from "framer-motion"
import { 
  CheckCircle, 
  Clock, 
  TrendingUp, 
  Zap, 
  Target, 
  Play, 
  Brain,
  MoreVertical,
  Check
} from "lucide-react"
import { ActivityChart } from "@/components/dashboard/activity-chart"

export default function DashboardPage() {
  return (
    <div className="space-y-8 pb-10">
      {/* Welcome Section */}
      <section>
        <h1 className="text-3xl font-bold font-outfit mb-2">Good morning, Alex.</h1>
        <p className="text-gray-500">You have 5 high-priority tasks and 2 meetings today.</p>
      </section>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { label: "Productivity Score", value: "84%", icon: TrendingUp, color: "text-green-400", bg: "bg-green-400/10" },
          { label: "Tasks Completed", value: "24/32", icon: CheckCircle, color: "text-indigo-400", bg: "bg-indigo-400/10" },
          { label: "Deep Work Hours", value: "18.5h", icon: Clock, color: "text-purple-400", bg: "bg-purple-400/10" },
          { label: "Active Streak", value: "12 Days", icon: Zap, color: "text-orange-400", bg: "bg-orange-400/10" },
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col gap-4">
             <div className="flex items-center justify-between">
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                   <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <button className="text-gray-600 hover:text-white"><MoreVertical className="w-4 h-4" /></button>
             </div>
             <div>
                <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                <p className="text-2xl font-bold mt-0.5">{stat.value}</p>
             </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Tasks & Analytics */}
        <div className="lg:col-span-8 space-y-8">
          {/* Today's Tasks */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Today's Focus</h3>
              <button className="text-indigo-400 text-sm font-medium hover:underline">View all</button>
            </div>
            
            <div className="space-y-3">
              {[
                { title: "Review Q2 Marketing Strategy", time: "10:00 AM", priority: "HIGH", done: false },
                { title: "Design System Refactor - Phase 2", time: "11:30 AM", priority: "URGENT", done: true },
                { title: "Submit Expense Report", time: "2:00 PM", priority: "LOW", done: false },
                { title: "Team Sync with DevOps", time: "4:00 PM", priority: "MEDIUM", done: false },
              ].map((task, i) => (
                <div key={i} className="group flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all border border-transparent hover:border-white/5 cursor-pointer">
                   <div className={cn(
                     "w-6 h-6 rounded-md border flex items-center justify-center transition-all",
                     task.done ? "bg-indigo-600 border-indigo-600" : "border-white/10 group-hover:border-white/30"
                   )}>
                     {task.done && <Check className="w-4 h-4 text-white" />}
                   </div>
                   <div className="flex-1">
                      <p className={cn("text-sm font-medium", task.done && "line-through text-gray-600")}>{task.title}</p>
                      <p className="text-[10px] text-gray-500 mt-0.5">{task.time} • {task.priority}</p>
                   </div>
                   <button className="opacity-0 group-hover:opacity-100 p-1.5 rounded bg-white/5 text-gray-400 hover:text-white transition-all">
                      <Play className="w-3 h-3 fill-current" />
                   </button>
                </div>
              ))}
            </div>
          </div>

          {/* Efficiency Analytics */}
          <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center justify-between mb-8">
              <div>
                 <h3 className="text-lg font-bold">Activity Overview</h3>
                 <p className="text-xs text-gray-500 mt-1">Completion rate: 92% this week</p>
              </div>
              <select className="bg-transparent border-none text-xs text-indigo-400 font-bold outline-none cursor-pointer">
                 <option>LAST 7 DAYS</option>
                 <option>LAST 30 DAYS</option>
              </select>
            </div>
            <ActivityChart />
          </div>
        </div>

        {/* Sidebar Widgets */}
        <div className="lg:col-span-4 space-y-8">
          {/* AI Quote Widget */}
          <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-900/40 to-purple-900/40 border border-indigo-500/20 relative overflow-hidden group">
             <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-white/10 transition-all duration-1000" />
             <div className="flex items-center gap-2 mb-4">
               <Brain className="w-4 h-4 text-indigo-400" />
               <span className="text-[10px] font-bold text-indigo-300 uppercase tracking-widest">AI Productivity Coach</span>
             </div>
             <p className="font-outfit italic text-indigo-100 leading-relaxed">
               "The path to excellence is paved with small, consistent actions. Your momentum today is building your success tomorrow. Focus on the next 90 minutes."
             </p>
             <p className="text-[10px] text-indigo-400 mt-4 font-bold">— TaskFlow AI</p>
          </div>

          {/* Focus Timer Widget */}
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 text-center space-y-4">
             <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Pomodoro Timer</span>
                <Target className="w-4 h-4 text-red-400" />
             </div>
             <div className="text-4xl font-mono font-bold">24:59</div>
             <div className="flex justify-center gap-3">
                <button className="px-6 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-xs font-bold transition-all">START</button>
                <button className="px-6 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-xs font-bold transition-all border border-white/5">RESET</button>
             </div>
             <p className="text-[10px] text-gray-500">Session 3 of 4 today</p>
          </div>

          {/* XP Rewards */}
          <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-4">
             <h4 className="text-sm font-bold">Current Level: 14</h4>
             <div className="space-y-1">
                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                   <div className="h-full w-[65%] bg-gradient-to-r from-orange-400 to-red-500 rounded-full" />
                </div>
                <div className="flex justify-between text-[10px] text-gray-600 font-bold uppercase">
                   <span>XP: 2,450</span>
                   <span>NEXT LEVEL: 550 XP</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
