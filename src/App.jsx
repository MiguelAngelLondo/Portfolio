import { Route, Routes } from 'react-router-dom'
import { Header } from './Layout/Header/Header'
import { Home } from './Pages/Home/Home'
import { Footer } from './Layout/Footer/Footer'
import { TechnicalSkills } from './Pages/TechnicalSkills/TechnicalSkills'
import { WorkExperience } from './Pages/WorkExperience/WorkExperience'
import { Certificates } from './Pages/Certificates/Certificates'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technical-skills" element={<TechnicalSkills />} />
        <Route path="/work-experience" element={<WorkExperience />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
      <Header />
      <Footer />
    </>
  )
}


