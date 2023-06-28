const registerUser = require('./registerUser')

try {
    registerUser('Po Tato', 'po@tato2.com', '123123123', error => {
        if (error) {
            console.error(error)

            return
        }

        console.log('user registered')
    })
} catch (error) {
    console.error(error)
}