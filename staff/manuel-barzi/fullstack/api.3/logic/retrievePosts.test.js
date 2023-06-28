const retrievePosts = require('./retrievePosts')

try {
    retrievePosts(1, (error, posts) => {
        if (error) {
            console.error(error)

            return
        }

        console.log(posts)
    })
} catch (error) {
    console.error(error)
}