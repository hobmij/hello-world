import React, { Component } from 'react'

class Counter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment(){
        // rules for using setState
        // 1. Always use setState instead of modifying the state directly
        // 2. For code that must execute after a state change place that code
        //    in the callback function which is the 2nd paraments to setState method.
        // 3. When updating state from a previous state value, pass in a function as an
        //    argument instead of the regular object.
        this.setState(prevState => ({
            count: prevState.count + 1
        }))
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()      
    }
    

  render() {
    return (
      <div>
        <div>Count = {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    )
  }
}

export default Counter
