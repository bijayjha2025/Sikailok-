import { isPreviewLanguage } from '../content/runnerConfig.js'

export const pyodideWorker = `
self.onmessage = async ({ data }) => {
  const output = []
  try {
    importScripts('https://cdn.jsdelivr.net/pyodide/v0.27.7/full/pyodide.js')
    const pyodide = await loadPyodide()
    const inputLines = data.stdin.split(/\\r?\\n/)
    pyodide.setStdout({ batched: (line) => output.push(line) })
    pyodide.setStderr({ batched: (line) => output.push(line) })
    pyodide.setStdin({ stdin: () => inputLines.length ? inputLines.shift() : null })
    await pyodide.runPythonAsync(data.code)
    self.postMessage({ output: output.join('\\n') })
  } catch (error) {
    self.postMessage({ output: output.join('\\n'), error: String(error) })
  }
}
`

export const sqlWorker = `
self.onmessage = async ({ data }) => {
  try {
    const base = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/'
    importScripts(base + 'sql-wasm.js')
    const SQL = await initSqlJs({ locateFile: (file) => base + file })
    const db = new SQL.Database()
    const results = db.exec(data.code)
    const output = results.length
      ? results.map((result) => [
          result.columns.join(' | '),
          result.columns.map(() => '---').join(' | '),
          ...result.values.map((row) => row.map((value) => String(value ?? 'NULL')).join(' | ')),
        ].join('\\n')).join('\\n\\n')
      : 'Query executed successfully (no result set).'
    self.postMessage({ output })
    db.close()
  } catch (error) {
    self.postMessage({ output: '', error: String(error) })
  }
}
`

export function workerFor(language) {
  return language === 'python' ? pyodideWorker : sqlWorker
}

export function runWorker(source, message, timeoutMs = 20000) {
  return new Promise((resolve, reject) => {
    const blobUrl = URL.createObjectURL(new Blob([source], { type: 'text/javascript' }))
    const worker = new Worker(blobUrl)
    const finish = (fn, value) => {
      window.clearTimeout(timeout)
      worker.terminate()
      URL.revokeObjectURL(blobUrl)
      fn(value)
    }
    const timeout = window.setTimeout(
      () => finish(reject, new Error('Execution timed out. Check your code for an endless loop and try again.')),
      timeoutMs,
    )
    worker.onmessage = ({ data }) => finish(resolve, data)
    worker.onerror = (event) =>
      finish(reject, new Error(event.message || 'The code runner could not start. Check your connection and try again.'))
    worker.postMessage(message)
  })
}

export function outputsMatch(actual, expected) {
  const normalise = (text) =>
    text.replace(/\r\n/g, '\n').split('\n').map((line) => line.trimEnd()).join('\n').trimEnd()
  return normalise(actual) === normalise(expected)
}

export function buildPreviewSource(language, code, cssCode) {
  if (language === 'css') {
    return `<!doctype html><html><head><meta charset="utf-8"><style>${code}</style></head><body><main><h1>Style this page</h1><p>Your CSS changes appear here.</p><button>Try a button</button></main></body></html>`
  }
  if (!isPreviewLanguage(language) || !cssCode) return code

  const style = `<style>${cssCode}</style>`
  if (/<\/head>/i.test(code)) return code.replace(/<\/head>/i, `${style}</head>`)
  if (/<body[^>]*>/i.test(code)) return code.replace(/<body[^>]*>/i, (tag) => `${tag}${style}`)
  return `${style}${code}`
}