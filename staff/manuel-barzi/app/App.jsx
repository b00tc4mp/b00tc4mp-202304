function App() {
    const viewState = React.useState('login')

    const view = viewState[0]
    const setView = viewState[1]

    const handleGoToRegister = () => setView('register')

    const handleGoToLogin = () => setView('login')

    console.log('App -> render')

    return <>
        {view === 'login' && <Login onGoToRegister={handleGoToRegister} />}
        {view === 'register' && <Register onGoToLogin={handleGoToLogin} />}
    </>
}