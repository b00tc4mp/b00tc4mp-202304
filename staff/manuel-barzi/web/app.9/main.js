const context = {}

document.querySelector('.login-page').querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    const authenticated = authenticateUser(email, password)

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
    document.querySelector('.home-page').querySelector('.post-modal').classList.remove('off')
}

document.querySelector('.home-page').querySelector('.post-modal').querySelector('.cancel-button').onclick = function (event) {
    event.preventDefault()

    document.querySelector('.home-page').querySelector('.post-modal').classList.add('off')
}

document.querySelector('.home-page').querySelector('.post-modal').querySelector('.post-form').onsubmit = function (event) {
    event.preventDefault()

    const picture = event.target.picture.value
    const text = event.target.text.value

    const created = createPost(context.email, picture, text)

    if (!created)
        alert('cannot create post')
    else {
        document.querySelector('.home-page').querySelector('.post-modal').classList.add('off')

        renderPosts()
    }
}

function renderPosts() {
    document.querySelector('.home-page').querySelector('.home-posts').innerHTML = ''

    const posts = retrievePosts(context.email)

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i]

        const article = document.createElement('article')

        const image = document.createElement('img')
        image.src = post.picture
        image.classList.add('post-image')

        const paragraph = document.createElement('p')
        paragraph.innerText = post.text

        const time = document.createElement('time')
        time.innerText = post.date.toString()

        const like = document.createElement('button')
        like.innerText = (post.likes.includes(context.email) ? '❤️' : '🤍') + (post.likes.length ? ' (' + post.likes.length + ')' : '')
        like.onclick = function () {
            const result = toggleLikePost(context.email, post.id)

            if (!result)
                alert('could not like post')
            else
                renderPosts()
        }

        article.append(image, paragraph, time, like)

        if (post.user === context.email) {
            const modify = document.createElement('button')
            modify.innerText = 'Modify'
            modify.onclick = function () {
                document.querySelector('.home-page').querySelector('.post-modify-modal').querySelector('.post-form').querySelector('input[name=postId]').value = post.id
                document.querySelector('.home-page').querySelector('.post-modify-modal').classList.remove('off')
            }

            const remove = document.createElement('button')
            remove.innerText = 'remove'
            remove.onclick = function () {
                const removed = removePost(context.email, post.id)

                if (!removed)
                    alert('could not remove post')
                else
                    renderPosts()
            }

            
            article.append(modify, remove)
        }

        document.querySelector('.home-page').querySelector('.home-posts').append(article)
    }
}

document.querySelector('.home-page').querySelector('.post-modify-modal').querySelector('.post-form').onsubmit = function (event) {
    event.preventDefault()

    const postId = event.target.postId.value
    const picture = event.target.picture.value
    const text = event.target.text.value

    const modified = modifyPost(context.email, postId, picture, text)

    if (!modified)
        alert('could not modify post')
    else {
        document.querySelector('.home-page').querySelector('.post-modify-modal').classList.add('off')

        renderPosts()
    }
}