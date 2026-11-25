import LocationPage from './LocationPage'

function Library({ onBack }) {
  return <LocationPage title="Library" scene="library" description="Explore a growing collection of study notes, learning materials, guides, and useful resources across different subjects." quest="Discover a new topic and expand your knowledge." onBack={onBack} />
}

export default Library
