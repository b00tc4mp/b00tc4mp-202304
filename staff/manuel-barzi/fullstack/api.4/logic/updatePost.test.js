const updatePost = require('./updatePost')

try {
    updatePost(1, 3, 'new image', 'new text', error => {
        if (error) {
            console.error(error)

            return
        }

        console.log('post udpated')
    })
} catch (error) {
    console.error(error)
}