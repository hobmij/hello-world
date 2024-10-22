import React, { Component } from 'react'

class Welcome extends Component {
    render(){
        return <h1>Welcome {this.props.name} whos role is {this.props.role} </h1>
    }
}

export default Welcome