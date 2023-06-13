function Home(props) {
    //TODO wdh
    const viewState = React.useState('all')
    const view = viewState[0]
    const setView = viewState[1]
    //TODO wdh

    const mineState = React.useState([])
    const mine = mineState[0]
    const setMine = mineState[1]

    const favsState = React.useState([])
    const favs = favsState[0]
    const setFavs = favsState[1]

    const modalState = React.useState(null)
    const modal = modalState[0]
    const setModal = modalState[1]

    const allState = React.useState([])
    const all = allState[0]
    const setAll = allState[1]

    React.useEffect(() => {
        const all = retrievePosts(context.email)
        setAll(all)
        //TODO wdh
    }, [])

    const user = retrieveUser(context.email)

    const handleLogout = () => {
        delete context.email

        props.onLoggedOut()
    }
    //TODO wann event und wann klammern?
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
        setFavs(all)
        setView('all')
    }

    const handleOpenCreatePostModal = () => setModal('create-post')

    const handleCancelCreatePost = () => setModal(null)

    const handlePostCreated = () => {
        const all = retrievePosts(context.email)
        //TODO wdh
        setAll(all)
        setView('all')
        setModal(null)
    }

    console.log('Home -> render')

    return <div className="welcome">
        <header className ="welcome-header">
            <h1 className="headline"><a href="" onClick={handlePosts}>Welcome, {user.name}!</a></h1>
            <a href="" className="mine-link" onClick={handleMinePosts}>🫵</a>
            <a href="" className="star" onClick={handleFavPosts}>⭐️</a>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </header>

        {view === 'all' && <main className="posts">
            {all.map(post => {
                const user = retrieveUser(post.user)

                return <article key={post.id} className="post">
                    <h2>{user.name}</h2>
                    <img src={post.picture} className="post-image" />
                    <p>{post.text}</p>
                    <time>{post.date.toString()}</time>
                </article>
            })}
        </main>}

        {view === 'favs' && <main className="fav-posts">
            {favs.map(post => {
                const user = retrieveUser(post.user)

                return <article key={post.id} className="post">
                    <h2>{user.name}</h2>
                    <img src={post.picture} className="post-image" />
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
                    <img src={post.picture} className="post-image" />
                    <p>{post.text}</p>
                    <time>{post.date.toString()}</time>
                </article>
            })}
        </main>}

        <footer className="welcome-footer">
            <button className="create-button" onClick={handleOpenCreatePostModal}>+</button>
        </footer>

        {modal === 'create-post' && <CreatePostModal onCancel={handleCancelCreatePost} onCreated={handlePostCreated} />}

        <div className="modal modal-modify off">
            <form className="post-form">
              <input type="hidden" name="postId" />
              
              <label htmlFor="picture">Picture</label>
              <input type="url" name="picture" id="picture"></input>

              <label htmlFor="text">Text</label>
              <textarea name="text"></textarea>

              <button type="submit">Modify</button>
              <button className="cancel">Cancel</button>
            </form>
        </div>

        <div className="modal modal-sell off">
            <form className="post-form">
              <input type="hidden" name="postId" />

              <label htmlFor="price">Price</label>
              <input type="number" name="price" id ="price"></input>

              <button type="submit">Sell</button>
              <button className="cancel">Cancel</button>
            </form>
        </div>

        <div className="modal modal-buy off">
            <form className="post-form">
              <input type="hidden" name="postId" />
              
              <p>Buy this Post htmlFor <span></span>€?</p>

              <button type="submit">Buy</button>
              <button className="cancel">Cancel</button>
            </form>
        </div>
    </div>
}