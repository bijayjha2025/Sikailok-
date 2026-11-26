
export default function LessonSidebar({ chapters, activeLesson, onSelectLesson }) {
  return (
  
  <nav aria-label="Lesson navigation" className="space-y-6">
   <h2 className="border-b border-slate-200 pb-4 text-lg font-bold tracking-tight text-slate-900">HTML Tutorial</h2>
   
   {chapters.map((chapter) => (
    <section key={chapter.title} className="space-y-2">
     <h3 className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">{chapter.title}</h3>
     <ul className="m-0 list-none space-y-1 p-0">
     
     {chapter.lessons.map((lesson) => {
      const isActive = activeLesson === lesson.id

     return (
      <li key={lesson.id}>
       <button type="button" className={`w-full rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${ isActive ? 'bg-blue-50 text-blue-800' : 'text-slate-700 hover:bg-slate-100 hover:text-slate-950' }`} aria-current={isActive ? 'page' : undefined} onClick={() => onSelectLesson(lesson.id)}>{lesson.title}</button>
      </li>
      )
      })}
     </ul>
    </section>
  ))}
  </nav>
  )
}
