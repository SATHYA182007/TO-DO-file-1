import { prisma } from "@/lib/prisma"

export async function completeTask(taskId: string, userId: string) {
  const task = await prisma.task.update({
    where: { id: taskId },
    data: { status: "DONE" }
  })

  // Calculate XP based on priority
  let xpAwarded = 10
  if (task.priority === "HIGH") xpAwarded = 25
  if (task.priority === "URGENT") xpAwarded = 50

  // Update user XP and check streak
  const user = await prisma.user.update({
    where: { id: userId },
    data: {
      xp: { increment: xpAwarded }
    }
  })

  return { success: true, xpAwarded, newTotalXp: user.xp }
}

export async function updateStreak(userId: string) {
  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) return

  const now = new Date()
  const lastStreak = user.lastStreakAt ? new Date(user.lastStreakAt) : null

  // If last streak was yesterday, increment. If today, do nothing. If older, reset.
  if (lastStreak) {
    const diff = now.getTime() - lastStreak.getTime()
    const diffDays = diff / (1000 * 60 * 60 * 24)
    
    if (diffDays >= 1 && diffDays < 2) {
      await prisma.user.update({
        where: { id: userId },
        data: { streak: { increment: 1 }, lastStreakAt: now }
      })
    } else if (diffDays >= 2) {
      await prisma.user.update({
        where: { id: userId },
        data: { streak: 1, lastStreakAt: now }
      })
    }
  } else {
    await prisma.user.update({
      where: { id: userId },
      data: { streak: 1, lastStreakAt: now }
    })
  }
}
