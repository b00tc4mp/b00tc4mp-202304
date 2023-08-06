import authenticateUser from '../logic/authenticateUser'
import context from '../context'

function Login(props) {
    const handleSubmit = function (event) {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        try {
            authenticateUser(email, password, (error, token) => {
                if (error) {
                    alert(error.message)

                    return
                }

                context.token = token

                props.onLoggedIn()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleGoToRegister = event => {
        event.preventDefault()

        props.onGoToRegister()
    }

    console.log('Login -> render')

    return <div className="login">
        <h1>Login to purchase construction equipment</h1>
        <p>Please login now!</p>
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input type="email" name="email" id="email" required></input>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required></input>
        <hr></hr>
        <button type="submit" className="loginbutton">Login</button>
        </form>

        <a href="" onClick={handleGoToRegister} className="style">Register</a>
    </div>
}

export default Login