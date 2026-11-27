import { practiceQuestions } from '../content/questionBank/index.js'
import { languages, difficulties } from '../content/runnerConfig.js'
import { usePracticeProgress } from '../hooks/usePracticeProgress.js'
import { useQuestionFilters } from '../hooks/useQuestionFilters.js'
import { useEditorState } from '../hooks/useEditorState.js'
import { useCodeRunner } from '../hooks/useCodeRunner.js'

import QuestionFilters from '../components/examinationHall/QuestionFilter.jsx'
import QuestionList from '../components/examinationHall/QuestionList.jsx'
import QuestionPanel from '../components/examinationHall/QuestionPanels.jsx'
import CodeRunnerPanel from '../components/examinationHall/CodeRunnerPanel.jsx'

function ExaminationHall({ onBack }) {
  const progress = usePracticeProgress()
  const filters = useQuestionFilters(practiceQuestions, { solvedIds: progress.solvedIds })
  const question = filters.activeQuestion
  const editor = useEditorState(question)
  const runner = useCodeRunner({ questionId: question?.id ?? null, language: editor.language })

  const solvedCount = progress.solvedIds.size
  const isSolved = question ? progress.solvedIds.has(question.id) : false

  async function handleRun() {
    const target = question // keep the question this run belongs to, even if the student switches mid-run
    const result = await runner.run({ code: editor.code, stdin: editor.stdin, question: target })
    if (result.status === 'pass' && target) progress.markSolved(target.id)
  }

  function handleReset() {
    editor.reset()
    runner.clear()
  }

  function handleToggleSolved() {
    if (!question) return
    if (isSolved) progress.unmarkSolved(question.id)
    else progress.markSolved(question.id)
  }

  return (
   <main className="pixel-page">
    <header className="pixel-page-header">
     <button className="game-button" type="button" onClick={onBack}><span aria-hidden="true">←</span> Back to campus</button>
     <p className="pixel-kicker hidden sm:block">Sikailok Academy / Stage 01</p>
    </header>

    <section className="pixel-page-content max-w-[1200px]">
     <div className="pixel-panel grid gap-5 p-4 sm:p-6">
      <div className="grid gap-3">
       <p className="pixel-kicker">Sikailok Academy / Practice Studio</p>
       <h1 className="pixel-title m-0">Examination Hall</h1>
       <p className="pixel-info m-0">Pick a question from your lessons, write a solution, and run it in the browser.The question bank currently has {practiceQuestions.length} practice variations.</p>
       <p className="m-0 text-sm font-bold" aria-live="polite">You have solved {solvedCount} of {practiceQuestions.length} questions.</p>
      </div>

      <div className="grid gap-5 lg:grid-cols-[minmax(270px,0.8fr)_minmax(0,1.5fr)]">
       <section className="grid content-start gap-3" aria-label="Question library">
        <h2 className="m-0 text-xl font-extrabold">Question library</h2>
        <QuestionFilters filters={filters} languages={languages} difficulties={difficulties} totalCount={practiceQuestions.length} />
        <QuestionList questions={filters.filteredQuestions} activeId={question?.id} solvedIds={progress.solvedIds} onSelect={filters.selectQuestion}/>
       </section>

      <section className="grid content-start gap-4">
       {question ? (
       <QuestionPanel key={question.id} question={question} position={filters.position} total={filters.filteredQuestions.length} solved={isSolved} onToggleSolved={handleToggleSolved} onNext={filters.goNext} onPrevious={filters.goPrevious} hasNext={filters.hasNext} hasPrevious={filters.hasPrevious} />
        ) : (
         <div className="pixel-info">No question is selected. Change a filter or search term to find a practice question.</div>
        )}

      <CodeRunnerPanel languages={languages} question={question} editor={editor} runner={runner} onRun={handleRun} onReset={handleReset}/>
      </section>
      </div>
     </div>
    </section>
    </main>
  )
}
export default ExaminationHall