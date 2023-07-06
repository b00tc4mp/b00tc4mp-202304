function Home(props) {
    console.log('Home -> render')

    const [view, setView] = React.useState('all')
    const [user, setUser] = React.useState(null)
    const [all, setAll] = React.useState([])
    const [modal, setModal] = React.useState(null)
    const [postId, setPostId] = React.useState(null)

    React.useEffect(() => {
        try {
            retrievePosts(context.userId, (error, posts) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setAll(posts)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    React.useEffect(() => {
        try {
            retrieveUser(context.userId, (error, user) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setUser(user)
            })
        } catch (error) {
            alert(error.message)
        }
    }, [])

    const handleLogout = () => {
        context.userId = null

        props.onLoggedOut()
    }

    const handleMinePosts = event => {
        event.preventDefault()

        const mine = retrieveMinePosts(context.email)
        setMine(mine)
        setView('mine')
    }

    const handleFavPosts = event => {
        event.preventDefault()

        const favs = retrieveFavPosts(context.email)
        setFavs(favs)
        setView('favs')
    }

    const handlePosts = event => {
        event.preventDefault()

        const all = retrievePosts(context.email)
        setAll(all)
        setView('all')
    }

    const handleOpenCreatePostModal = () => setModal('create-post')

    const handleCancelCreatePost = () => setModal(null)

    const handlePostCreated = () => {
        try {
            retrievePosts(context.userId, (error, posts) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setAll(posts)
                setView('all')
                setModal(null)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleOpenEditPostModal = postId => {
        setModal('edit-post')
        setPostId(postId)
    }

    const handleCancelEditPost = () => {
        setModal(null)
        setPostId(null)
    }

    const handlePostEdited = () => {
        try {
            retrievePosts(context.userId, (error, posts) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setAll(posts)
                setView('all')
                setModal(null)
                setPostId(null)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    const handleOpenDeletePostModal = postId => {
        setModal('delete-post')
        setPostId(postId)
    }

    const handleCancelDeletePost = () => {
        setModal(null)
        setPostId(null)
    }

    const handlePostDeleted = () => {
        try {
            retrievePosts(context.userId, (error, posts) => {
                if (error) {
                    alert(error.message)

                    return
                }

                setAll(posts)
                setView('all')
                setModal(null)
                setPostId(null)
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="home-page">
        <header className="home-header">
            <h1 className="home-title"><a href="" onClick={handlePosts}>Hello, {user ? user.name : 'World'}!</a></h1>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </header>

        {view === 'all' && <main className="posts">
            {all.map(post => {
                return <article key={post.id} className="post">
                    <h2>{post.author.name}</h2>
                    <img src={post.image} className="post-image" />
                    <p>{post.text}</p>
                    <time>{post.date.toString()}</time>
                    {context.userId === post.author.id && <>
                        <button onClick={() => handleOpenEditPostModal(post.id)}>📝</button>
                        <button onClick={() => handleOpenDeletePostModal(post.id)}>🗑️</button>
                    </>}
                </article>
            })}
        </main>}

        <footer className="home-footer">
            <button className="create-post-button" onClick={handleOpenCreatePostModal}>+</button>
        </footer>

        {modal === 'create-post' && <CreatePostModal onCancel={handleCancelCreatePost} onCreated={handlePostCreated} />}

        {modal === 'edit-post' && <EditPostModal postId={postId} onCancel={handleCancelEditPost} onEdited={handlePostEdited} />}

        {modal === 'delete-post' && <DeletePostModal postId={postId} onCancel={handleCancelDeletePost} onDeleted={handlePostDeleted} />}
    </div>
}