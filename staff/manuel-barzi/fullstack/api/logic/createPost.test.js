const createPost = require('./createPost')

try {
    createPost(1, 'https://nice.image.com', 'hello image', error => {
        if (error) {
            console.error(error)

            return
        }

        console.log('post created')
    })
} catch (error) {
    console.error(error)
}