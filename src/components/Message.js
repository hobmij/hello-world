import React, { Component } from 'react'

class Message extends Component {
    /* Demonstrates State:
       1: Data that is privatly maintained in an object
       2: Can be modified within the Component
       3: Can influence what is on the screen
       */

    constructor(){
        super()
        this.state = {
            message: 'Welcome visitor'
        }
    }

    changeMessage(){
        this.setState({
            message: 'Thank you for subscribing'
        })

    }
    render(){
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default Message