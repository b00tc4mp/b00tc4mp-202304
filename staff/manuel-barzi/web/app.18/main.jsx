const context = {}

function Login() {
    const handleLogin = function (event) {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        console.log(email, password)
    }

    const hangleGoToRegister = function (event) {
        event.preventDefault()

        console.log('go to register')
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

function Register() {
    const handleRegister = function (event) {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        console.log(name, email, password)
    }

    const handleGoToRegister = function (event) {
        event.preventDefault()

        console.log('go to login')
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

        <a href="" onClick={handleGoToRegister}>Login</a>
    </div>
}

function App() {
    const viewState = React.useState('login')

    const view = viewState[0]
    const setView = viewState[1]


    return <>
        {view === 'login' && <Login />}
        {view === 'register' && <Register />}

        <button onClick={() => setView('register')}>Go to Register</button>
        <button onClick={() => setView('login')}>Go to Login</button>
    </>
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)