const context = {}

function Login() {
    const handleSubmit = function (event) {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value

        console.log(email, password)
    }

    return <div className="login-page _off">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email"></input>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"></input>

            <button type="submit">Login</button>
        </form>

        <a href="">Register</a>
    </div>
}

function Register() {
    const handleSubmit = function (event) {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.password.value

        console.log(name, email, password)
    }

    return <div className="register-page">
        <h1>Register</h1>

        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name"></input>

            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email"></input>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password"></input>

            <button type="submit">Regsiter</button>
        </form>

        <a href="">Login</a>
    </div>
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
//root.render(<Login />)
root.render(<Register />)