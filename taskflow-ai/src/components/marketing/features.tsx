"use client"

import { motion } from "framer-motion"
import { 
  Columns, 
  Calendar, 
  Bot, 
  Zap, 
  Layers, 
  Users, 
  Clock, 
  BarChart 
} from "lucide-react"

const features = [
  {
    title: "AI Smart Scheduling",
    description: "Our AI analyzes your habits and energy levels to suggest the perfect time for deep work.",
    icon: Bot,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    title: "Kanban Redefined",
    description: "Intuitive drag-and-drop boards that feel as smooth as liquid. Managing workflows has never been easier.",
    icon: Columns,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    title: "Focus Mode",
    description: "Integrated Pomodoro and deep work timers to keep you in the zone and minimize distractions.",
    icon: Clock,
    color: "text-indigo-500",
    bg: "bg-indigo-500/10"
  },
  {
    title: "Advanced Analytics",
    description: "Visualize your productivity with beautiful charts, heatmaps, and weekly growth reports.",
    icon: BarChart,
    color: "text-pink-500",
    bg: "bg-pink-500/10"
  },
  {
    title: "Team Collaboration",
    description: "Real-time updates, shared workspaces, and task assignments for high-velocity teams.",
    icon: Users,
    color: "text-green-500",
    bg: "bg-green-500/10"
  },
  {
    title: "Multi-View Support",
    description: "Switch between List, Board, Calendar, and Timeline views with a single keyboard shortcut.",
    icon: Calendar,
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  }
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-black/50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-outfit mb-4">
            Everything you need to <br />
            <span className="premium-text-gradient">build what's next.</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            TaskFlow AI isn't just a todo list. It's a comprehensive OS for your professional and personal life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all group"
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
