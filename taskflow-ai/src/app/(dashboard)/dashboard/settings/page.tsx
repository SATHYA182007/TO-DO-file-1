"use client"

import { User, Bell, Shield, Palette, Globe, CreditCard } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="max-w-4xl space-y-8">
      <div>
         <h1 className="text-3xl font-bold font-outfit">Settings</h1>
         <p className="text-gray-500">Manage your account and app preferences.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
         <div className="space-y-1">
            {[
              { label: "Profile", icon: User, active: true },
              { label: "Notifications", icon: Bell },
              { label: "Security", icon: Shield },
              { label: "Appearance", icon: Palette },
              { label: "Language", icon: Globe },
              { label: "Billing", icon: CreditCard },
            ].map((item, i) => (
              <button 
                key={i} 
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all",
                  item.active ? "bg-white/5 text-white" : "text-gray-500 hover:text-white hover:bg-white/5"
                )}
              >
                 <item.icon className="w-4 h-4" />
                 {item.label}
              </button>
            ))}
         </div>

         <div className="md:col-span-3 space-y-8">
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 space-y-6">
               <h3 className="font-bold">Public Profile</h3>
               <div className="flex items-center gap-6 pb-6 border-b border-white/5">
                  <div className="w-20 h-20 rounded-2xl bg-indigo-600 flex items-center justify-center text-2xl font-bold">AM</div>
                  <div className="space-y-2">
                     <button className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs font-bold hover:bg-white/10 transition-all">Change Avatar</button>
                     <p className="text-[10px] text-gray-500">JPG, GIF or PNG. Max size of 2MB.</p>
                  </div>
               </div>

               <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase">First Name</label>
                     <input type="text" defaultValue="Alex" className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-indigo-500 outline-none text-sm" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase">Last Name</label>
                     <input type="text" defaultValue="Morgan" className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-indigo-500 outline-none text-sm" />
                  </div>
                  <div className="col-span-2 space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase">Biography</label>
                     <textarea rows={4} defaultValue="Product Designer & Tech Enthusiast building the future of work." className="w-full px-4 py-3 rounded-xl bg-black border border-white/10 focus:border-indigo-500 outline-none text-sm" />
                  </div>
               </div>

               <div className="flex justify-end pt-4">
                  <button className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-lg shadow-indigo-500/20">
                     Save Changes
                  </button>
               </div>
            </div>

            <div className="p-8 rounded-3xl bg-red-500/5 border border-red-500/10 space-y-4">
               <h3 className="font-bold text-red-400">Danger Zone</h3>
               <p className="text-sm text-gray-500">Permanently delete your account and all associated data. This action cannot be undone.</p>
               <button className="px-6 py-2.5 rounded-lg bg-red-500/10 border border-red-500/20 text-red-500 text-sm font-bold hover:bg-red-500 hover:text-white transition-all">
                  Delete Account
               </button>
            </div>
         </div>
      </div>
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
