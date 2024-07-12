import { ReactElement } from 'react'

function App(): ReactElement {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col">
        <button>Play game</button>
        <button>View highscores</button>
      </div>
    </div>
  )
}

export default App
