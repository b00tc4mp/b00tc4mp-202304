function CreatePostModal(props) {
    const handleCancel = event => {
        event.preventDefault()

        props.onCancel()
    }

    const handleSubmit = event => {
        event.preventDefault()

        const picture = event.target.picture.value
        const text = event.target.text.value
    
        const created = createPost(context.email, picture, text)
    
        if (created)
            props.onCreated()
        else
            alert('🙅‍♂️🙅‍♂️🙅‍♂️')
    }

    return <div className="modal modal-post">
        <form className="post-form" onSubmit={handleSubmit}>
            <label htmlFor="picture">Picture</label>
            <input type="url" name="picture" id="picture"></input>

            <label htmlFor="text">Text</label>
            <textarea name="text"></textarea>

            <button type="submit">Share</button>
            <button className="cancel" onClick={handleCancel}>Cancel</button>
        </form>
    </div>
}