import { Sidebar } from "@/components/layout/sidebar"
import { NewTaskModal } from "@/components/dashboard/new-task-modal"
import { CommandPalette } from "@/components/dashboard/command-palette"
import { DashboardClientWrapper } from "@/components/dashboard/client-wrapper"
import { DashboardHeader } from "@/components/layout/header"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <DashboardClientWrapper />
      <CommandPalette />
      <NewTaskModal />
      <Sidebar />
      <div className="pl-64">
        <DashboardHeader />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  )
}
