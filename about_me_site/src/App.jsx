// App.jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Blog from './components/Blog'
import News from './components/News'

export default function App() {
  return (
    <>
      <Navbar />
      <main className="pt-96 px-4 md:px-10 space-y-32 bg-white text-gray-800 dark:bg-gray-900 dark:text-white">
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="blog">
          <Blog />
        </section>

        <section id="news">
          <News />
        </section>
      </main>
    </>
  )
}
