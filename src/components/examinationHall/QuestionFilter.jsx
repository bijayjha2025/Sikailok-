const SELECT_LABEL = 'grid gap-1 text-sm font-bold'

function QuestionFilters({ filters, languages, difficulties, totalCount }) {
 return (
  <div className="grid gap-3">
   <label className={SELECT_LABEL} htmlFor="question-search">Search
    <input id="question-search" className="pixel-field" type="search" value={filters.search} onChange={(event) => filters.setSearch(event.target.value)} placeholder="Search a topic or question" />
   </label>

   <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
    <label className={SELECT_LABEL} htmlFor="language-filter">Language
    <select id="language-filter" className="pixel-field" value={filters.language} onChange={(event) => filters.setLanguage(event.target.value)}>
     <option value="all">All languages</option>
     {languages.map((language) => <option key={language.id} value={language.id}>{language.label}</option>)}
    </select>
    </label>
    
    <label className={SELECT_LABEL} htmlFor="topic-filter">Lesson topic
     <select id="topic-filter" className="pixel-field" value={filters.topic} onChange={(event) => filters.setTopic(event.target.value)}>
      <option value="all">All topics</option>
       {filters.topicOptions.map((topic) => <option key={topic} value={topic}>{topic}</option>)}
     </select>
    </label>
    
    <label className={SELECT_LABEL} htmlFor="difficulty-filter">Difficulty
     <select id="difficulty-filter" className="pixel-field" value={filters.difficulty} onChange={(event) => filters.setDifficulty(event.target.value)}>
     <option value="all">All levels</option>
      {difficulties.map((level) => <option key={level} value={level}>{level}</option>)}
     </select>
    </label>
    
    <label className={SELECT_LABEL} htmlFor="status-filter">Progress
     <select id="status-filter" className="pixel-field" value={filters.status} onChange={(event) => filters.setStatus(event.target.value)}>
      <option value="all">All questions</option>
      <option value="unsolved">Not solved yet</option>
      <option value="solved">Solved</option>
     </select>
    </label>
    </div>

    <div className="flex flex-wrap items-center justify-between gap-2">
     <p className="m-0 text-sm font-semibold text-slate-600" aria-live="polite">Showing {filters.filteredQuestions.length} of {totalCount} questions</p>
     {filters.hasActiveFilters && (
     <button className="game-button" type="button" onClick={filters.resetFilters}>Clear filters</button>
      )}
    </div>
   </div>
  )
}
export default QuestionFilters