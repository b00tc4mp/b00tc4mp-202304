const users = []
const posts = []

// populate the database

users.push({
    name: 'Peter Pan',
    email: 'peter@pan.com',
    password: '123123123'
})

users.push({
    name: 'Wendy Darling',
    email: 'wendy@darling.com',
    password: '123123123'
})

posts.push({
    id: 'post-1',
    user: users[0].email,
    text: 'hello world',
    picture: 'https://b00tc4mp.com/discord.png',
    date: new Date,
    likes: ['peter@pan.com', 'wendy@darling.com']
})

posts.push({
    id: 'post-2',
    user: users[1].email,
    text: 'hallo welt',
    picture: 'https://www.hallo-welt.io/wp-content/uploads/2021/05/HalloWelt-LOGO-1transparent-1.png',
    date: new Date,
    likes: []
})