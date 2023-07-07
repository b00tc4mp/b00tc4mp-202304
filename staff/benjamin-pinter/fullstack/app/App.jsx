function App() {
    const viewState = React.useState('login')

    const view = viewState[0]
    const setView = viewState[1]

    const handleGoToRegister = () => setView('register')

    const handleGoToLogin = () => setView('login')

    const handleLoggedIn = () => setView('welcome')

    console.log('App -> render')

    return <>
        {view === 'login' && <Login onGoToRegister={handleGoToRegister} onLoggedIn={handleLoggedIn} />}
        {view === 'register' && <Register onGoToLogin={handleGoToLogin} onRegistered={handleGoToLogin} />}
        {view === 'welcome' && <Home onLoggedOut={handleGoToLogin}/>}
    </>
}