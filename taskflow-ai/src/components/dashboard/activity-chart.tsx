"use client"

import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts'

const data = [
  { name: 'Mon', tasks: 4 },
  { name: 'Tue', tasks: 7 },
  { name: 'Wed', tasks: 5 },
  { name: 'Thu', tasks: 12 },
  { name: 'Fri', tasks: 9 },
  { name: 'Sat', tasks: 3 },
  { name: 'Sun', tasks: 6 },
]

export function ActivityChart() {
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorTasks" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis 
            dataKey="name" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: '#6b7280', fontSize: 10 }}
          />
          <Tooltip 
             contentStyle={{ backgroundColor: '#0A0A0B', border: '1px solid #1f2937', borderRadius: '8px' }}
             itemStyle={{ color: '#fff' }}
          />
          <Area 
            type="monotone" 
            dataKey="tasks" 
            stroke="#6366f1" 
            fillOpacity={1} 
            fill="url(#colorTasks)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
