import React, { Component, useState } from 'react';
// //class component
// class State extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             count: 0
//         };
//     }

//     render() {
//         return <h1>Count: {this.state.count}</h1>;
//     }
// }

//function component
function State() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default State;