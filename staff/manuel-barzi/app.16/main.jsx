const context = {}

const title = <h1>Hello, world!</h1>

const colors = <ul>
    <li>Red</li>
    <li>Green</li>
    <li>Blue</li>
</ul>

const root = ReactDOM.createRoot(document.querySelector('#root'))
root.render([title, colors])