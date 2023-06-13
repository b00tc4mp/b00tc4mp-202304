# App

## Intro

blah blah ...

![](https://media3.giphy.com/media/PPgZCwZPKrLcw75EG1/giphy.gif?cid=ecf05e4780a082cf15d73aa22ee2180089e31802e5af25cf&ep=v1_gifs_gifId&rid=giphy.gif&ct=g)

## Functional Description

Use Cases

- Create a Post
- List Posts (from all users)
- Modify a Post
- Remove a Post
- Toggle Like Post
- Toggle Fav Post (TODO)
- Toggle Post Visibility (TODO)

## Technical Description

### Data Model

User
- name (string)
- email (string)
- password (string)
- favs (string , refers to Post id) [TODO]

Post
- id (string)
- picture (string)
- text (string)
- user (string, refers to User email)
- likes (string array, refers to User email)
- visibility (string, values 'public' or 'private') [TODO]

## Planning

### Stories

- DONE User registration
- DONE User authentication
- DONE Create a new post
- DONE List the posts
- DONE Update a post
- DONE Toggle Like a post
- TODO Toggle Fav a post
- TODO Toggle Visibility in post

#### User registration (tasks)

- DONE Model the database
- DONE Create a register view
- DONE Create a register logic

#### User authentication (tasks)

- DONE Create a login view
- DONE Create an authentication logic

#### Create a post (tasks)

- DONE Model the database (text, picture, date)
- DONE Add a button in the home view to open the create post modal window
- DONE Create the post modal window (cancel & submit buttons)
- DONE Mechanize the create post button with the create post modal window
- DONE Mechanize the cancel button that closes the modal window
- DONE Mechanize the submit of the form to create a new post
- DONE Implement the create post logic
- DONE refresh the post list

#### Lists the posts (tasks)

- DONE Implement a logic to retrieve all posts
- DONE Create a list of posts rendered in home

#### Update a post (tasks)

- DONE Add a edit button in each post
- DONE Create the post edit modal window (cancel & submit buttons)
- DONE Mechanize each edit button to show the post edit modal with the current information from the post
- DONE Implement the logic to update the post
- DONE Mechanize the submit of the post edit modal to get the updated information about the posts call the logic to update the post
- DONE refresh the post list

#### Toggle Like a post (tasks)

- DONE create heart-shaped button and put in each post in the list
- DONE implement toggle like post logic (toggleLikePost)
- DONE on click on like button call toggle like post logic
- DONE refresh the post list

#### Toggle Fav a post (tasks)

- 

#### Toggle Visibility in a post (tasks)




