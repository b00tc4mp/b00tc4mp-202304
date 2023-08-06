import { useState } from 'react'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import context from './context'

function App() {
  console.log('App -> render')

  const [view, setView] = useState(context.token ? 'home' : 'login')

  const handleGoToRegister = () => setView('register')

  const handleGoToLogin = () => setView('login')

  const handleLoggedIn = () => setView('home')

  console.log('App -> render')

  return <>
      {view === 'login' && <Login onGoToRegister={handleGoToRegister} onLoggedIn={handleLoggedIn} />}
      {view === 'register' && <Register onGoToLogin={handleGoToLogin} onRegistered={handleGoToLogin} />}
      {view === 'home' && <Home onLoggedOut={handleGoToLogin}/>}
  </>
}

export default App
