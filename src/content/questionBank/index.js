import { languages, difficulties } from '../runnerConfig.js'
import { pythonQuestions } from './python.js'
import { htmlQuestions } from './html.js'
import { cssQuestions } from './css.js'
import { sqlQuestions } from './sql.js'

const all = [...pythonQuestions, ...htmlQuestions, ...cssQuestions, ...sqlQuestions]

const languageOrder = languages.map((l) => l.id)
const topicOrder = []
all.forEach((q) => {
  const key = `${q.language}:${q.topic}`
  if (!topicOrder.includes(key)) topicOrder.push(key)
})
const topicRank = (q) => topicOrder.indexOf(`${q.language}:${q.topic}`)

export const practiceQuestions = [...all].sort(
  (a, b) =>
    languageOrder.indexOf(a.language) - languageOrder.indexOf(b.language)
    || topicRank(a) - topicRank(b)
    || difficulties.indexOf(a.difficulty) - difficulties.indexOf(b.difficulty),
)

export const practiceTopics = [...new Set(practiceQuestions.map((q) => q.topic))]

if (import.meta.env?.DEV) {
  const seen = new Set()
  practiceQuestions.forEach((q) => {
    if (seen.has(q.id)) console.warn(`Duplicate question id: ${q.id}`)
    seen.add(q.id)
  })
}