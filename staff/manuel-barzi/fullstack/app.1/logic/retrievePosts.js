function retrievePosts(userId, callback) {
    if (typeof userId !== 'number') throw new Error('userId is not a number')
    if (typeof callback !== 'function') throw new Error('callback is not a function')

    const xhr = new XMLHttpRequest

    // res

    xhr.onload = () => {
        if (xhr.status === 400) {
            const json = xhr.responseText

            const body = JSON.parse(json)

            callback(new Error(body.error))

            return
        }

        if (xhr.status === 200) {
            const json = xhr.responseText

            const body = JSON.parse(json)

            const posts = body

            callback(null, posts.reverse())

            return
        }
    }

    xhr.onerror = () => callback(new Error('connection failed'))

    // req

    xhr.open('GET', 'http://localhost:8080/posts')

    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)

    xhr.send()
}