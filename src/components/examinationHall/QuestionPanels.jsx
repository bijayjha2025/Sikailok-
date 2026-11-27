import { useState } from 'react'

function QuestionPanel({ question, position, total, solved, onToggleSolved, onNext, onPrevious, hasNext, hasPrevious }) {
  const [showSolution, setShowSolution] = useState(false)
  const checkedByRunner = question.expected !== undefined

  return (
   <article className="pixel-quest my-0">
    <div className="flex flex-wrap items-center justify-between gap-2">
     <p className="pixel-kicker">{question.topic} / {question.difficulty}</p>
     <span className="rounded-full border border-[#1c2b4a] bg-white px-3 py-1 text-xs font-bold">{question.language.toUpperCase()} · Variation {question.variant}</span>
    </div>

    <h2 className="m-0 text-xl font-extrabold">{question.title}
    {solved && <span className="ml-2 text-base text-green-800">✓ Solved</span>}</h2>
    <p className="m-0 whitespace-pre-line leading-6">{question.prompt}</p>

    {showSolution && (
     <div className="grid gap-2">
      <strong>Example solution</strong>
      <pre className="m-0 overflow-x-auto border-2 border-[#1c2b4a] bg-[#17243c] p-3 text-sm text-white"><code>{question.solution}</code></pre>
      {checkedByRunner && (
      <p className="m-0 whitespace-pre-wrap text-sm"><strong>Expected output:</strong>{'\n'}{question.expected || '(no output)'}</p>
      )}
     </div>
    )}

    <div className="flex flex-wrap items-center gap-2">
     <button className="game-button" type="button" onClick={() => setShowSolution((value) => !value)}>{showSolution ? 'Hide example solution' : 'Show example solution'}</button>
      {!checkedByRunner && (
     <button className="game-button" type="button" onClick={onToggleSolved}>{solved ? 'Mark as not done' : 'Mark as done'}</button>
     )}
     <span className="flex-1" />
     <button className="game-button" type="button" onClick={onPrevious} disabled={!hasPrevious}>← Previous</button>
     <span className="text-xs font-semibold text-slate-600">{position} / {total}</span>
     <button className="game-button" type="button" onClick={onNext} disabled={!hasNext}>Next →</button>
    </div>
   </article>
  )
}
export default QuestionPanel