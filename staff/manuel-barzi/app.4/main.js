// database

var users = []

// populate the database

var name = 'Peter Pan'
var email = 'peter@pan.com'
var password = '123123123'

var user = {}

user.name = name
user.email = email
user.password = password

users.push(user)

var name = 'Wendy Darling'
var email = 'wendy@darling.com'
var password = '123123123'

var user = {}

user.name = name
user.email = email
user.password = password

users.push(user)

// presentation

document.querySelector('.login-page').querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    var email = event.target.email.value
    var password = event.target.password.value

    var found

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email && user.password === password) {
            found = user

            break
        }
    }

    if (found) {
        document.querySelector('.login-page').classList.add('off')
        document.querySelector('.home-page').classList.remove('off')
    } else alert('Wrong credentials')
}

document.querySelector('.login-page').querySelector('a').onclick = function (event) {
    event.preventDefault()

    document.querySelector('.login-page').classList.add('off')
    document.querySelector('.register-page').classList.remove('off')
}


document.querySelector('.register-page').querySelector('a').onclick = function (event) {
    event.preventDefault()

    document.querySelector('.register-page').classList.add('off')
    document.querySelector('.login-page').classList.remove('off')
}

document.querySelector('.register-page').querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    var name = event.target.name.value
    var email = event.target.email.value
    var password = event.target.password.value

    var found

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            found = user

            break
        }
    }

    if (found)
        alert('user already exists')
    else {
        var user = {}

        user.name = name
        user.email = email
        user.password = password

        users.push(user)

        alert('User registered')

        document.querySelector('.register-page').classList.add('off')
        document.querySelector('.login-page').classList.remove('off')
    }
}