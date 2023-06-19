const registerUser = require('./registerUser')

registerUser('Po Tato', 'po@tato.com', '123123123', error => {
    if (error) {
        console.error(error)

        return
    }

    console.log('user registered')
})