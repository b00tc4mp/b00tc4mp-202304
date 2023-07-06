function EditPostModal(props) {
    console.log('EditPostModal -> render')

    // const imageState = React.useState(null)
    // const image = imageState[0]
    // const setImage = imageState[1]
    const [image, setImage] = React.useState(null)
    const [text, setText] = React.useState(null)

    React.useEffect(() => {
        try {
            retrievePost(context.userId, props.postId, (error, post) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setImage(post.image)
                setText(post.text)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])


    const handleCancel = event => {
        event.preventDefault()

        props.onCancel()
    }

    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value

        try {
            modifyPost(context.userId, props.postId, image, text, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onEdited()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="modal modify-post-modal">
        <form className="post-form" onSubmit={handleSubmit}>
            <label htmlFor="image">Picture</label>
            <input type="url" name="image" id="image" defaultValue={image}></input>

            <label htmlFor="text">Text</label>
            <textarea name="text" defaultValue={text}></textarea>

            <button type="submit">Modify</button>
            <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        </form>
    </div>
}