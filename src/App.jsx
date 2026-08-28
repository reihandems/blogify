import { GlobalContext } from './context'
import { Router } from './routers'
import './App.css'
import { RouterProvider } from 'react-router-dom'

function App() {
  const user = {
    username: "rdemstion"
  }

  return (
    <GlobalContext.Provider value={user}>
      <RouterProvider router={Router} />
    </GlobalContext.Provider>
  )
}

export default App
