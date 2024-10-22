import React from 'react'

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>
                Hello {props.name} the {props.role}
            </h1>
            {props.children}
        </div>
    )
}

// The above 'arror' function replaces the syntax below:

// function Greet(){
//     return <h1>Hello James Bohmbach</h1>
// }

export default Greet