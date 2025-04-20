import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blog from './components/Blog'

function App() {
  return (
    <div className="p-10 space-y-20 bg-white text-gray-800 min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Blog />
    </div>
  )
}

export default App
