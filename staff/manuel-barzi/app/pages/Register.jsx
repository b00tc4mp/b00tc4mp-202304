function Register(props) {
    const handleRegister = event => {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        const registered = registerUser(name, email, password)

        if (!registered)
            alert('user already exists')
        else {
            alert('User registered')

            props.onRegistered()
        }
    }

    const handleGoToLogin = function (event) {
        event.preventDefault()

        props.onGoToLogin()
    }

    console.log('Register -> render')

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