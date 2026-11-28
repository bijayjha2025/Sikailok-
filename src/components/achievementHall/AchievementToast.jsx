import { useEffect } from 'react'

function AchievementToast({ award, onDismiss }) {
  const awardId = award?.id

  useEffect(() => {
    if (!awardId) return undefined
    const timer = window.setTimeout(onDismiss, 6000)
    return () => window.clearTimeout(timer)
  }, [awardId, onDismiss])

  if (!award) return null

  return (
   <div className="fixed bottom-4 right-4 z-50 flex max-w-sm items-center gap-3 border-2 border-[#1c2b4a] bg-[#fff3c4] p-3 shadow-[4px_4px_0_#1c2b4a]" role="status" aria-live="polite">
    <span className="text-4xl" aria-hidden="true">{award.icon}</span>
    <div className="grid gap-0.5">
     <p className="pixel-kicker m-0">{award.kind ? 'Trophy unlocked!' : 'Achievement unlocked!'}</p>
     <p className="m-0 font-extrabold">{award.title}</p>
     <p className="m-0 text-xs">{award.description ?? award.detail}</p>
    </div>
    <button className="game-button" type="button" onClick={onDismiss} aria-label="Dismiss notification">✕</button>
   </div>
  )
}

export default AchievementToast