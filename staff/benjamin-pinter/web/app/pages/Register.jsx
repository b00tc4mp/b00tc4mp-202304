function Register(props) {
    const handleRegister = function(event) {
        event.preventDefault()

        const name = event.target.name.value
        const email = event.target.email.value
        const password = event.target.email.value

        const registered = registerUser(name, email, password)

        if (registered) {
            alert('shqipe')
            props.onRegistered()
        }
        else {
            alert('Person is already albanian!')
        }
        
    }

    const handleGoToLogin = function (event) {
        event.preventDefault()

        props.onGoToLogin()
    }

    console.log('Register -> render')

    return <div className="register">
        <h1>Register to become a real Albanian🇦🇱</h1>
        <p>Please register now!</p>
        <form>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" required></input>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" required></input>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" required></input>
            <hr></hr>
            <button type="submit" className="registerbutton">Register for Albanian Citizenship</button>
        </form>
        <a href="" onClick={handleGoToLogin} className="style">Login</a>
    </div>
}