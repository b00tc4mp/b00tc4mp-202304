function Home(props) {
    const viewState = React.useState('posts')
    const view = viewState[0]
    const setView = viewState[1]

    const mineState = React.useState([])
    const mine = mineState[0]
    const setMine = mineState[1]

    const favsState = React.useState([])
    const favs = favsState[0]
    const setFavs = favsState[1]

    const user = retrieveUser(context.email)
    const posts = retrievePosts(context.email)

    const handleLogout = () => {
        delete context.email

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

    console.log('Home -> render')

    return <div className="home-page">
        <header className="home-header">
            <h1 className="home-title">Hello, {user.name}!</h1>
            <a className="favs-link" href="" onClick={handleFavPosts}>Favs</a>
            <a className="mine-link" href="" onClick={handleMinePosts}>Mine</a>
            <button className="logout-button" onClick={handleLogout}>Logout</button>
        </header>

        {view === 'posts' && <main className="posts">
            {posts.map(post => {
                const user = retrieveUser(post.user)

                return <article class="post">
                    <h2>{user.name}</h2>
                    <img src={post.picture} class="post-image" />
                    <p>{post.text}</p>
                    <time>{post.date.toString()}</time>
                </article>
            })}
        </main>}

        {view === 'favs' && <main className="fav-posts">
            {favs.map(post => {
                const user = retrieveUser(post.user)

                return <article class="post">
                    <h2>{user.name}</h2>
                    <img src={post.picture} class="post-image" />
                    <p>{post.text}</p>
                    <time>{post.date.toString()}</time>
                </article>
            })}
        </main>}

        {view === 'mine' && <main className="mine-posts">
            {mine.map(post => {
                const user = retrieveUser(post.user)

                return <article class="post">
                    <h2>{user.name}</h2>
                    <img src={post.picture} class="post-image" />
                    <p>{post.text}</p>
                    <time>{post.date.toString()}</time>
                </article>
            })}
        </main>}

        <footer className="home-footer">
            <button className="create-post-button">+</button>
        </footer>

        <div className="modal create-post-modal off">
            <form className="post-form">
                <label for="picture">Picture</label>
                <input type="url" name="picture" id="picture"></input>

                <label for="text">Text</label>
                <textarea name="text"></textarea>

                <button type="submit">Create</button>
                <button className="cancel-button">Cancel</button>
            </form>
        </div>

        <div className="modal modify-post-modal off">
            <form className="post-form">
                <input type="hidden" name="postId"></input>

                <label for="picture">Picture</label>
                <input type="url" name="picture" id="picture"></input>

                <label for="text">Text</label>
                <textarea name="text"></textarea>

                <button type="submit">Modify</button>
                <button className="cancel-button">Cancel</button>
            </form>
        </div>

        <div className="modal sell-post-modal off">
            <form className="post-form">
                <input type="hidden" name="postId"></input>

                <label for="price">Price</label>
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