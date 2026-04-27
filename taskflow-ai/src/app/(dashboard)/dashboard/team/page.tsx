"use client"

import { Users, Plus, Mail, Shield, MoreVertical } from "lucide-react"

export default function TeamPage() {
  const members = [
    { name: "Alex Morgan", email: "alex@taskflow.ai", role: "Owner", status: "Active" },
    { name: "Sarah Chen", email: "sarah@taskflow.ai", role: "Admin", status: "Active" },
    { name: "James Wilson", email: "james@tech.com", role: "Member", status: "Away" },
    { name: "Elena Rodriguez", email: "elena@design.io", role: "Member", status: "Offline" },
  ]

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
           <h1 className="text-3xl font-bold font-outfit">Team Workspace</h1>
           <p className="text-gray-500">Collaborate with your team and manage roles.</p>
        </div>
        
        <button className="px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-sm font-bold flex items-center gap-2">
           <Plus className="w-4 h-4" /> Invite Member
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "Active Members", value: "12", icon: Users },
          { label: "Pending Invites", value: "3", icon: Mail },
          { label: "Storage Used", value: "45%", icon: Shield },
          { label: "Team Velocity", value: "85 pts", icon: Users },
        ].map((stat, i) => (
          <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
             <stat.icon className="w-5 h-5 text-indigo-400 mb-4" />
             <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">{stat.label}</p>
             <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/5">
         <div className="overflow-x-auto">
            <table className="w-full text-left">
               <thead>
                  <tr className="border-b border-white/5">
                     <th className="pb-4 text-xs font-bold text-gray-500 uppercase tracking-widest pl-4">Member</th>
                     <th className="pb-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Role</th>
                     <th className="pb-4 text-xs font-bold text-gray-500 uppercase tracking-widest">Status</th>
                     <th className="pb-4 text-xs font-bold text-gray-500 uppercase tracking-widest pr-4 text-right">Actions</th>
                  </tr>
               </thead>
               <tbody className="divide-y divide-white/5">
                  {members.map((member, i) => (
                    <tr key={i} className="group hover:bg-white/[0.01] transition-colors">
                       <td className="py-4 pl-4">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/20 flex items-center justify-center font-bold text-indigo-400">
                                {member.name.charAt(0)}
                             </div>
                             <div>
                                <p className="text-sm font-bold">{member.name}</p>
                                <p className="text-xs text-gray-500">{member.email}</p>
                             </div>
                          </div>
                       </td>
                       <td className="py-4">
                          <span className="px-2 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400 uppercase">
                             {member.role}
                          </span>
                       </td>
                       <td className="py-4">
                          <div className="flex items-center gap-2">
                             <div className={cn(
                                "w-1.5 h-1.5 rounded-full",
                                member.status === "Active" ? "bg-green-500" : member.status === "Away" ? "bg-yellow-500" : "bg-gray-700"
                             )} />
                             <span className="text-xs text-gray-400">{member.status}</span>
                          </div>
                       </td>
                       <td className="py-4 pr-4 text-right">
                          <button className="p-2 rounded-lg hover:bg-white/5 text-gray-500 hover:text-white transition-all opacity-0 group-hover:opacity-100">
                             <MoreVertical className="w-4 h-4" />
                          </button>
                       </td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
    </div>
  )
}

function cn(...classes: any[]) {
  return classes.filter(Boolean).join(' ');
}
