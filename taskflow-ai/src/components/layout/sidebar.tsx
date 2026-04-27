"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { 
  LayoutDashboard, 
  CheckSquare, 
  Calendar, 
  BarChart, 
  Users, 
  Settings, 
  Plus, 
  Zap,
  Search,
  Bell,
  LogOut
} from "lucide-react"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/dashboard" },
  { name: "My Tasks", icon: CheckSquare, href: "/dashboard/tasks" },
  { name: "Calendar", icon: Calendar, href: "/dashboard/calendar" },
  { name: "Analytics", icon: BarChart, href: "/dashboard/analytics" },
  { name: "Team", icon: Users, href: "/dashboard/team" },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 h-screen border-r border-white/5 bg-[#0A0A0B] flex flex-col fixed left-0 top-0 z-40">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <Zap className="text-white w-5 h-5 fill-white" />
          </div>
          <span className="text-lg font-bold font-outfit">TaskFlow AI</span>
        </div>

        <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/5 text-sm text-gray-400 mb-8 transition-all group">
          <div className="flex items-center gap-2">
            <Search className="w-4 h-4" />
            <span>Search...</span>
          </div>
          <span className="px-1.5 py-0.5 rounded bg-white/5 text-[10px] border border-white/5 font-mono group-hover:border-white/20">⌘K</span>
        </button>

        <nav className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center justify-between px-3 py-2 rounded-lg transition-all group",
                  isActive 
                    ? "bg-indigo-600/10 text-indigo-400 border border-indigo-500/20" 
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={cn("w-5 h-5", isActive ? "text-indigo-400" : "text-gray-500 group-hover:text-gray-300")} />
                  <span className="font-medium text-sm">{item.name}</span>
                </div>
                {isActive && (
                   <motion.div layoutId="sidebar-active" className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                )}
              </Link>
            )
          })}
        </nav>
      </div>

      <div className="mt-auto p-6 space-y-4">
        <div className="p-4 rounded-xl bg-gradient-to-br from-indigo-600/20 to-purple-600/20 border border-indigo-500/20">
           <h4 className="text-xs font-bold text-indigo-300 mb-1">PRO PLAN</h4>
           <div className="h-1.5 w-full bg-white/5 rounded-full mb-2 overflow-hidden">
              <div className="h-full w-3/4 bg-indigo-500 rounded-full" />
           </div>
           <p className="text-[10px] text-gray-500">75% of AI tokens used</p>
        </div>

        <Link
          href="/dashboard/settings"
          className="flex items-center gap-3 px-3 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <Settings className="w-5 h-5" />
          <span className="font-medium text-sm">Settings</span>
        </Link>
        
        <div className="flex items-center justify-between gap-3 px-3 py-2">
           <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex-shrink-0" />
              <div className="flex-1 min-w-0">
                 <p className="text-xs font-bold truncate">Alex Morgan</p>
                 <p className="text-[10px] text-gray-500 truncate">alex@taskflow.ai</p>
              </div>
           </div>
           <button 
             onClick={() => {
                // In a real app, this would use signOut() from next-auth/react
                window.location.href = "/login"
             }}
             className="p-2 rounded-lg text-gray-500 hover:text-red-400 hover:bg-red-400/10 transition-all"
             title="Sign Out"
           >
              <LogOut className="w-4 h-4" />
           </button>
        </div>
      </div>
    </aside>
  )
}
