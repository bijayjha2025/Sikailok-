import { isPreviewLanguage } from '../../content/runnerConfig.js'
import PreviewFrame from './PreviewFrame.jsx'

function CodeRunnerPanel({ languages, question, editor, runner, onRun, onReset }) {
  const isPreview = isPreviewLanguage(editor.language)
  const { result, running } = runner

  return (
   <div className="pixel-panel grid min-w-0 gap-3 overflow-hidden p-3 sm:p-4">
    <div className="flex flex-wrap items-center justify-between gap-3">
    
    <div>
     <p className="pixel-kicker">Browser runner</p>
     <h2 className="m-0 text-xl font-extrabold">Write and run</h2>
    </div>
    
    <label className="grid gap-1 text-sm font-bold" htmlFor="runner-language">Runner language
     <select id="runner-language" className="pixel-field" value={editor.language} onChange={(event) => editor.setLanguage(event.target.value)}>
      {languages.map((language) => <option key={language.id} value={language.id}>{language.label}</option>)}
     </select>
    </label>
    </div>

    <label className="grid gap-1 text-sm font-bold" htmlFor="practice-code">
     {editor.language.toUpperCase()} code
     <textarea id="practice-code" className="min-h-[270px] w-full resize-y border-2 border-[#1c2b4a] bg-[#17243c] p-3 font-mono text-sm leading-6 text-white outline-none focus-visible:ring-3 focus-visible:ring-[#ffd23f]/70" value={editor.code} onChange={(event) => editor.setCode(event.target.value)} spellCheck="false" autoCapitalize="off" autoComplete="off" aria-describedby="runner-note" />
    </label>

    {editor.language === 'python' && (
     <label className="grid gap-1 text-sm font-bold" htmlFor="program-input">
      Standard input <span className="font-normal text-slate-600">(one input value per line)</span>
      <textarea id="program-input" className="pixel-field min-h-[72px] resize-y font-mono" value={editor.stdin} onChange={(event) => editor.setStdin(event.target.value)} placeholder="Optional input for input()" />
     </label>
     )}

     {editor.language === 'html' && (
     <label className="grid gap-1 text-sm font-bold" htmlFor="preview-css">Preview CSS
      <textarea id="preview-css" className="pixel-field min-h-[90px] resize-y font-mono text-sm" value={editor.cssCode} onChange={(event) => editor.setCssCode(event.target.value)} />
     </label>
     )}

     <div className="flex flex-wrap items-center gap-2">
      <button className="game-button-primary" type="button" onClick={onRun} disabled={running}>
       {running ? 'Running…' : isPreview ? 'Update preview' : 'Run code'}
      </button>
      {question && <button className="game-button" type="button" onClick={onReset}>Reset to question starter</button>}
     </div>

     <p id="runner-note" className="m-0 text-xs leading-5 text-slate-600">Python and SQL run locally in your browser; their runtime loads from a public CDN the first time. Your code is not sent to a code-execution service. HTML/CSS previews run in a sandboxed frame.</p>

     {isPreview ? (
      <section className="grid gap-2" aria-label="Code preview">
       <h3 className="m-0 text-base font-extrabold">Preview</h3>
       <div className="min-h-[280px] border-2 border-[#1c2b4a] bg-white">
       {result?.kind === 'preview' ? (
       <PreviewFrame language={editor.language} code={result.code} cssCode={editor.cssCode} />
       ) : <p className="p-4 text-sm text-slate-600">Run your code to see the preview.</p>}
       </div>
      </section>
      ) : (
      
      <section className="grid gap-2" aria-label="Program output">
       <h3 className="m-0 text-base font-extrabold">Output</h3>
       <pre className="m-0 min-h-20 overflow-x-auto whitespace-pre-wrap break-words border-2 border-[#1c2b4a] bg-[#17243c] p-3 font-mono text-sm text-white" aria-live="polite">
        {!result ? 'Run your program to see its output.' : result.error ? `Error: ${result.error}` : result.output || '(no output)'}
       </pre>
       {result?.status && (
       <p className={`m-0 text-sm font-bold ${result.status === 'pass' ? 'text-green-800' : 'text-amber-800'}`} aria-live="polite">
        {result.status === 'pass'? 'Nice work — the output matches this question.' : 'Not quite yet — compare your output with the expected result and try again.'}
       </p>
       )}
      </section>
     )}
   </div>
  )
}
export default CodeRunnerPanel