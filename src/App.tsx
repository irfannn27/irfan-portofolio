import { useState, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import LoadingScreen from './components/LoadingScreen'

// Code splitting / Lazy loading for high PageSpeed Mobile Score
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

// Sleek UI/UX Pro Max Top Progress Indicator for smooth Suspense route transitions
const RouteFallback = () => (
  <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center">
    <div className="fixed top-0 inset-x-0 h-[2.5px] bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 animate-pulse z-[999999]" />
  </div>
)

function App() {
  const [showCurtain, setShowCurtain] = useState(true)

  return (
    <>
      {showCurtain && <LoadingScreen onComplete={() => setShowCurtain(false)} />}
      <Suspense fallback={<RouteFallback />}>
        <Routes>
          <Route element={<Homepage />} path="/" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<ProjectsPage />} path="/project" />
          <Route element={<ContactPage />} path="/contact" />
        </Routes>
      </Suspense>
    </>
  )
}

export default App
