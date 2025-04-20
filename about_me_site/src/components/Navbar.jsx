export default function Navbar() {
    return (
      <header className="bg-white shadow-md fixed w-full top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">Rikuto Mikado</div>
          <nav className="space-x-6 text-gray-700 font-medium">
            <a href="#about" className="hover:text-blue-500">About</a>
            <a href="#skills" className="hover:text-blue-500">Skills</a>
            <a href="#projects" className="hover:text-blue-500">Projects</a>
            <a href="#blog" className="hover:text-blue-500">Blog</a>
            <a href="#news" className="hover:text-blue-500">News</a>
          </nav>
        </div>
      </header>
    )
  }
  