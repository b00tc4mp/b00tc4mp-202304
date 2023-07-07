import registerUser from "../logic/registerUser"

function Register(props) {
    console.log('Register -> render')

    const handleRegister = event => {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        try {
            registerUser(name, email, password, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                alert('User registered')

                props.onRegistered()
            })
        } catch (error) {
            alert(error.message)
        }
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

            <button type="submit">Register</button>
        </form>

        <a href="" onClick={handleGoToLogin}>Login</a>
    </div>
}

export default Register