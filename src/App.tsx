import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import ContactPage from './pages/ContactPage'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <>
      {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
      <Routes>
        <Route element={<Homepage/>} path='/'/>
        <Route element={<AboutPage/>} path='/about'/>
        <Route element={<ProjectsPage/>} path='/project'/>
        <Route element={<ContactPage/>} path='/contact'/>
      </Routes>
    </>
  )
}

export default App

