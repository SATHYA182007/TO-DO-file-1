import { Navbar } from "@/components/marketing/navbar"
import { Send, Mail, MapPin, Phone } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <Navbar />
      <div className="pt-32 pb-20 max-w-7xl mx-auto px-4">
         <div className="grid lg:grid-cols-2 gap-16">
            <div>
               <h1 className="text-4xl md:text-6xl font-bold font-outfit mb-6">Let's talk <span className="premium-text-gradient">productivity.</span></h1>
               <p className="text-gray-400 max-w-md mb-12">Looking for an enterprise plan or have a specific question? Our team is here to help you scale your workflow.</p>
               
               <div className="space-y-6">
                  <div className="flex gap-4 items-center">
                     <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-indigo-400">
                        <Mail className="w-5 h-5" />
                     </div>
                     <div>
                        <p className="text-xs font-bold text-gray-500 uppercase">Email us</p>
                        <p className="font-bold">hello@taskflow.ai</p>
                     </div>
                  </div>
                  <div className="flex gap-4 items-center">
                     <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-purple-400">
                        <MapPin className="w-5 h-5" />
                     </div>
                     <div>
                        <p className="text-xs font-bold text-gray-500 uppercase">Visit us</p>
                        <p className="font-bold">San Francisco, CA</p>
                     </div>
                  </div>
               </div>
            </div>

            <div className="glass-dark p-8 rounded-3xl border border-white/10">
               <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Full Name</label>
                        <input type="text" placeholder="John Doe" className="w-full px-4 py-3 rounded-xl bg-black border border-white/5 focus:border-indigo-500 outline-none text-sm" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-500 uppercase">Email Address</label>
                        <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl bg-black border border-white/5 focus:border-indigo-500 outline-none text-sm" />
                     </div>
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase">Subject</label>
                     <input type="text" placeholder="Enterprise Inquiry" className="w-full px-4 py-3 rounded-xl bg-black border border-white/5 focus:border-indigo-500 outline-none text-sm" />
                  </div>
                  <div className="space-y-2">
                     <label className="text-xs font-bold text-gray-500 uppercase">Message</label>
                     <textarea rows={4} placeholder="Tell us about your team..." className="w-full px-4 py-3 rounded-xl bg-black border border-white/5 focus:border-indigo-500 outline-none text-sm" />
                  </div>
                  <button className="w-full py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2">
                     Send Message <Send className="w-4 h-4" />
                  </button>
               </div>
            </div>
         </div>
      </div>
    </main>
  )
}
