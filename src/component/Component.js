import React, { Component } from 'react';

// class component
class Component extends Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}
// // function component
// function Component(props) {
//     return <h1>Hello, {props.name}!</h1>;
// }