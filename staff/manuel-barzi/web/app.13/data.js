const users = []
const posts = []

// populate the database

users.push({
    name: 'Peter Pan',
    email: 'peter@pan.com',
    password: '123123123',
    favs: ['post-2']
})

users.push({
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    password: '123123123',
    favs: ['post-1']
})

users.push({
    name: 'James Hook',
    email: 'james@hook.com',
    password: '123123123',
    favs: ['post-1', 'post-2']
})

posts.push({
    id: 'post-1',
    user: users[0].email,
    text: 'hello world',
    picture: 'https://b00tc4mp.com/discord.png',
    date: new Date,
    likes: ['peter@pan.com', 'wendy@darling.com'],
    visibility: 'public',
    onsale: true,
    price: 10
})

posts.push({
    id: 'post-2',
    user: users[1].email,
    text: 'hallo welt',
    picture: 'https://www.hallo-welt.io/wp-content/uploads/2021/05/HalloWelt-LOGO-1transparent-1.png',
    date: new Date,
    likes: ['james@hook.com'],
    visibility: 'public',
    onsale: false,
    price: 0
})

posts.push({
    id: 'post-3',
    user: users[2].email,
    text: 'hallo ant',
    picture: 'https://upload.wikimedia.org/wikipedia/en/0/07/Atom_Ant.png',
    date: new Date,
    likes: [],
    visibility: 'public',
    onsale: false,
    price: 0
})

posts.push({
    id: 'post-4',
    user: users[0].email,
    text: 'hello heidi',
    picture: 'https://m.media-amazon.com/images/M/MV5BZjk5MDBjMWItODQ4NC00YTgyLWJjYzEtMDZjZWNjODU1NTRjXkEyXkFqcGdeQXVyNjY1NDcwNTI@._V1_FMjpg_UX1000_.jpg',
    date: new Date,
    likes: ['peter@pan.com', 'wendy@darling.com'],
    visibility: 'public',
    onsale: true,
    price: 5
})