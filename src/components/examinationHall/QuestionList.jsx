function QuestionList({ questions, activeId, solvedIds, onSelect }) {
  if (!questions.length) {
    return <p className="m-2 text-sm">No questions match those filters. Clear a filter to see more.</p>
  }

  return (
   <ul className="m-0 max-h-[520px] list-none overflow-y-auto border-2 border-[#1c2b4a] bg-slate-50 p-2" aria-label="Filtered practice questions">
    {questions.map((question) => {
    const isActive = activeId === question.id
    const isSolved = solvedIds.has(question.id)
    
    return (
     <li key={question.id} className="mb-2 last:mb-0">
      <button className={`grid w-full cursor-pointer gap-1 border-2 p-3 text-left ${isActive ? 'border-[#1c2b4a] bg-[#fff3c4]' : 'border-slate-300 bg-white hover:border-[#1c2b4a]'}`} type="button" onClick={() => onSelect(question)} aria-current={isActive ? 'true' : undefined}>
      <span className="flex items-start justify-between gap-2 font-bold">
       <span>{question.title}</span>
       {isSolved && <span className="text-green-800" aria-label="Solved">✓</span>}
      </span>
      <span className="text-xs text-slate-600">{question.topic} · {question.difficulty} · {question.language.toUpperCase()}</span>
      </button>
     </li>
     )
    })}
   </ul>
  )
}
export default QuestionList