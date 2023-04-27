var context = {}

document.querySelector('.login-page').querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    var email = event.target.email.value
    var password = event.target.password.value

    var authenticated = authenticateUser(email, password)
 
    if (authenticated) {
        context.email = email

        document.querySelector('.login-page').classList.add('off')
        renderPosts()
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

    var created = createPost(context.email, picture, text)

    if (created) {
        document.querySelector('.home-page').querySelector('.post-modal').classList.add('off')

        renderPosts()
    } else
        alert('cannot create post')
}

function renderPosts() {
    document.querySelector('.home-page').querySelector('.home-posts').innerHTML = ''

    var posts = retrievePosts(context.email)

    for (var i = 0; i < posts.length; i++) {
        var post = posts[i]

        var article = document.createElement('article')
        
        var image = document.createElement('img')
        image.src = post.picture
        image.classList.add('post-image')

        var paragraph = document.createElement('p')
        paragraph.innerText = post.text

        var time = document.createElement('time')
        time.innerText = post.date.toString()

        article.append(image, paragraph, time)

        document.querySelector('.home-page').querySelector('.home-posts').append(article)
    }
}