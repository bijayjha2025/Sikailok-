import { useCallback, useEffect, useRef } from 'react'
import { IDLE_CAP_MS } from '../content/achievementCatalog.js'

const freshSession = (questionId) => ({
  questionId,
  activeMs: 0,
  lastTouch: Date.now(),
  failedRuns: 0,
  usedSolution: false,
})

export function useSolveTimer(questionId) {
  const session = useRef(freshSession(questionId))

  useEffect(() => {
    session.current = freshSession(questionId)
  }, [questionId])

  const touch = useCallback(() => {
    const current = session.current
    const now = Date.now()
    current.activeMs += Math.min(now - current.lastTouch, IDLE_CAP_MS)
    current.lastTouch = now
  }, [])

  const noteFailedRun = useCallback((forQuestionId) => {
    if (session.current.questionId === forQuestionId) session.current.failedRuns += 1
  }, [])

  const noteSolutionViewed = useCallback(() => {
    session.current.usedSolution = true
  }, [])

  const snapshot = useCallback(() => {
    touch()
    const { activeMs, failedRuns, usedSolution } = session.current
    return { timeMs: activeMs, failedRuns, usedSolution }
  }, [touch])

  return { touch, snapshot, noteFailedRun, noteSolutionViewed }
}