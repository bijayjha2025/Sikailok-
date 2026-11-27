import { useCallback, useState } from 'react'
import { isPreviewLanguage } from '../content/runnerConfig.js'
import { outputsMatch, runWorker, workerFor } from '../utils/codeRunner.js'

export function useCodeRunner({ questionId, language }) {
  const [stored, setStored] = useState(null)
  const [running, setRunning] = useState(false)

  const result = stored && stored.questionId === questionId && stored.language === language ? stored : null

  const run = useCallback(async ({ code, stdin, question }) => {
    const context = { questionId, language }

    if (isPreviewLanguage(language)) {
      const preview = { ...context, kind: 'preview', code }
      setStored(preview)
      return preview
    }

    setRunning(true)
    setStored(null)
    let outcome
    try {
      const response = await runWorker(workerFor(language), { code, stdin })
      const error = response.error || ''
      let status = null
      if (!error && question?.language === language && question.expected !== undefined) {
        status = outputsMatch(response.output ?? '', question.expected) ? 'pass' : 'fail'
      }
      outcome = { ...context, kind: 'output', output: response.output ?? '', error, status }
    } catch (error) {
      outcome = { ...context, kind: 'output', output: '', error: error.message, status: null }
    }
    setStored(outcome)
    setRunning(false)
    return outcome
  }, [questionId, language])

  const clear = useCallback(() => setStored(null), [])

  return { result, running, run, clear }
}