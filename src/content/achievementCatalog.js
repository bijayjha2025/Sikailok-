import { languages } from './runnerConfig.js'

export const PAR_TIME_MS = {
  Easy: 2 * 60 * 1000,
  Medium: 5 * 60 * 1000,
  Hard: 10 * 60 * 1000,
}

export const IDLE_CAP_MS = 2 * 60 * 1000

export const RANKS = [
  { min: 0, icon: '🌱', title: 'Rookie' },
  { min: 5, icon: '🔰', title: 'Apprentice' },
  { min: 25, icon: '💻', title: 'Coder' },
  { min: 60, icon: '⚡', title: 'Pro' },
  { min: 120, icon: '🔥', title: 'Expert' },
  { min: 200, icon: '👑', title: 'Master' },
]

export const LANGUAGE_ICONS = { python: '🐍', html: '🌐', css: '🎨', sql: '🗄️' }

export const BADGES = [
  { id: 'first-steps', icon: '👣', title: 'First Steps', description: 'Solve your first question.', stat: 'solved', goal: 1 },
  { id: 'ten-down', icon: '🔟', title: 'Ten Down', description: 'Solve 10 questions.', stat: 'solved', goal: 10 },
  { id: 'half-century', icon: '⭐', title: 'Half Century', description: 'Solve 50 questions.', stat: 'solved', goal: 50 },
  { id: 'century', icon: '💯', title: 'Century', description: 'Solve 100 questions.', stat: 'solved', goal: 100 },
  { id: 'hard-hitter', icon: '💪', title: 'Hard Hitter', description: 'Solve 10 Hard questions.', stat: 'hardSolved', goal: 10 },
  { id: 'speed-demon', icon: '⚡', title: 'Speed Demon', description: 'Earn a gold medal on a Hard question.', stat: 'hardGold', goal: 1 },
  { id: 'gold-rush', icon: '🥇', title: 'Gold Rush', description: 'Earn 10 gold medals.', stat: 'goldCount', goal: 10 },
  { id: 'no-peeking', icon: '🙈', title: 'No Peeking', description: 'Solve 10 questions without opening the example solution.', stat: 'cleanSolves', goal: 10 },
  { id: 'flawless', icon: '✨', title: 'Flawless', description: 'Solve 10 questions on your very first run.', stat: 'flawlessSolves', goal: 10 },
  { id: 'polyglot', icon: '🌍', title: 'Polyglot', description: 'Solve at least one question in every language.', stat: 'languagesStarted', goal: languages.length },
  { id: 'on-a-roll', icon: '🔥', title: 'On a Roll', description: 'Practise 3 days in a row.', stat: 'bestStreak', goal: 3 },
  { id: 'unstoppable', icon: '🌋', title: 'Unstoppable', description: 'Practise 7 days in a row.', stat: 'bestStreak', goal: 7 },
  { id: 'marathon', icon: '⏱️', title: 'Marathon', description: 'Spend 60 minutes solving questions.', stat: 'practiceMinutes', goal: 60 },
]
