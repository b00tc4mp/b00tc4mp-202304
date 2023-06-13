function Login(props) {
    const handleLogin = function (event) {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        const authenticated = authenticateUser(email, password)

        if (!authenticated)
            alert('Wrong credentials')
        else {
            context.email = email

            props.onLoggedIn()
        }
    }

   const handleGoToRegister = event => {
        event.preventDefault()

        props.onGoToRegister()
    }

    console.log('Login -> render')

    return <div className="login-page _off">
        <h1>Login</h1>

        <form onSubmit={handleLogin}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email"></input>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"></input>

            <button type="submit">Login</button>
        </form>

        <a href="" onClick={handleGoToRegister}>Register</a>
    </div>
}