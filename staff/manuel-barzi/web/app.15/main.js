const context = {}

const _jsx = React.createElement

const title = _jsx('h1', null, 'hello world')

const color1 = _jsx('li', null, 'Red')
const color2 = _jsx('li', null, 'Green')
const color3 = _jsx('li', null, 'Blue')

const colors = _jsx('ul', null, [color1, color2, color3])

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render([title, colors])