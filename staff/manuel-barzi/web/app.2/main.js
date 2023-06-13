document.querySelector('.login-page').querySelector('form').onsubmit = function(event) {
    event.preventDefault()

    var email = event.target.email.value
    var password = event.target.password.value

    if (email === 'peter@pan.com' && password === '123123123') {
        document.querySelector('.login-page').classList.add('off')
        document.querySelector('.home-page').classList.remove('off')
    } else alert('wrong credentials')
}