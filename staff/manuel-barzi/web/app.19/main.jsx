const context = {}

function Login(props) {
    const handleLogin = function (event) {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        console.log(email, password)
    }

    const hangleGoToRegister = event => {
        event.preventDefault()

        props.onGoToRegister()
    }

    return <div className="login-page _off">
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email"></input>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"></input>

            <button type="submit">Login</button>
        </form>

        <a href="" onClick={hangleGoToRegister}>Register</a>
    </div>
}

function Register(props) {
    const handleRegister = event => {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        console.log(name, email, password)
    }

    const handleGoToLogin = function (event) {
        event.preventDefault()

        props.onGoToLogin()
    }

    return <div className="register-page">
        <h1>Register</h1>

        <form onSubmit={handleRegister}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name"></input>

            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email"></input>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"></input>

            <button type="submit">Regsiter</button>
        </form>

        <a href="" onClick={handleGoToLogin}>Login</a>
    </div>
}

function App() {
    const viewState = React.useState('login')

    const view = viewState[0]
    const setView = viewState[1]

    const handleGoToRegister = () => setView('register')

    const handleGoToLogin = () => setView('login')

    return <>
        {view === 'login' && <Login onGoToRegister={handleGoToRegister} />}
        {view === 'register' && <Register onGoToLogin={handleGoToLogin} />}
    </>
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)