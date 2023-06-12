function CreatePostModal(props) {
    const handleCancel = event => {
        event.preventDefault()

        props.onCancel()
    }

    const handleSubmit = event => {
        event.preventDefault()

        const picture = event.target.picture.value
        const text = event.target.text.value

        const result = createPost(context.email, picture, text)

        if (!result) {
            alert('cannot create post')
        } else {
            props.onCreated()
        }
    }

    return <div className="modal create-post-modal">
        <form className="post-form" onSubmit={handleSubmit}>
            <label htmlFor="picture">Picture</label>
            <input type="url" name="picture" id="picture"></input>

            <label htmlFor="text">Text</label>
            <textarea name="text"></textarea>

            <button type="submit">Create</button>
            <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        </form>
    </div>
}