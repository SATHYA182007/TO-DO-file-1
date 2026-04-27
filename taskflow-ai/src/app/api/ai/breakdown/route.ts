import { OpenAI } from "openai"
import { NextResponse } from "next/server"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { taskTitle } = await req.json()

    if (!taskTitle) {
      return NextResponse.json({ error: "No task title provided" }, { status: 400 })
    }

    const response = await openai.chat.completions.create({
      model: "gpt-4-turbo-preview",
      messages: [
        {
          role: "system",
          content: "You are a world-class productivity expert. Break down the user's task into 4-6 actionable subtasks. Return a JSON array of strings only."
        },
        {
          role: "user",
          content: `Break down this task: ${taskTitle}`
        }
      ],
      response_format: { type: "json_object" }
    })

    const result = JSON.parse(response.choices[0].message.content || "{ subtasks: [] }")
    return NextResponse.json(result)

  } catch (error) {
    console.error("AI Error:", error)
    return NextResponse.json({ error: "Failed to breakdown task" }, { status: 500 })
  }
}
