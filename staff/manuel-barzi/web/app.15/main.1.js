const context = {}

const title = React.createElement('h1', null, 'hello world')

const color1 = React.createElement('li', null, 'Red')
const color2 = React.createElement('li', null, 'Green')
const color3 = React.createElement('li', null, 'Blue')

const colors = React.createElement('ul', null, [color1, color2, color3])

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render([title, colors])