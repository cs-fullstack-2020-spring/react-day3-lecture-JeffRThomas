import React, { Component } from 'react';
import Dogs from './Dogs'

class Pets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            favDog: 'my dog',
            leastfavDog: 'chihuahua',
        };
    };

    componentDidMount() {
        console.log("The component Pets did mount.");
        this.setState({ favDog: "your dog" });
        this.setState({ leastfavDog: "Golden Retriever" })
    }

    render() {
        return (
            <div>
                <p>List of Pets</p>
                <Dogs />
                <h3>My favorite dog is {this.state.favDog}</h3>
                <h3>His color is {this.props.color}</h3>
                <h3>My least favorite dog is a {this.state.leastfavDog}</h3>
            </div>
        )
    };
};

export default Pets;