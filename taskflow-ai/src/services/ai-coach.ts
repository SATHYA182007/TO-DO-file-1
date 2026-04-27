import { OpenAI } from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function getDailySummary(tasks: any[]) {
  const pendingTasks = tasks.filter(t => t.status !== "DONE")
  
  const prompt = `
    Summarize the pending workload for today:
    ${JSON.stringify(pendingTasks)}
    
    Provide a motivating, concise summary (2-3 sentences) as an AI Productivity Coach.
    Highlight the most critical task.
  `

  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [{ role: "system", content: "You are TaskFlow AI Coach." }, { role: "user", content: prompt }]
  })

  return response.choices[0].message.content
}
