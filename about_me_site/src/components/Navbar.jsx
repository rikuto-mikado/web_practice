import { useState, useEffect } from 'react'

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-[1200px] mx-auto px-[24px] py-[16px] flex justify-between items-center">
        
        <div className="text-[20px] font-bold text-gray-800 dark:text-white">
          Self Introduction
        </div>

        <div className="flex items-center">
          <nav className="flex gap-[20px] text-gray-700 dark:text-gray-200 text-[16px]">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#blog" className="hover:text-blue-500">Blog</a>
            <a href="#news" className="mr-[10px] hover:text-blue-500">News</a>
          </nav>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="mr-[30px] ml-[10px] px-[16px] py-[8px] bg-gray-800 text-white dark:bg-white dark:text-gray-800 rounded-full shadow-md text-[14px] md:text-[16px]"
          >
            {darkMode ? '🌞 Light Mode' : '🌙 Night Mode'}
          </button>
        </div>
      </div>
    </header>
  )
}
