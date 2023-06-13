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

var posts = []

var post = {}

post.email = users[0].email
post.text = 'hello world'
post.picture = 'https://b00tc4mp.com/discord.png'
post.date = new Date

posts.push(post)

var post = {}

post.email = users[1].email
post.text = 'hallo welt'
post.picture = 'https://www.hallo-welt.io/wp-content/uploads/2021/05/HalloWelt-LOGO-1transparent-1.png'
post.date = new Date

posts.push(post)

// business (logic)

function authenticateUser(email, password) {
    var found

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email && user.password === password) {
            found = user

            break
        }
    }

    if (found)
        return true
    else
        return false
}

function registerUser(name, email, password) {
    var found

    for (var i = 0; i < users.length; i++) {
        var user = users[i]

        if (user.email === email) {
            found = user

            break
        }
    }

    if (found)
        return false
    else {
        var user = {}

        user.name = name
        user.email = email
        user.password = password

        users.push(user)

        return true
    }
}

// presentation

document.querySelector('.login-page').querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    var email = event.target.email.value
    var password = event.target.password.value

    var authenticated = authenticateUser(email, password)
 
    if (authenticated) {
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

    var registered = registerUser(name, email, password)

    if (!registered)
        alert('user already exists')
    else {
        alert('User registered')

        document.querySelector('.register-page').classList.add('off')
        document.querySelector('.login-page').classList.remove('off')
    }
}

document.querySelector('.home-page').querySelector('.create-post-button').onclick = function() {
    document.querySelector('.home-page').querySelector('.post-modal').classList.remove('off')
}

document.querySelector('.home-page').querySelector('.post-modal').querySelector('.cancel-button').onclick = function(event) {
    event.preventDefault()

    document.querySelector('.home-page').querySelector('.post-modal').classList.add('off')
}

document.querySelector('.home-page').querySelector('.post-modal').querySelector('.post-form').onsubmit = function(event) {
    event.preventDefault()

    var picture = event.target.picture.value
    var text = event.target.text.value

    console.log('TODO create a post', picture, text)
}