# REACT

react is a front end framework.

## components

components are building blocks in react js.

your applications should be divided nto components in react js.

importing our different components into one main component?:

`import name_of_your_component from "path_to_the_component`

an example of how a component structure looks like:

### class components

```text
import React, {component } from 'react'
class App extends component {
    constructor (){
        super()
    }
    {write your javascript functions here}
    render () {
        return (
            <div className = "App">
                Hello world!
            </div>
        )
    }
}

export default App;
```

N/B - react class names should always be declared by capitalizing the first letter.

in react to write comments you put them in curly brace and use this: `/* */`

the `render()` returns a jsx(an HTML look like)

One thing you should know about JSX is that you can’t use some JavaScript protected words as html attributes anymore.

All attributes in JSX are written in camelCase

when using react render() method you need to wrap everything in one parent element.

if you export components as default you won't need curly braces to import them.

### function components

```javascript
import react from 'react'
function App(){
    return( 
        <div className = 'classApp'>
            Hello world!
        </div>
    )
}
// using arrow-function syntax
const App = () => {
    return <div className = "App">Hello world!</div>
}
export default App
```

when you are using functional components:

1. you don't need to import the component class
2. you also don't need to extend the component class
3. we don't need a constructor
4. we don't need the render function, we put the return statement right at the end of our block of statements.

## Index.js

this is the entry point of your application by default.

```javascript
const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        < App/>
    </React.StrictMode>
)
```

this renders our application in the root div.

## App.js

this is where all your components are assembled.
