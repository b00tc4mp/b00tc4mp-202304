function createPost(userId, image, text, callback) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (typeof image !== 'string') throw new Error('image is not a string')
    if (typeof text !== 'string') throw new Error('text is not a string')
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

        if (xhr.status === 201) {
            callback(null)

            return
        }
    }

    xhr.onerror = () => callback(new Error('connection failed'))

    // req

    xhr.open('POST', 'http://localhost:8080/posts')

    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)

    xhr.setRequestHeader('Content-Type', 'application/json')

    const body = { image, text }

    const json = JSON.stringify(body)

    xhr.send(json)
}
  