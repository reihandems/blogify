import Home from './pages/Index'
import { GlobalContext } from './context'
import './App.css'

function App() {
  const user = {
    username: "rdemstion"
  }

  return (
    <GlobalContext.Provider value={user}>
      <Home />
    </GlobalContext.Provider>
  )
}

export default App
