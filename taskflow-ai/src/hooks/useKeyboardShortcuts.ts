"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export function useKeyboardShortcuts() {
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // CMD/CTRL + K for Search (handled by a specific search component usually)
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        // Trigger search modal
        document.dispatchEvent(new CustomEvent('toggle-search'))
      }

      // Shortcut combinations
      if (e.altKey) {
        switch (e.key) {
          case 'd': router.push('/dashboard'); break
          case 't': router.push('/dashboard/tasks'); break
          case 'c': router.push('/dashboard/calendar'); break
          case 'a': router.push('/dashboard/analytics'); break
          case 'n': 
            e.preventDefault()
            document.dispatchEvent(new CustomEvent('new-task'))
            break
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [router])
}
