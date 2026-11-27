import { useCallback, useState } from 'react'
import { starterCode } from '../content/runnerConfig.js'

function initialFor(question) {
  return {
    questionId: question?.id ?? null,
    language: question?.language ?? 'python',
    code: question?.starter ?? starterCode.python,
    stdin: question?.testInput ?? '',
  }
}

export function useEditorState(question) {
  const [state, setState] = useState(() => initialFor(question))
  const [cssCode, setCssCode] = useState(starterCode.css)

  if (state.questionId !== (question?.id ?? null)) setState(initialFor(question))

  const setCode = useCallback((code) => setState((s) => ({ ...s, code })), [])
  const setStdin = useCallback((stdin) => setState((s) => ({ ...s, stdin })), [])

  const setLanguage = useCallback((language) => {
    setState((s) => ({
      ...s,
      language,
      code: question?.language === language ? question.starter : starterCode[language],
      stdin: language === 'python' && question?.language === 'python' ? question.testInput ?? '' : s.stdin,
    }))
  }, [question])

  const reset = useCallback(() => setState(initialFor(question)), [question])

  return { language: state.language, code: state.code, stdin: state.stdin, cssCode, setCode, setStdin, setCssCode, setLanguage, reset }
}