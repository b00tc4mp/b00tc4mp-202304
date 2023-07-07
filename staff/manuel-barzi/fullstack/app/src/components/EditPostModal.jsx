import { useState, useEffect } from 'react'
import retrievePost from '../logic/retrievePost'
import modifyPost from '../logic/modifyPost'
import context from '../context'

function EditPostModal(props) {
    console.log('EditPostModal -> render')

    const [image, setImage] = useState(null)
    const [text, setText] = useState(null)

    useEffect(() => {
        try {
            retrievePost(context.token, props.postId, (error, post) => {
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
            modifyPost(context.token, props.postId, image, text, error => {
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

export default EditPostModal