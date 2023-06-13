const context = {}

document.querySelector('.login-page').querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    const authenticated = authenticateUser(email, password)

    if (authenticated) {
        document.querySelector('.login-page').querySelector('form').reset()

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

    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value

    const registered = registerUser(name, email, password)

    if (!registered)
        alert('user already exists')
    else {
        alert('User registered')

        document.querySelector('.register-page').classList.add('off')
        document.querySelector('.login-page').classList.remove('off')
    }
}

document.querySelector('.home-page').querySelector('.create-post-button').onclick = function () {
    document.querySelector('.home-page').querySelector('.create-post-modal').classList.remove('off')
}

document.querySelector('.home-page').querySelector('.create-post-modal').querySelector('.cancel-button').onclick = function (event) {
    event.preventDefault()

    document.querySelector('.home-page').querySelector('.create-post-modal').classList.add('off')
}

document.querySelector('.home-page').querySelector('.create-post-modal').querySelector('.post-form').onsubmit = function (event) {
    event.preventDefault()

    const picture = event.target.picture.value
    const text = event.target.text.value

    const created = createPost(context.email, picture, text)

    if (!created)
        alert('cannot create post')
    else {
        document.querySelector('.home-page').querySelector('.create-post-modal').querySelector('.post-form').reset()
        document.querySelector('.home-page').querySelector('.create-post-modal').classList.add('off')

        renderPosts()
    }
}

function renderPosts() {
    document.querySelector('.home-page').querySelector('.posts').innerHTML = ''

    const user = retrieveUser(context.email)

    if (!user)
        alert('user does not exist')

    const posts = retrievePosts(context.email)

    if (!posts)
        alert('posts do not exist')

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i]

        const article = document.createElement('article')
        article.classList.add('post')

        const postUser = retrieveUser(post.user)

        if (!postUser)
            alert('user does not exist')

        const heading = document.createElement('h2')
        heading.innerText = postUser.name
        
        const image = document.createElement('img')
        image.src = post.picture
        image.classList.add('post-image')

        const paragraph = document.createElement('p')
        paragraph.innerText = post.text

        const time = document.createElement('time')
        time.innerText = post.date.toString()

        const likeButton = document.createElement('button')
        likeButton.innerText = (post.likes.includes(context.email) ? '❤️' : '🤍') + (post.likes.length ? ' (' + post.likes.length + ')' : '')
        likeButton.onclick = function () {
            const result = toggleLikePost(context.email, post.id)

            if (!result)
                alert('could not like post')
            else
                renderPosts()
        }

        article.append(heading, image, paragraph, time, likeButton)

        if (post.user === context.email) {
            const modifyButton = document.createElement('button')
            modifyButton.innerText = '📝'
            modifyButton.onclick = function () {
                document.querySelector('.home-page').querySelector('.modify-post-modal').querySelector('.post-form').querySelector('input[name=postId]').value = post.id
                document.querySelector('.home-page').querySelector('.modify-post-modal').querySelector('.post-form').querySelector('input[name=picture]').value = post.picture
                document.querySelector('.home-page').querySelector('.modify-post-modal').querySelector('.post-form').querySelector('textarea[name=text]').value = post.text
                document.querySelector('.home-page').querySelector('.modify-post-modal').classList.remove('off')
            }

            const removeButton = document.createElement('button')
            removeButton.innerText = '🗑️'
            removeButton.onclick = function () {
                const removed = removePost(context.email, post.id)

                if (!removed)
                    alert('could not remove post')
                else
                    renderPosts()
            }

            article.append(modifyButton, removeButton)
        }

        const favButton = document.createElement('button')
        favButton.innerText = user.favs.includes(post.id) ? '⭐️' : '✩'

        favButton.onclick = function () {
            const toggled = toggleFavPost(context.email, post.id)

            if (!toggled)
                alert('could not toggle fav post')
            else
                renderPosts()
        }

        article.append(favButton)

        if (post.user === context.email) {
            const lockButton = document.createElement('button')
            lockButton.innerText = '🔓'

            article.append(lockButton)
        }

        document.querySelector('.home-page').querySelector('.posts').append(article)
    }
}

document.querySelector('.home-page').querySelector('.modify-post-modal').querySelector('.post-form').onsubmit = function (event) {
    event.preventDefault()

    const postId = event.target.postId.value
    const picture = event.target.picture.value
    const text = event.target.text.value

    const modified = modifyPost(context.email, postId, picture, text)

    if (!modified)
        alert('could not modify post')
    else {
        document.querySelector('.home-page').querySelector('.modify-post-modal').classList.add('off')

        renderPosts()
    }
}

document.querySelector('.home-page').querySelector('.modify-post-modal').querySelector('.cancel-button').onclick = function (event) {
    event.preventDefault()

    document.querySelector('.home-page').querySelector('.modify-post-modal').classList.add('off')
}

document.querySelector('.home-page').querySelector('.home-header').querySelector('.logout-button').onclick = function () {
    delete context.email

    document.querySelector('.home-page').classList.add('off')
    document.querySelector('.login-page').classList.remove('off')
}