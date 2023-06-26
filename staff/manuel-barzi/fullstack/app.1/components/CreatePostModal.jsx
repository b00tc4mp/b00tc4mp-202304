function CreatePostModal(props) {
    const handleCancel = event => {
        event.preventDefault()

        props.onCancel()
    }

    const handleSubmit = event => {
        event.preventDefault()

        const image = event.target.image.value
        const text = event.target.text.value

        try {
            createPost(context.userId, image, text, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onCreated()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="modal create-post-modal">
        <form className="post-form" onSubmit={handleSubmit}>
            <label htmlFor="image">Image</label>
            <input type="url" name="image" id="image"></input>

            <label htmlFor="text">Text</label>
            <textarea name="text"></textarea>

            <button type="submit">Create</button>
            <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        </form>
    </div>
}