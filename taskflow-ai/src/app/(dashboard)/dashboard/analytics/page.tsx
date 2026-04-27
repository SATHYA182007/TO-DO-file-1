"use client"

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts'
import { 
  TrendingUp, 
  Award, 
  Calendar, 
  Zap, 
  ChevronRight,
  Download,
  Share2
} from "lucide-react"

const categoryData = [
  { name: 'Engineering', value: 45, color: '#6366f1' },
  { name: 'Design', value: 25, color: '#a855f7' },
  { name: 'Marketing', value: 20, color: '#3b82f6' },
  { name: 'Admin', value: 10, color: '#f59e0b' },
]

const weeklyPerformance = [
  { day: 'Mon', completed: 8, goal: 10 },
  { day: 'Tue', completed: 12, goal: 10 },
  { day: 'Wed', completed: 7, goal: 10 },
  { day: 'Thu', completed: 15, goal: 10 },
  { day: 'Fri', completed: 10, goal: 10 },
  { day: 'Sat', completed: 4, goal: 5 },
  { day: 'Sun', completed: 6, goal: 5 },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-bold font-outfit">Productivity Analytics</h1>
           <p className="text-gray-500">Discover your work patterns and optimize your flow.</p>
        </div>
        <div className="flex gap-2">
           <button className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
              <Download className="w-5 h-5 text-gray-400" />
           </button>
           <button className="p-2.5 rounded-lg bg-white/5 border border-white/5 hover:bg-white/10 transition-all">
              <Share2 className="w-5 h-5 text-gray-400" />
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Performance Overview */}
        <div className="lg:col-span-2 p-8 rounded-3xl bg-white/[0.02] border border-white/5">
           <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold">Weekly Throughput</h3>
              <div className="flex gap-4 text-[10px] font-bold">
                 <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-indigo-500" /> COMPLETED</div>
                 <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-white/10" /> GOAL</div>
              </div>
           </div>
           
           <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                 <BarChart data={weeklyPerformance}>
                    <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{fill: '#6b7280', fontSize: 12}} />
                    <Tooltip 
                      cursor={{fill: 'rgba(255,255,255,0.05)'}}
                      contentStyle={{ backgroundColor: '#0A0A0B', border: '1px solid #1f2937', borderRadius: '12px' }}
                    />
                    <Bar dataKey="completed" fill="#6366f1" radius={[4, 4, 0, 0]} barSize={20} />
                    <Bar dataKey="goal" fill="rgba(255,255,255,0.05)" radius={[4, 4, 0, 0]} barSize={20} />
                 </BarChart>
              </ResponsiveContainer>
           </div>
        </div>

        {/* Category Breakdown */}
        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
           <h3 className="font-bold mb-8">Time by Category</h3>
           <div className="h-[200px] w-full mb-8">
              <ResponsiveContainer width="100%" height="100%">
                 <PieChart>
                    <Pie
                      data={categoryData}
                      innerRadius={60}
                      outerRadius={80}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {categoryData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} stroke="none" />
                      ))}
                    </Pie>
                    <Tooltip />
                 </PieChart>
              </ResponsiveContainer>
           </div>
           <div className="space-y-4">
              {categoryData.map((cat, i) => (
                <div key={i} className="flex items-center justify-between text-sm">
                   <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full" style={{backgroundColor: cat.color}} />
                      <span className="text-gray-400">{cat.name}</span>
                   </div>
                   <span className="font-bold">{cat.value}%</span>
                </div>
              ))}
           </div>
        </div>
      </div>

      {/* Insights Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
         <div className="p-8 rounded-3xl bg-gradient-to-br from-indigo-600/10 to-transparent border border-indigo-500/10">
            <div className="flex items-center gap-2 mb-4">
               <TrendingUp className="w-5 h-5 text-indigo-400" />
               <h4 className="font-bold">Growth Insight</h4>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
               Your completion rate is up <span className="text-white font-bold">12%</span> compared to last week. You are most productive between <span className="text-white font-bold">10:00 AM and 1:00 PM</span>. Consider scheduling your "Urgent" tasks in this window.
            </p>
            <button className="text-indigo-400 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
               Optimize my schedule <ChevronRight className="w-4 h-4" />
            </button>
         </div>

         <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-600/10 to-transparent border border-purple-500/10">
            <div className="flex items-center gap-2 mb-4">
               <Award className="w-5 h-5 text-purple-400" />
               <h4 className="font-bold">Achievements</h4>
            </div>
            <div className="flex gap-4">
               {[1, 2, 3].map(i => (
                 <div key={i} className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-400" />
                 </div>
               ))}
               <div className="w-12 h-12 rounded-2xl bg-white/5 border border-dashed border-white/20 flex items-center justify-center text-xs font-bold text-gray-600">
                 +5
               </div>
            </div>
            <p className="text-gray-500 text-[10px] mt-4 uppercase font-bold tracking-widest">You earned 450 XP this week</p>
         </div>
      </div>
    </div>
  )
}
