import { useState } from 'react'
import NotesViewer from '../components/library/NotesViewer'
import PixelScene from './PixelScene'

const subjects = [
  { id: 'html', title: 'HTML' },
  { id: 'css', title: 'CSS' },
  { id: 'python', title: 'Python' },
  { id: 'sql', title: 'SQL' },
]

const markdownNotes = import.meta.glob('../content/*/chapter*/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
})

function slugify(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

const fileNotes = Object.entries(markdownNotes).flatMap(([path, content]) => {
  const match = path.match(/^\.\.\/content\/([^/]+)\/(chapter\d+)\/([^/]+)\.md$/i)
  if (!match) return []

  const [, subjectId, chapterSlug, fileName] = match
  if (!subjects.some((subject) => subject.id === subjectId)) return []

  const title = content.match(/^#\s*(.+)$/m)?.[1]?.trim()
    || fileName.replace(/[-_]+/g, ' ').replace(/\b\w/g, (letter) => letter.toUpperCase())
  const filenameSlug = slugify(fileName)
  const slug = subjectId === 'html' && filenameSlug === 'introduction'
    ? 'introduction-to-html'
    : filenameSlug
  const chapterNumber = Number(chapterSlug.match(/\d+/)?.[0] || 0)

  return [{
    id: `${subjectId}-${chapterSlug}-${filenameSlug}`,
    subjectId,
    chapterSlug: chapterSlug.toLowerCase(),
    chapterNumber,
    chapterTitle: `Chapter ${chapterNumber}`,
    fileName,
    title,
    slug,
    content,
  }]
})

const lessons = fileNotes
  .map((lesson) => ({
    ...lesson,
    route: lesson.subjectId === 'html' && lesson.slug === 'introduction-to-html'
      ? `/library/${lesson.subjectId}/${lesson.slug}`
      : `/library/${lesson.subjectId}/${lesson.chapterSlug}/${lesson.slug}`,
  }))
  .sort((a, b) => a.subjectId.localeCompare(b.subjectId)
    || a.chapterNumber - b.chapterNumber
    || Number(b.fileName === 'introduction') - Number(a.fileName === 'introduction')
    || a.fileName.localeCompare(b.fileName))

function LibraryPage({ onBack, onNavigate, subject, chapterSlug, lessonSlug }) {
  const [questStarted, setQuestStarted] = useState(false)
  const selectedSubject = subjects.find((item) => item.id === subject)
  const subjectLessons = lessons.filter((lesson) => lesson.subjectId === subject)
  const currentLesson = subjectLessons.find((lesson) => (
    lesson.slug === lessonSlug
    && (!chapterSlug || lesson.chapterSlug === chapterSlug.toLowerCase())
  )) || subjectLessons.find((lesson) => lesson.slug === lessonSlug)
  const currentIndex = subjectLessons.findIndex((lesson) => lesson.id === currentLesson?.id)
  const chapters = [...new Set(subjectLessons.map((lesson) => lesson.chapterSlug))]

  return (
    <main className="pixel-page">
      <header className="pixel-page-header">
        <button className="game-button" type="button" onClick={onBack}>
          <span aria-hidden="true">←</span> Back to campus
        </button>
        <p className="pixel-kicker hidden sm:block">Sikailok Academy / Stage 01</p>
      </header>

      <section className="pixel-page-content max-w-[1000px]">
        <PixelScene
          title={selectedSubject?.title || 'Library'}
          scene="library"
        />
        <div className="pixel-panel mt-4 grid gap-5 p-4 sm:p-6">
          {!selectedSubject ? (
            <>
              <div className="grid gap-3">
                <p className="pixel-kicker">Sikailok Academy / Location</p>
                <h1 className="pixel-title m-0">Library</h1>
                <p className="pixel-info m-0">
                  Explore notes and choose a subject for your next learning quest.
                </p>
                <div className="pixel-quest my-0">
                  <strong>Current quest</strong>
                  <span>Pick a subject and explore its notes.</span>
                </div>
              </div>
              {!questStarted ? (
                <button
                  className="game-button-primary justify-self-start"
                  type="button"
                  onClick={() => setQuestStarted(true)}
                >
                  Start quest
                </button>
              ) : (
                <div className="grid gap-3">
                  <h2 className="m-0 text-lg font-extrabold">Choose a subject</h2>
                  <div className="flex flex-wrap gap-2" role="group" aria-label="Choose a notes subject">
                    {subjects.map((item) => (
                      <button
                        key={item.id}
                        className="rounded-full border-2 border-[#1c2b4a] bg-white px-4 py-2 font-bold cursor-pointer hover:bg-[#fff3c4]"
                        type="button"
                        onClick={() => onNavigate(`/library/${item.id}`)}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : currentLesson ? (
            <>
              <button
                className="game-button justify-self-start"
                type="button"
                onClick={() => onNavigate(`/library/${subject}`)}
              >
                ← Back to {selectedSubject.title} chapters
              </button>
              <p className="pixel-kicker">
                Sikailok Academy / {selectedSubject.title} / {currentLesson.chapterTitle}
              </p>
              <NotesViewer content={currentLesson.content} />
              <nav className="flex flex-wrap justify-between gap-3 border-t border-slate-200 pt-4" aria-label="Lesson navigation">
                {currentIndex > 0 ? (
                  <button
                    className="game-button"
                    type="button"
                    onClick={() => onNavigate(subjectLessons[currentIndex - 1].route)}
                  >
                    ← Previous: {subjectLessons[currentIndex - 1].title}
                  </button>
                ) : <span />}
                {currentIndex < subjectLessons.length - 1 ? (
                  <button
                    className="game-button"
                    type="button"
                    onClick={() => onNavigate(subjectLessons[currentIndex + 1].route)}
                  >
                    Next: {subjectLessons[currentIndex + 1].title} →
                  </button>
                ) : null}
              </nav>
            </>
          ) : (
            <>
              <button
                className="game-button justify-self-start"
                type="button"
                onClick={() => onNavigate('/library')}
              >
                ← Back to subjects
              </button>
              <p className="pixel-kicker">Sikailok Academy / Subject</p>
              <h1 className="pixel-title m-0">{selectedSubject.title}</h1>
              {chapters.length === 0 ? (
                <p className="pixel-info m-0">No notes have been added to this subject yet.</p>
              ) : chapters.map((chapter) => {
                const chapterLessons = subjectLessons.filter((lesson) => lesson.chapterSlug === chapter)

                return (
                  <section key={chapter} className="grid gap-3">
                    <h2 className="m-0 text-xl font-extrabold">
                      {chapterLessons[0].chapterTitle}
                      {chapterLessons[0].chapterNumber === 1 ? ': Getting Started' : ''}
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {chapterLessons.map((lesson) => (
                        <button
                          key={lesson.id}
                          className="game-button"
                          type="button"
                          onClick={() => onNavigate(lesson.route)}
                        >
                          {lesson.title}
                        </button>
                      ))}
                    </div>
                  </section>
                )
              })}
            </>
          )}
        </div>
      </section>
    </main>
  )
}

export default LibraryPage
