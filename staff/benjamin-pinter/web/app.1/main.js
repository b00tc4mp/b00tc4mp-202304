const context = {}

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

document.querySelector('.login').querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    const email = event.target.email.value
    const password = event.target.password.value

    const authenticated = authenticateUser(email, password)

    if (authenticated) {
        context.email = email
        document.querySelector('.login').querySelector('form').reset()
        document.querySelector('.login').classList.add('off')
        renderPosts()
        const user = retrieveUser(context.email)
        document.querySelector('.welcome').querySelector('.welcome-header').querySelector('.headline').innerText = 'Welcome ' + user.name + ' 🏚️!'
        document.querySelector('.welcome').classList.remove('off')
    } else
        alert('😂😂😂')
}

document.querySelector('.register').querySelector('form').onsubmit = function (event) {
    event.preventDefault()

    const name = event.target.name.value
    const email = event.target.email.value
    const password = event.target.password.value

    const registered = registerUser(name, email, password)

    if (registered) {
        alert('shqipe')

        document.querySelector('.register').classList.add('off')
        document.querySelector('.login').classList.remove('off')
    }
    else {
        alert('Person is already albanian!')
    }
}

document.querySelector('.welcome').querySelector('.create-button').onclick = function (event) {
    document.querySelector('.welcome').querySelector('.modal-post').classList.remove('off')
}

document.querySelector('.welcome').querySelector('.modal-post').querySelector('.cancel').onclick = function (event) {
    event.preventDefault()

    document.querySelector('.welcome').querySelector('.modal-post').classList.add('off')
}

document.querySelector('.welcome').querySelector('.modal-post').querySelector('.post-form').onsubmit = function (event) {
    event.preventDefault()

    const picture = event.target.picture.value
    const text = event.target.text.value

    const created = createPost(context.email, picture, text)

    if (created) {
        document.querySelector('.welcome').querySelector('.modal-post').querySelector('.post-form').reset()
        document.querySelector('.welcome').querySelector('.modal-post').classList.add('off')

        renderPosts()
    }
    else
        alert('🙅‍♂️🙅‍♂️🙅‍♂️')
}

function renderPosts() {
    document.querySelector('.welcome').querySelector('.home-posts').innerHTML = ''
    const user = retrieveUser(context.email)

    if (!user)
        alert('User does not exist')

    const posts = retrievePost(context.email)

    if (!posts)
        alert('Post does not exist')

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
            heading.classList.add('post-heading')

            const image = document.createElement('img')
            image.src = post.picture
            image.classList.add('post-image')

            const paragraph = document.createElement('p')
            paragraph.innerText = post.text

            const time = document.createElement('time')
            time.innerText = post.date.toString()

            const buttonlike = document.createElement('button')

            if (post.likes.includes(context.email))
                buttonlike.innerText = '🩵' + (post.likes.length ? '(' + post.likes.length + ')' : '')
            else
                buttonlike.innerText = '🤍' + (post.likes.length ? '(' + post.likes.length + ')' : '')

            buttonlike.className = 'buttonlike'
            buttonlike.onclick = function (event) {
                event.preventDefault()

                const result = toggleLikePost(context.email, post.id)

                if (result)
                    renderPosts()
                else
                    alert('failed to like the post!')
            }

            const favButton = document.createElement('button')

            if (user.favorites.includes(post.id))
                favButton.innerText = '⭐️'
            else
                favButton.innerText = '🗂️'

            favButton.className = 'favButton'
            favButton.onclick = function (event) {
                event.preventDefault()

                const result = toggleFavPost(context.email, post.id)

                if (result)
                    renderPosts()
                else
                    alert('failed to add the post to Favorites!')
            }


            article.append(heading, image, paragraph, time, buttonlike, favButton)

            if (post.user === context.email) {
                const modifyButton = document.createElement('button')
                modifyButton.innerText = '🎨'
                modifyButton.onclick = function () {
                    document.querySelector('.welcome').querySelector('.modal-modify').querySelector('.post-form').querySelector('input[name=postId]').value = post.id
                    document.querySelector('.welcome').querySelector('.modal-modify').classList.remove('off')
                }

                const lockButton = document.createElement('button')
                if (post.visibility === 'public')
                    lockButton.innerText = '🔓'
                else
                    lockButton.innerText = '🔐'

                lockButton.className = 'lockButton'
                lockButton.onclick = function (event) {
                    event.preventDefault()

                    const result = togglePostVisibility(context.email, post.id)

                    if (result)
                        renderPosts()
                    else
                        alert('failed to hide the Post!')
                }

                const removeButton = document.createElement('button')
                removeButton.innerText = '🚮'
                removeButton.onclick = function () {
                    const removed = removePost(context.email, post.id)

                    if (!removed)
                        alert('could not remove post')
                    else
                        renderPosts()
                }

                const sellButton = document.createElement('button')
                sellButton.innerText = post.price === 0 ? '💶' : 'Sell:' + post.price + '€'
                sellButton.onclick = () => {
                    document.querySelector('.welcome').querySelector('.modal-sell').querySelector('input[name=postId]').value = post.id
                    document.querySelector('.welcome').querySelector('.modal-sell').querySelector('input[name=price]').value = post.price
                    document.querySelector('.welcome').querySelector('.modal-sell').classList.remove('off')
                }

                article.append(modifyButton, removeButton, lockButton, sellButton)
            }
            else if (post.price) {
                const buyButton = document.createElement('button')
                buyButton.innerText = 'Buy:' + post.price + '€'
                buyButton.onclick = () => {
                    document.querySelector('.welcome').querySelector('.modal-buy').querySelector('input[name=postId]').value = post.id
                    document.querySelector('.welcome').querySelector('.modal-buy').querySelector('span').innerText = post.price
                    document.querySelector('.welcome').querySelector('.modal-buy').classList.remove('off')
                }
                article.append(buyButton)
            }
            document.querySelector('.welcome').querySelector('.home-posts').append(article)
        }
    }
}

document.querySelector('.welcome').querySelector('.modal-modify').querySelector('.cancel').onclick = function (event) {
    event.preventDefault()

    document.querySelector('.welcome').querySelector('.modal-modify').classList.add('off')
}

document.querySelector('.welcome').querySelector('.modal-modify').querySelector('.post-form').onsubmit = function (event) {
    event.preventDefault()

    const postId = event.target.postId.value
    const picture = event.target.picture.value
    const text = event.target.text.value

    const modified = modifyPost(context.email, postId, picture, text)

    if (!modified)
        alert('modification failed!')
    else {
        document.querySelector('.welcome').querySelector('.modal-modify').querySelector('.post-form').reset()
        document.querySelector('.welcome').querySelector('.modal-modify').classList.add('off')

        renderPosts()
        renderFavPosts()
        renderMinePosts()
    }

}

document.querySelector('.welcome').querySelector('.welcome-header').querySelector('.logout-button').onclick = function () {
    delete context.email

    document.querySelector('.welcome').classList.add('off')

    document.querySelector('.welcome').querySelector('.home-posts').classList.remove('off')
    document.querySelector('.welcome').querySelector('.fav-posts').classList.add('off')
    document.querySelector('.welcome').querySelector('.mine-posts').classList.add('off')
    document.querySelector('.login').classList.remove('off')
}

function renderFavPosts() {
    document.querySelector('.welcome').querySelector('.fav-posts').innerHTML = ''
    const user = retrieveUser(context.email)

    if (!user)
        alert('User does not exist')

    const posts = retrievePost(context.email)

    if (!posts)
        alert('Post does not exist')

    for (let i = 0; i < posts.length; i++) {
        const post = posts[i]

        if (user.favorites.includes(post.id) && (post.user === context.email || (post.user !== context.email && post.visibility === 'public'))) {
            const article = document.createElement('article')
            article.classList.add('post')

            const postUser = retrieveUser(post.user)
            if (!postUser)
                alert('user does not exist')

            const heading = document.createElement('h2')
            heading.innerText = postUser.name
            heading.classList.add('post-heading')

            const image = document.createElement('img')
            image.src = post.picture
            image.classList.add('post-image')

            const paragraph = document.createElement('p')
            paragraph.innerText = post.text

            const time = document.createElement('time')
            time.innerText = post.date.toString()

            const buttonlike = document.createElement('button')

            if (post.likes.includes(context.email))
                buttonlike.innerText = '🩵' + (post.likes.length ? '(' + post.likes.length + ')' : '')
            else
                buttonlike.innerText = '🤍' + (post.likes.length ? '(' + post.likes.length + ')' : '')

            buttonlike.className = 'buttonlike'
            buttonlike.onclick = function (event) {
                event.preventDefault()

                const result = toggleLikePost(context.email, post.id)

                if (result)
                    renderFavPosts()
                else
                    alert('failed to like the post!')
            }

            const favButton = document.createElement('button')

            if (user.favorites.includes(post.id))
                favButton.innerText = '⭐️'
            else
                favButton.innerText = '🗂️'

            favButton.className = 'favButton'
            favButton.onclick = function (event) {
                event.preventDefault()

                const result = toggleFavPost(context.email, post.id)

                if (result)
                    renderFavPosts()
                else
                    alert('failed to add the post to Favorites!')
            }


            article.append(heading, image, paragraph, time, buttonlike, favButton)

            if (post.user === context.email) {
                const modifyButton = document.createElement('button')
                modifyButton.innerText = '🎨'
                modifyButton.onclick = function () {
                    document.querySelector('.welcome').querySelector('.modal-modify').querySelector('.post-form').querySelector('input[name=postId]').value = post.id
                    document.querySelector('.welcome').querySelector('.modal-modify').classList.remove('off')
                }

                const lockButton = document.createElement('button')
                if (post.visibility === 'public')
                    lockButton.innerText = '🔓'
                else
                    lockButton.innerText = '🔐'

                lockButton.className = 'lockButton'
                lockButton.onclick = function (event) {
                    event.preventDefault()

                    const result = togglePostVisibility(context.email, post.id)

                    if (result)
                        renderFavPosts()
                    else
                        alert('failed to hide the Post!')
                }

                const removeButton = document.createElement('button')
                removeButton.innerText = '🚮'
                removeButton.onclick = function () {
                    const removed = removePost(context.email, post.id)

                    if (!removed)
                        alert('could not remove post')
                    else
                        renderFavPosts()
                }

                const sellButton = document.createElement('button')
                sellButton.innerText = post.price === 0 ? '💶' : 'Sell:' + post.price + '€'
                sellButton.onclick = () => {
                    document.querySelector('.welcome').querySelector('.modal-sell').querySelector('input[name=postId]').value = post.id
                    document.querySelector('.welcome').querySelector('.modal-sell').querySelector('input[name=price]').value = post.price
                    document.querySelector('.welcome').querySelector('.modal-sell').classList.remove('off')
                }

                article.append(modifyButton, removeButton, lockButton, sellButton)
            }
            else if (post.price) {
                const buyButton = document.createElement('button')
                buyButton.innerText = 'Buy:' + post.price + '€'
                buyButton.onclick = () => {
                    document.querySelector('.welcome').querySelector('.modal-buy').querySelector('input[name=postId]').value = post.id
                    document.querySelector('.welcome').querySelector('.modal-buy').querySelector('span').innerText = post.price
                    document.querySelector('.welcome').querySelector('.modal-buy').classList.remove('off')
                }
                article.append(buyButton)
            }
            document.querySelector('.welcome').querySelector('.fav-posts').append(article)
        }
    }
}

function renderMinePosts() {
    document.querySelector('.welcome').querySelector('.mine-posts').innerHTML = ''
    const user = retrieveUser(context.email)

    if (!user)
        alert('User does not exist')

    const posts = retrievePost(context.email)

    if (!posts)
        alert('Post does not exist')

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
            heading.classList.add('post-heading')

            const image = document.createElement('img')
            image.src = post.picture
            image.classList.add('post-image')

            const paragraph = document.createElement('p')
            paragraph.innerText = post.text

            const time = document.createElement('time')
            time.innerText = post.date.toString()

            const buttonlike = document.createElement('button')

            if (post.likes.includes(context.email))
                buttonlike.innerText = '🩵' + (post.likes.length ? '(' + post.likes.length + ')' : '')
            else
                buttonlike.innerText = '🤍' + (post.likes.length ? '(' + post.likes.length + ')' : '')

            buttonlike.className = 'buttonlike'
            buttonlike.onclick = function (event) {
                event.preventDefault()

                const result = toggleLikePost(context.email, post.id)

                if (result)
                    renderMinePosts()
                else
                    alert('failed to like the post!')
            }

            const favButton = document.createElement('button')

            if (user.favorites.includes(post.id))
                favButton.innerText = '⭐️'
            else
                favButton.innerText = '🗂️'

            favButton.className = 'favButton'
            favButton.onclick = function (event) {
                event.preventDefault()

                const result = toggleFavPost(context.email, post.id)

                if (result)
                    renderMinePosts()
                else
                    alert('failed to add the post to Favorites!')
            }

            const modifyButton = document.createElement('button')
            modifyButton.innerText = '🎨'
            modifyButton.onclick = function () {
                document.querySelector('.welcome').querySelector('.modal-modify').querySelector('.post-form').querySelector('input[name=postId]').value = post.id
                document.querySelector('.welcome').querySelector('.modal-modify').classList.remove('off')
            }

            const lockButton = document.createElement('button')
            if (post.visibility === 'public')
                lockButton.innerText = '🔓'
            else
                lockButton.innerText = '🔐'

            lockButton.className = 'lockButton'
            lockButton.onclick = function (event) {
                event.preventDefault()

                const result = togglePostVisibility(context.email, post.id)

                if (result)
                    renderMinePosts()
                else
                    alert('failed to hide the Post!')
            }

            const removeButton = document.createElement('button')
            removeButton.innerText = '🚮'
            removeButton.onclick = function () {
                const removed = removePost(context.email, post.id)

                if (!removed)
                    alert('could not remove post')
                else
                    renderMinePosts()
            }

            const sellButton = document.createElement('button')
            sellButton.innerText = post.price === 0 ? '💶' : 'Sell:' + post.price + '€'
            sellButton.onclick = () => {
                    document.querySelector('.welcome').querySelector('.modal-sell').querySelector('input[name=postId]').value = post.id
                    document.querySelector('.welcome').querySelector('.modal-sell').querySelector('input[name=price]').value = post.price
                    document.querySelector('.welcome').querySelector('.modal-sell').classList.remove('off')
            }

            article.append(heading, image, paragraph, time, buttonlike, favButton, modifyButton, removeButton, lockButton, sellButton)
            
            document.querySelector('.welcome').querySelector('.mine-posts').append(article)
        }
    }
}

document.querySelector('.welcome').querySelector('.welcome-header').querySelector('.star').onclick = event => {
    event.preventDefault()
    document.querySelector('.welcome').querySelector('.home-posts').classList.add('off')
    document.querySelector('.welcome').querySelector('.mine-posts').classList.add('off')
    document.querySelector('.welcome').querySelector('.fav-posts').classList.remove('off')

    renderFavPosts()
}

//TODO was unterschied
document.querySelector('.welcome').querySelector('.welcome-header').querySelector('.headline').onclick = () => {
    document.querySelector('.welcome').querySelector('.fav-posts').classList.add('off')
    document.querySelector('.welcome').querySelector('.mine-posts').classList.add('off')
    document.querySelector('.welcome').querySelector('.home-posts').classList.remove('off')

    renderPosts()
}

document.querySelector('.welcome').querySelector('.welcome-header').querySelector('.mine-link').onclick = event => {
    event.preventDefault()
    document.querySelector('.welcome').querySelector('.home-posts').classList.add('off')
    document.querySelector('.welcome').querySelector('.fav-posts').classList.add('off')
    document.querySelector('.welcome').querySelector('.mine-posts').classList.remove('off')

    renderMinePosts()
}

document.querySelector('.welcome').querySelector('.modal-sell').querySelector('.cancel').onclick = function (event) {
    event.preventDefault()
    document.querySelector('.welcome').querySelector('.modal-sell').classList.add('off')
}

document.querySelector('.welcome').querySelector('.modal-sell').querySelector('.post-form').onsubmit = function (event) {
    event.preventDefault()
    const postId = event.target.postId.value
    const price = Number(event.target.price.value)
    
    const result = sellPost(context.email, postId, price)

    if(!result)
        alert('Failed to sell post!')
    else {
        document.querySelector('.welcome').querySelector('.modal-sell').classList.add('off')

        renderPosts()
        renderFavPosts()
        renderMinePosts()
    }
}

document.querySelector('.welcome').querySelector('.modal-buy').querySelector('.cancel').onclick = function (event) {
    event.preventDefault()
    document.querySelector('.welcome').querySelector('.modal-buy').classList.add('off')
}

document.querySelector('.welcome').querySelector('.modal-buy').querySelector('.post-form').onsubmit = function (event) {
    event.preventDefault()
    const postId = event.target.postId.value

    const result = buyPost(context.email, postId)

    if(!result)
        alert('Failed to buy post!')
    else {
        document.querySelector('.welcome').querySelector('.modal-buy').classList.add('off')

        renderPosts()
        renderFavPosts()
        renderMinePosts()
    }
    
}