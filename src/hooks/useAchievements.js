import { useCallback, useEffect, useMemo, useState } from 'react'
import { computeAchievements } from '../utils/achievements.js'

const UNLOCK_KEY = 'examinationHall.unlocks.v1'

function loadUnlocks() {
  try {
    const raw = window.localStorage.getItem(UNLOCK_KEY)
    const parsed = raw ? JSON.parse(raw) : null
    return parsed && typeof parsed === 'object' ? parsed : null
  } catch {
    return null
  }
}


export function useAchievements(questions, entries) {
  const summary = useMemo(() => computeAchievements(questions, entries), [questions, entries])
  const [unlockedAt, setUnlockedAt] = useState(loadUnlocks)
  const [queue, setQueue] = useState([])

  useEffect(() => {
    const known = unlockedAt ?? {}
    const fresh = [...summary.badges, ...summary.trophies].filter((award) => award.earned && !known[award.id])
    if (unlockedAt !== null && fresh.length === 0) return

    const stamp = new Date().toISOString()
    setUnlockedAt({ ...known, ...Object.fromEntries(fresh.map((award) => [award.id, stamp])) })
    // The very first run only records what already exists, with no announcements.
    if (unlockedAt !== null) setQueue((current) => [...current, ...fresh])
  }, [summary, unlockedAt])

  useEffect(() => {
    if (unlockedAt === null) return
    try {
      window.localStorage.setItem(UNLOCK_KEY, JSON.stringify(unlockedAt))
    } catch {
    }
  }, [unlockedAt])

  const dismissToast = useCallback(() => setQueue((current) => current.slice(1)), [])

  return { ...summary, unlockedAt: unlockedAt ?? {}, toast: queue[0] ?? null, dismissToast }
}