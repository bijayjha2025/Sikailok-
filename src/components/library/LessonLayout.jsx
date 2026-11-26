export default function LessonLayout({ sidebar, children }) {
  return (
    <div className="grid min-h-screen bg-slate-100 font-sans text-slate-900 md:grid-cols-[260px_minmax(0,1fr)]">
      <aside className="border-b-[0.5px] border-slate-200 bg-white p-5 sm:p-6 md:sticky md:top-0 md:h-screen md:overflow-y-auto md:border-b-0 md:border-r-[0.5px]">
        {sidebar}
      </aside>
      <main className="mx-auto w-full min-w-0 max-w-5xl px-4 py-6 sm:px-6 sm:py-10 lg:px-10">
        {children}
      </main>
    </div>
  )
}
