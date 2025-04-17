import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// App.css は削除 or 無視でOK
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="p-10 font-sans bg-white text-gray-800 min-h-screen">
      <div className="flex justify-center gap-8 mb-6">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="w-16 hover:scale-110 transition" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-16 hover:scale-110 transition" alt="React logo" />
        </a>
      </div>

      <h1 className="text-4xl font-bold text-center mb-6">Vite + React + Tailwind</h1>

      <div className="card w-96 bg-base-100 shadow-xl mx-auto">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Counter</h2>
          <p>Try clicking the button!</p>
          <button className="btn btn-primary mt-4" onClick={() => setCount(count + 1)}>
            count is {count}
          </button>
        </div>
      </div>

      <p className="text-center mt-6 text-gray-500">
        Edit <code className="bg-gray-100 px-1 rounded">src/App.jsx</code> and save to test HMR
      </p>
    </div>
  )
}

export default App
