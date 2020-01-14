import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
                <div>
                    <input placeholder="First Name"></input>
                    <input placeholder="Last Name"></input>
                    <input placeholder="Best Impression"></input>
                    <button>Join Us!</button>
                </div>
        );
    }
}

export default Form;