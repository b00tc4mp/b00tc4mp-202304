function authenticateUser(email, password, callback) {
    if (typeof email !== 'string') throw new Error('email is not a string')
    if (typeof password !== 'string') throw new Error('password is not a string')
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
            const json = xhr.responseText

            const body = JSON.parse(json)

            const token = body

            callback(null, token)

            return
        }
    }

    xhr.onerror = () => callback(new Error('connection failed'))

    // req

    xhr.open('POST', 'http://localhost:8080/users/auth')

    xhr.setRequestHeader('Content-Type', 'application/json')

    const body = { email, password }

    const json = JSON.stringify(body)

    xhr.send(json)
}

export default authenticateUser