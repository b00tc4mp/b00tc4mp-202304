//TODO wdh
const context = {
    set userId(userId) {
        if (userId) {
            sessionStorage.userId = userId

            return
        }

        delete sessionStorage.userId
    },

    get userId() {
        if (sessionStorage.userId)
            return sessionStorage.userId

        return null
    }
}

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render(<App />)