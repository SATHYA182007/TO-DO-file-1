import { OpenAI } from "openai"

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function suggestFocusSchedule(tasks: any[], userHabits: any) {
  const prompt = `
    Given the following tasks and priority:
    ${JSON.stringify(tasks)}
    
    And user energy levels:
    ${JSON.stringify(userHabits)}
    
    Suggest an optimized schedule for the next 8 hours. 
    Include:
    1. A 'Deep Work' block for high priority tasks.
    2. A 'Shallow Work' block for low priority tasks.
    3. Breaks.
    
    Return the response as a clear, structured JSON object.
  `

  const response = await openai.chat.completions.create({
    model: "gpt-4-turbo-preview",
    messages: [{ role: "system", content: "You are a productivity engine." }, { role: "user", content: prompt }],
    response_format: { type: "json_object" }
  })

  return JSON.parse(response.choices[0].message.content || "{}")
}
