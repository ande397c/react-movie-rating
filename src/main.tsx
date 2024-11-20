import './App.css'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Game } from './pages/Game'
import { Highscores } from './pages/Highscores'

const routes = [
  { path: '/', element: <App /> },
  { path: '/game', element: <Game /> },
  { path: '/highscores', element: <Highscores /> }
]

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
