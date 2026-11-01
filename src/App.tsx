import { useState, lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import LoadingScreen from './components/LoadingScreen'

// Code splitting / Lazy loading for high PageSpeed Mobile Score
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Suspense fallback={<div className="min-h-screen bg-slate-50 dark:bg-slate-950" />}>
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
