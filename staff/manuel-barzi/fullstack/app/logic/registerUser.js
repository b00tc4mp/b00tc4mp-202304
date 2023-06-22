function registerUser(name, email, password, callback) {
    if (typeof name !== 'string') throw new Error('name is not a string')
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

        if (xhr.status === 201) {
            callback(null)

            return
        }
    }

    xhr.onerror = () => callback(new Error('connection failed'))

    // req

    xhr.open('POST', 'http://localhost:8080/users')

    xhr.setRequestHeader('Content-Type', 'application/json')

    const json = JSON.stringify({ name, email, password })

    xhr.send(json)
}