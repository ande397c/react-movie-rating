import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { paths } from '@/config/paths'
import { Landing } from '@/app/routes/Landing'
import { Game } from '@/app/routes/Game'
import { Highscores } from '@/app/routes/Highscores'
import { NotFound } from '@/app/routes/NotFound'

const routes = [
  { path: paths.landing, element: <Landing /> },
  { path: paths.game, element: <Game /> },
  { path: paths.highscores, element: <Highscores /> },
  { path: '*', element: <NotFound /> }
]

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
  </BrowserRouter>
)
