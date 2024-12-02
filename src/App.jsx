import './App.css'
import About from './components/About'
import Banner from './components/Banner'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ThemeProvider from './Utils/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Banner />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </ThemeProvider>
  )
}

export default App
