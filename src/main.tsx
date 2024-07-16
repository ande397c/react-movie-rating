import React from 'react'
import './App.css'
import App from './App'
import { Game } from './pages/Game'
import { Highscores } from './pages/Highscores'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game" element={<Game />} />
        <Route path="/highscores" element={<Highscores />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
