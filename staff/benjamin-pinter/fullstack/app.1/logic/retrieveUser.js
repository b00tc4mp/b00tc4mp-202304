function retrieveUser(userId, callback) {
    if (typeof userId !== 'string') throw new Error('userId is not a string')
    if (typeof callback !== 'function') throw new Error('callback is not a function')

    const xhr = new XMLHttpRequest

    // res

    xhr.onload = () => {
        if (xhr.status === 400) {
            const body = JSON.parse(xhr.responseText)

            callback(new Error(body.error))

            return
        }

        if (xhr.status === 200) {
            const body = JSON.parse(xhr.responseText)

            const user = body

            callback(null, user)

            return
        }
    }

    xhr.onerror = () => callback(new Error('connection failed'))

    // req

    xhr.open('GET', 'http://localhost:8080/users')

    xhr.setRequestHeader('Authorization', `Bearer ${userId}`)

    xhr.send()
}