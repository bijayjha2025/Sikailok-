import { useEffect, useState } from 'react'
import './index.css'
import AchievementHall from './pages/AchievementHall'
import ComputerLab from './pages/ComputerLab'
import ExaminationHall from './pages/ExaminationHall'
import Library from './pages/Library'
import MainSchool from './pages/MainSchool'
import Playground from './pages/Playground'

const routes = {
  '/main-school': MainSchool,
  '/library': Library,
  '/computer-lab': ComputerLab,
  '/examination-hall': ExaminationHall,
  '/achievement-hall': AchievementHall,
  '/playground': Playground,
}

function App() {
  const [path, setPath] = useState(() => window.location.pathname)
  const navigate = (nextPath) => {
    window.history.pushState({}, '', nextPath)
    setPath(nextPath)
  }

  useEffect(() => {
    const handleRouteChange = () => setPath(window.location.pathname)
    const handleCampusNavigation = ({ origin, data }) => {
      if (origin === window.location.origin && data?.type === 'campus-navigation') {
        navigate(data.path)
      }
    }

    window.addEventListener('popstate', handleRouteChange)
    window.addEventListener('message', handleCampusNavigation)
    return () => {
      window.removeEventListener('popstate', handleRouteChange)
      window.removeEventListener('message', handleCampusNavigation)
    }
  }, [])

  const Page = routes[path]
  if (Page) return <Page onBack={() => navigate('/')} />

  return (
    <main className="min-h-screen p-3">
      <iframe title="Sikailok Academy campus" src="/Campus.html" className="block w-full min-h-[calc(100vh-24px)] border-0" />
    </main>
  )
}

export default App
