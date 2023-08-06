function extractUserIdFromToken() {
    const parts = sessionStorage.token.split('.')

    const b64Payload = parts[1]

    const jsonPayload = atob(b64Payload)

    const payload = JSON.parse(jsonPayload)

    const { sub: userId } = payload

    return userId
}

// more helpers here...

export {
    extractUserIdFromToken
}