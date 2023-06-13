document.querySelector('.login-page').querySelector('form').onsubmit = function(event) {
    event.preventDefault()

    var email = event.target.email.value

    var password = event.target.password.value

    console.log('hello submit', email, password)
}