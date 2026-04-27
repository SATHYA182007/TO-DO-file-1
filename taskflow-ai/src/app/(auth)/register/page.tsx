"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { GitBranch, Mail, Lock, Globe, Zap, ArrowLeft, User } from "lucide-react"
import Link from "next/link"

export default function RegisterPage() {
  const [email, setEmail] = useState("")

  return (
    <div className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-indigo-600/5 blur-[120px] -z-10" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-white mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <div className="glass-dark rounded-3xl border border-white/10 p-8 shadow-2xl">
          <div className="flex flex-col items-center mb-8">
            <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center mb-4">
              <Zap className="text-white w-6 h-6 fill-white" />
            </div>
            <h1 className="text-2xl font-bold font-outfit">Join the flow</h1>
            <p className="text-gray-400 text-sm mt-1">Start achieving your goals today.</p>
          </div>

          <div className="space-y-4">
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-all hover:scale-[1.02] active:scale-95">
              <Globe className="w-5 h-5 text-red-500" /> Continue with Google
            </button>
            
            <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-xl bg-gray-900 text-white font-bold border border-white/10 hover:bg-gray-800 transition-all hover:scale-[1.02] active:scale-95">
              <GitBranch className="w-5 h-5" /> Continue with GitHub
            </button>

            <div className="relative py-4">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/5"></span>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-[#0A0A0B] px-2 text-gray-500">Or sign up with email</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="relative group">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
                <input 
                  type="text" 
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all text-sm"
                />
              </div>

              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
                <input 
                  type="email" 
                  placeholder="name@company.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all text-sm"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 group-focus-within:text-indigo-400 transition-colors" />
                <input 
                  type="password" 
                  placeholder="Create Password"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 outline-none transition-all text-sm"
                />
              </div>

              <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-lg shadow-indigo-500/20 mt-4">
                Create Account
              </button>

              <Link 
                href="/dashboard"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-white text-sm font-bold transition-all mt-2"
              >
                <Zap className="w-4 h-4 text-indigo-400" /> Try Demo Mode
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account? <Link href="/login" className="text-indigo-400 hover:underline font-medium">Log In</Link>
          </p>
        </div>
      </motion.div>
    </div>
  )
}
