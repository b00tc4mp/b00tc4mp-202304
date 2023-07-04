function Home(props) {
    console.log('Home -> render')

    const viewState = React.useState('all')
    const view = viewState[0]
    const setView = viewState[1]

    const allState = React.useState([])
    const all = allState[0]
    const setAll = allState[1]

    const mineState = React.useState([])
    const mine = mineState[0]
    const setMine = mineState[1]

    const favsState = React.useState([])
    const favs = favsState[0]
    const setFavs = favsState[1]

    const modalState = React.useState(null)
    const modal = modalState[0]
    const setModal = modalState[1]

    const postIdState = React.useState(null)
    const postId = postIdState[0]
    const setPostId = postIdState[1]

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

    const userState = React.useState(null)
    const user = userState[0]
    const setUser = userState[1]

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

    const handleCancelEditPost = () => setModal(null)

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
            })
        } catch (error) {
            alert(error.message)
        }
    }

    return <div className="home-page">
        <header className="home-header">
            <h1 className="home-title"><a href="" onClick={handlePosts}>Hello, {user ? user.name : 'World'}!</a></h1>
            <a className="favs-link" href="" onClick={handleFavPosts}>Favs</a>
            <a className="mine-link" href="" onClick={handleMinePosts}>Mine</a>
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
                        <button>🗑️</button>
                    </>}
                </article>
            })}
        </main>}

        {view === 'favs' && <main className="fav-posts">
            {favs.map(post => {
                const user = retrieveUser(post.user)

                return <article key={post.id} className="post">
                    <h2>{user.name}</h2>
                    <img src={post.image} className="post-image" />
                    <p>{post.text}</p>
                    <time>{post.date.toString()}</time>
                </article>
            })}
        </main>}

        {view === 'mine' && <main className="mine-posts">
            {mine.map(post => {
                const user = retrieveUser(post.user)

                return <article key={post.id} className="post">
                    <h2>{user.name}</h2>
                    <img src={post.image} className="post-image" />
                    <p>{post.text}</p>
                    <time>{post.date.toString()}</time>
                </article>
            })}
        </main>}

        <footer className="home-footer">
            <button className="create-post-button" onClick={handleOpenCreatePostModal}>+</button>
        </footer>

        {modal === 'create-post' && <CreatePostModal onCancel={handleCancelCreatePost} onCreated={handlePostCreated} />}

        {modal === 'edit-post' && <EditPostModal postId={postId} onCancel={handleCancelEditPost} onEdited={handlePostEdited} />}

        <div className="modal sell-post-modal off">
            <form className="post-form">
                <input type="hidden" name="postId"></input>

                <label htmlFor="price">Price</label>
                <input type="number" name="price" id="price"></input>

                <button type="submit">Sell</button>
                <button className="cancel-button">Cancel</button>
            </form>
        </div>

        <div className="modal buy-post-modal off">
            <form className="post-form">
                <input type="hidden" name="postId"></input>

                <p>You are to buy this post for the price of <span>100</span> $</p>

                <button type="submit">Buy</button>
                <button className="cancel-button">Cancel</button>
            </form>
        </div>
    </div>
}