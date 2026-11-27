import { buildPreviewSource } from '../../utils/codeRunner.js'

function PreviewFrame({ language, code, cssCode }) {
  return (
   <iframe title={`${language.toUpperCase()} preview`} className="h-full min-h-[280px] w-full bg-white" sandbox="" srcDoc={buildPreviewSource(language, code, cssCode)}/>
  )
}

export default PreviewFrame