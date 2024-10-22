import React from 'react'


const Hello = () => {
    // This is JSX, looks like HTML
/*     return(
        <div>
            <h1> Hello from Hello.js</h1>
        </div>
    )
 */    
    // Here is what things look like without JSX
    return React.createElement(
        'div',
        {id: 'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Sun')
    )
}

export default Hello