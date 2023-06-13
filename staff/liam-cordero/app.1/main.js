const context = {}

document.querySelector('.login').querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    const authenticated = authenticateUser(email, password)

    if (!authenticated)
        alert('Wrong details')
    else {
        document.querySelector('.login').querySelector('form').reset()

        context.email = email

        document.querySelector('.login').classList.add('off')

        renderPosts()
        renderFavPosts()

        const user = retrieveUser(context.email)

        document.querySelector('.home').classList.remove('off')
    }
}

document.querySelector('.login').querySelector('a').onclick = function (event) {
    event.preventDefault()

    document.querySelector('.login').classList.add('off')
    document.querySelector('.register').classList.remove('off')
}


document.querySelector('.register').querySelector('a').onclick = function (event) {
    event.preventDefault()

    document.querySelector('.register').classList.add('off')
    document.querySelector('.login').classList.remove('off')
}

document.querySelector('.register').querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value

    const registered = registerUser(name, email, password)

    if (!registered)
        alert('user already exists')
    else {
        alert('User registered')

        document.querySelector('.register').classList.add('off')
        document.querySelector('.login').classList.remove('off')
    }
}

document.querySelector('.home').querySelector('.create-post-button').onclick = function () {
    document.querySelector('.home').querySelector('.create-post-modal').classList.remove('off')
}

document.querySelector('.home').querySelector('.create-post-modal').querySelector('.cancel-button').onclick = function (event) {
    event.preventDefault()

    document.querySelector('.home').querySelector('.create-post-modal').classList.add('off')
}

document.querySelector('.home').querySelector('.create-post-modal').querySelector('.post-form').onsubmit = function (event) {
    event.preventDefault()

    const picture = event.target.picture.value
    const text = event.target.text.value

    const created = createPost(context.email, picture, text)

    if (!created)
        alert('cannot create post')
    else {
        document.querySelector('.home').querySelector('.create-post-modal').querySelector('.post-form').reset()
        document.querySelector('.home').querySelector('.create-post-modal').classList.add('off')

        renderPosts()
    }
}

function renderPosts() {
    document.querySelector('.home').querySelector('.posts').innerHTML = ''

    const user = retrieveUser(context.email)

    if (!user)
        alert('user does not exist')

    const posts = retrievePosts(context.email)

    if (!posts)
        alert('posts do not exist')

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i]

        if (post.user === context.email || (post.user !== context.email && post.visibility === 'public')) {
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

            const favButton = document.createElement('button')
            favButton.innerText = user.favs.includes(post.id) ? '⭐️' : '✩'

            favButton.onclick = function () {
                const toggled = toggleFavPost(context.email, post.id)

                if (!toggled)
                    alert('could not toggle fav post')
                else
                    renderPosts()
            }

            article.append(heading, image, paragraph, time, likeButton, favButton)

            if (post.user === context.email) {
                const modifyButton = document.createElement('button')
                modifyButton.innerText = '📝'
                modifyButton.onclick = function () {
                    document.querySelector('.home').querySelector('.modify-post-modal').querySelector('.post-form').querySelector('input[name=postId]').value = post.id
                    document.querySelector('.home').querySelector('.modify-post-modal').querySelector('.post-form').querySelector('input[name=picture]').value = post.picture
                    document.querySelector('.home').querySelector('.modify-post-modal').querySelector('.post-form').querySelector('textarea[name=text]').value = post.text
                    document.querySelector('.home').querySelector('.modify-post-modal').classList.remove('off')
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

                const lockButton = document.createElement('button')
                lockButton.innerText = post.visibility === 'public' ? '🔓' : '🔐'

                lockButton.onclick = function () {
                    const toggled = togglePostVisibility(context.email, post.id)

                    if (!toggled)
                        alert('could not toggle post status')
                    else
                        renderPosts()
                }

                const sellButton = document.createElement('button')
                sellButton.innerText = 'Sell ' + post.price + ' $'

                sellButton.onclick = () => {
                    document.querySelector('.home').querySelector('.sell-post-modal').querySelector('input[name=postId]').value = post.id
                    document.querySelector('.home').querySelector('.sell-post-modal').querySelector('input[name=price]').value = post.price

                    document.querySelector('.home').querySelector('.sell-post-modal').classList.remove('off')
                }

                article.append(modifyButton, removeButton, lockButton, sellButton)
            } else if (post.price) {
                const buyButton = document.createElement('button')

                buyButton.innerText = 'Buy ' + post.price + ' $'

                buyButton.onclick = () => {
                    document.querySelector('.home').querySelector('.buy-post-modal').querySelector('input[name=postId]').value = post.id
                    document.querySelector('.home').querySelector('.buy-post-modal').querySelector('span').innerText = post.price

                    document.querySelector('.home').querySelector('.buy-post-modal').classList.remove('off')
                }

                article.append(buyButton)
            }

            document.querySelector('.home').querySelector('.posts').append(article)
        }
    }
}

function renderFavPosts() {
    document.querySelector('.home').querySelector('.fav-posts').innerHTML = ''

    const user = retrieveUser(context.email)

    if (!user)
        alert('user does not exist')

    const posts = retrievePosts(context.email)

    if (!posts)
        alert('posts do not exist')

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i]

        if (user.favs.includes(post.id) && (post.user === context.email || (post.user !== context.email && post.visibility === 'public'))) {
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
                    renderFavPosts()
            }

            const favButton = document.createElement('button')
            favButton.innerText = user.favs.includes(post.id) ? '⭐️' : '✩'

            favButton.onclick = function () {
                const toggled = toggleFavPost(context.email, post.id)

                if (!toggled)
                    alert('could not toggle fav post')
                else
                    renderFavPosts()
            }

            article.append(heading, image, paragraph, time, likeButton, favButton)

            if (post.user === context.email) {
                const modifyButton = document.createElement('button')
                modifyButton.innerText = '📝'
                modifyButton.onclick = function () {
                    document.querySelector('.home').querySelector('.modify-post-modal').querySelector('.post-form').querySelector('input[name=postId]').value = post.id
                    document.querySelector('.home').querySelector('.modify-post-modal').querySelector('.post-form').querySelector('input[name=picture]').value = post.picture
                    document.querySelector('.home').querySelector('.modify-post-modal').querySelector('.post-form').querySelector('textarea[name=text]').value = post.text
                    document.querySelector('.home').querySelector('.modify-post-modal').classList.remove('off')
                }

                const removeButton = document.createElement('button')
                removeButton.innerText = '🗑️'
                removeButton.onclick = function () {
                    const removed = removePost(context.email, post.id)

                    if (!removed)
                        alert('could not remove post')
                    else
                        renderFavPosts()
                }

                const lockButton = document.createElement('button')
                lockButton.innerText = post.visibility === 'public' ? '🔓' : '🔐'

                lockButton.onclick = function () {
                    const toggled = togglePostVisibility(context.email, post.id)

                    if (!toggled)
                        alert('could not toggle post status')
                    else
                        renderFavPosts()
                }

                const sellButton = document.createElement('button')
                sellButton.innerText = 'Sell ' + post.price + ' $'

                sellButton.onclick = () => {
                    document.querySelector('.home').querySelector('.sell-post-modal').querySelector('input[name=postId]').value = post.id
                    document.querySelector('.home').querySelector('.sell-post-modal').querySelector('input[name=price]').value = post.price

                    document.querySelector('.home').querySelector('.sell-post-modal').classList.remove('off')
                }

                article.append(modifyButton, removeButton, lockButton, sellButton)
            } else if (post.price) {
                const buyButton = document.createElement('button')

                buyButton.innerText = 'Buy ' + post.price + ' $'

                buyButton.onclick = () => {
                    document.querySelector('.home').querySelector('.buy-post-modal').querySelector('input[name=postId]').value = post.id
                    document.querySelector('.home').querySelector('.buy-post-modal').querySelector('span').innerText = post.price

                    document.querySelector('.home').querySelector('.buy-post-modal').classList.remove('off')
                }

                article.append(buyButton)
            }

            document.querySelector('.home').querySelector('.fav-posts').append(article)
        }
    }
}

function renderMinePosts() {
    document.querySelector('.home').querySelector('.mine-posts').innerHTML = ''

    const user = retrieveUser(context.email)

    if (!user)
        alert('user does not exist')

    const posts = retrievePosts(context.email)

    if (!posts)
        alert('posts do not exist')

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i]

        if (post.user === context.email) {
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
                    renderMinePosts()
            }

            const favButton = document.createElement('button')
            favButton.innerText = user.favs.includes(post.id) ? '⭐️' : '✩'

            favButton.onclick = function () {
                const toggled = toggleFavPost(context.email, post.id)

                if (!toggled)
                    alert('could not toggle fav post')
                else
                    renderMinePosts()
            }

            article.append(heading, image, paragraph, time, likeButton, favButton)

            if (post.user === context.email) {
                const modifyButton = document.createElement('button')
                modifyButton.innerText = '📝'
                modifyButton.onclick = function () {
                    document.querySelector('.home').querySelector('.modify-post-modal').querySelector('.post-form').querySelector('input[name=postId]').value = post.id
                    document.querySelector('.home').querySelector('.modify-post-modal').querySelector('.post-form').querySelector('input[name=picture]').value = post.picture
                    document.querySelector('.home').querySelector('.modify-post-modal').querySelector('.post-form').querySelector('textarea[name=text]').value = post.text
                    document.querySelector('.home').querySelector('.modify-post-modal').classList.remove('off')
                }

                const removeButton = document.createElement('button')
                removeButton.innerText = '🗑️'
                removeButton.onclick = function () {
                    const removed = removePost(context.email, post.id)

                    if (!removed)
                        alert('could not remove post')
                    else
                        renderMinePosts()
                }

                const lockButton = document.createElement('button')
                lockButton.innerText = post.visibility === 'public' ? '🔓' : '🔐'

                lockButton.onclick = function () {
                    const toggled = togglePostVisibility(context.email, post.id)

                    if (!toggled)
                        alert('could not toggle post status')
                    else
                        renderMinePosts()
                }

                article.append(modifyButton, removeButton, lockButton)
            }

            document.querySelector('.home').querySelector('.mine-posts').append(article)
        }
    }
}

document.querySelector('.home').querySelector('.modify-post-modal').querySelector('.post-form').onsubmit = function (event) {
    event.preventDefault()

    const postId = event.target.postId.value
    const picture = event.target.picture.value
    const text = event.target.text.value

    const modified = modifyPost(context.email, postId, picture, text)

    if (!modified)
        alert('could not modify post')
    else {
        document.querySelector('.home').querySelector('.modify-post-modal').classList.add('off')

        renderPosts()
        renderFavPosts()
        renderMinePosts()
    }
}

document.querySelector('.home').querySelector('.modify-post-modal').querySelector('.cancel-button').onclick = function (event) {
    event.preventDefault()

    document.querySelector('.home').querySelector('.modify-post-modal').classList.add('off')
}

document.querySelector('.home').querySelector('.home-header').querySelector('.logout-button').onclick = function () {
    delete context.email

    document.querySelector('.home').classList.add('off')

    document.querySelector('.home').querySelector('.posts').classList.remove('off')
    document.querySelector('.home').querySelector('.fav-posts').classList.add('off')

    document.querySelector('.login').classList.remove('off')
}

document.querySelector('.home').querySelector('.home-header').querySelector('.favs-link').onclick = event => {
    event.preventDefault()

    document.querySelector('.home').querySelector('.posts').classList.add('off')
    document.querySelector('.home').querySelector('.mine-posts').classList.add('off')
    document.querySelector('.home').querySelector('.fav-posts').classList.remove('off')

    renderFavPosts()
}

document.querySelector('.home').querySelector('.home-header').querySelector('.mine-link').onclick = event => {
    event.preventDefault()

    document.querySelector('.home').querySelector('.posts').classList.add('off')
    document.querySelector('.home').querySelector('.fav-posts').classList.add('off')
    document.querySelector('.home').querySelector('.mine-posts').classList.remove('off')

    renderMinePosts()
}

document.querySelector('.home').querySelector('.home-header').querySelector('.title').onclick = () => {
    document.querySelector('.home').querySelector('.fav-posts').classList.add('off')
    document.querySelector('.home').querySelector('.mine-posts').classList.add('off')
    document.querySelector('.home').querySelector('.posts').classList.remove('off')

    renderPosts()
}

document.querySelector('.home').querySelector('.sell-post-modal').querySelector('.cancel-button').onclick = function (event) {
    event.preventDefault()

    document.querySelector('.home').querySelector('.sell-post-modal').classList.add('off')
}

document.querySelector('.home').querySelector('.sell-post-modal').querySelector('.post-form').onsubmit = function (event) {
    event.preventDefault()

    const postId = event.target.postId.value
    const price = Number(event.target.price.value)

    const result = sellPost(context.email, postId, price)

    if (!result)
        alert('could not sell post')
    else {
        document.querySelector('.home').querySelector('.sell-post-modal').classList.add('off')

        renderPosts()
        renderFavPosts()
        renderMinePosts()
    }
}

document.querySelector('.home').querySelector('.buy-post-modal').querySelector('.cancel-button').onclick = function (event) {
    event.preventDefault()

    document.querySelector('.home').querySelector('.buy-post-modal').classList.add('off')
}

document.querySelector('.home').querySelector('.buy-post-modal').querySelector('.post-form').onsubmit = function (event) {
    event.preventDefault()

    const postId = event.target.postId.value

    const result = buyPost(context.email, postId)

    if (!result)
        alert('could not buy post')
    else {
        document.querySelector('.home').querySelector('.buy-post-modal').classList.add('off')

        renderPosts()
        renderFavPosts()
        renderMinePosts()
    }
}
