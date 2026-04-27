"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { LayoutDashboard, Zap, Shield, Menu } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/50 backdrop-blur-xl"
    >
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <Zap className="text-white w-5 h-5 fill-white" />
          </div>
          <span className="text-xl font-bold font-outfit tracking-tight">TaskFlow AI</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          <Link href="#features" className="hover:text-white transition-colors">Features</Link>
          <Link href="#ai" className="hover:text-white transition-colors">AI Engine</Link>
          <Link href="#pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="#contact" className="hover:text-white transition-colors">Enterprise</Link>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/login" className="text-sm font-medium hover:text-white transition-colors">
            Log in
          </Link>
          <Link 
            href="/register" 
            className="px-4 py-2 rounded-full bg-white text-black text-sm font-bold hover:bg-gray-200 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
