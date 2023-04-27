var users = []
var posts = []

// populate the database

var name = 'Peter Pan'
var email = 'peter@pan.com'
var password = '123123123'

var user = {}

user.name = name
user.email = email
user.password = password

users.push(user)

var name = 'Wendy Darling'
var email = 'wendy@darling.com'
var password = '123123123'

var user = {}

user.name = name
user.email = email
user.password = password

users.push(user)

var post = {}

post.user = users[0].email
post.text = 'hello world'
post.picture = 'https://b00tc4mp.com/discord.png'
post.date = new Date

posts.push(post)

var post = {}

post.user = users[1].email
post.text = 'hallo welt'
post.picture = 'https://www.hallo-welt.io/wp-content/uploads/2021/05/HalloWelt-LOGO-1transparent-1.png'
post.date = new Date

posts.push(post)