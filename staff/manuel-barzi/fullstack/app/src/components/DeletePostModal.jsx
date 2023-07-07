import removePost from '../logic/removePost'
import context from '../context'

function DeletePostModal(props) {
    console.log('DeletePostModal -> render')


    const handleCancel = event => {
        event.preventDefault()

        props.onCancel()
    }

    const handleSubmit = event => {
        event.preventDefault()

        try {
            removePost(context.token, props.postId, error => {
                if (error) {
                    alert(error.message)

                    return
                }

                props.onDeleted()
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="modal delete-post-modal">
        <form className="post-form" onSubmit={handleSubmit}>
            <p>Delete the post?</p>
            <button type="submit">Delete</button>
            <button className="cancel-button" onClick={handleCancel}>Cancel</button>
        </form>
    </div>
}

export default DeletePostModal