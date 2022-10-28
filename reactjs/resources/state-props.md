# STATES AND PROPS

## PROPS

```javascript
import React, {component } from 'react'

class NavComponent extends component {
    constructor (props)
    {
        super(props)
    }
    render(){
        return (
            <div>
                <h1>{this.props.title}</h1>
                <button button onClick={this.props.onButtonClicked}>click me</button>
            </div>
        )
    }
}
export default NavComponent
```

now to pass the title parameter in the main app:

```javascript
import React { component} from 'react'
import NavComponent from "./NavComponent"

class App extends component {
    constructor (props){
        super(props)
        this.onClickBtn = this.onClickBtn.bind(this)
    }
    onClickBtn(){
        console.log('this button has been clicked')
    }
    render(){
        <div>
            < NavComponent title = "Multiverse" onButtonClicked = {this.onClickBtn}/>
        </div>
    }
}
export default App
```

ensure you pass the properties `props` to both the `constructor()` and the `super()`

## STATES

this is what we use to handle values that can change over  time.

```javascript
import React {Component} from 'react'

class CounterComponent extends Component
{
    constructor(){
        super()
    this.state = {
        count:0
    }
    this.countUp = this.countUp.bind(this);
    }
}
```
