import { useCallback, useMemo, useState } from 'react'

const ALL = 'all'

export function useQuestionFilters(questions, { solvedIds } = {}) {
  const [language, setLanguage] = useState(ALL)
  const [topic, setTopic] = useState(ALL)
  const [difficulty, setDifficulty] = useState(ALL)
  const [status, setStatus] = useState(ALL)
  const [search, setSearch] = useState('')
  const [selectedId, setSelectedId] = useState(questions[0]?.id ?? null)

  const topicOptions = useMemo(() => {
    const topics = new Set()
    questions.forEach((q) => {
      if (language === ALL || q.language === language) topics.add(q.topic)
    })
    return [...topics]
  }, [questions, language])
  const activeTopic = topicOptions.includes(topic) ? topic : ALL

  const filteredQuestions = useMemo(() => {
    const query = search.trim().toLowerCase()
    return questions.filter((q) => {
      if (language !== ALL && q.language !== language) return false
      if (activeTopic !== ALL && q.topic !== activeTopic) return false
      if (difficulty !== ALL && q.difficulty !== difficulty) return false
      if (query && !`${q.title} ${q.topic} ${q.prompt}`.toLowerCase().includes(query)) return false
      if (status !== ALL && q.id !== selectedId) {
        if ((status === 'solved') !== Boolean(solvedIds?.has(q.id))) return false
      }
      return true
    })
  }, [questions, language, activeTopic, difficulty, status, search, selectedId, solvedIds])

  const activeQuestion = filteredQuestions.find((q) => q.id === selectedId) ?? filteredQuestions[0] ?? null
  const activeIndex = activeQuestion ? filteredQuestions.indexOf(activeQuestion) : -1

  const selectQuestion = useCallback((question) => setSelectedId(question.id), [])
  const goNext = useCallback(() => {
    const next = filteredQuestions[activeIndex + 1]
    if (next) setSelectedId(next.id)
  }, [filteredQuestions, activeIndex])
  const goPrevious = useCallback(() => {
    const previous = filteredQuestions[activeIndex - 1]
    if (previous) setSelectedId(previous.id)
  }, [filteredQuestions, activeIndex])

  const hasActiveFilters = language !== ALL || activeTopic !== ALL || difficulty !== ALL || status !== ALL || search !== ''
  const resetFilters = useCallback(() => {
    setLanguage(ALL)
    setTopic(ALL)
    setDifficulty(ALL)
    setStatus(ALL)
    setSearch('')
  }, [])

  return {
    language, setLanguage,
    topic: activeTopic, setTopic, topicOptions,
    difficulty, setDifficulty,
    status, setStatus,
    search, setSearch,
    filteredQuestions,
    activeQuestion,
    selectQuestion,
    goNext, goPrevious,
    hasNext: activeIndex >= 0 && activeIndex < filteredQuestions.length - 1,
    hasPrevious: activeIndex > 0,
    position: activeIndex + 1,
    hasActiveFilters,
    resetFilters,
  }
}