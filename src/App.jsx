import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

import Home from './pages/Home'
import Musica from './pages/Musica'
import ArtesMarciales from './pages/ArtesMarciales'
import MedicinaChina from './pages/MedicinaChina'
import Navbar from './components/Navbar'
import AcercaDeMi from './pages/AcercaDeMi'
import Footer from './pages/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="site">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/musica" element={<Musica />} />
          <Route path="/artes-marciales" element={<ArtesMarciales />} />
          <Route path="/medicina-china" element={<MedicinaChina />} />
          <Route path="/acerca-de-mi" element={<AcercaDeMi />} />
        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  )
}

export default App