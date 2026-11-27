import { useCallback, useEffect, useMemo, useState } from 'react'

const STORAGE_KEY = 'examinationHall.progress.v1'//For now, later will add backend

function loadProgress() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY)
    const parsed = raw ? JSON.parse(raw) : {}
    return parsed && typeof parsed === 'object' ? parsed : {}
  } catch {
    return {}
  }
}

export function usePracticeProgress() {
  const [solved, setSolved] = useState(loadProgress)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(solved))
    } catch {
    }
  }, [solved])

  const solvedIds = useMemo(() => new Set(Object.keys(solved)), [solved])

  const markSolved = useCallback((id) => {
    setSolved((previous) => (previous[id] ? previous : { ...previous, [id]: new Date().toISOString() }))
  }, [])

  const unmarkSolved = useCallback((id) => {
    setSolved((previous) => {
      if (!previous[id]) return previous
      const { [id]: _removed, ...rest } = previous
      return rest
    })
  }, [])

  const resetProgress = useCallback(() => setSolved({}), [])

  return { solvedIds, markSolved, unmarkSolved, resetProgress }
}