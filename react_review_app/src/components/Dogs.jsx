import React, { Component } from 'react';

class Dogs extends Component {
    render() {
        let dogBreeds = ["poodle", "yorkie", "beagle"];
        return (
            <div>
                <h1>Dogs</h1>
                {
                    dogBreeds.map((dog,index)=>{return<p key={index}>{dog}</p>})
                    // The "key" attribute in the p tag avoids a potential error about having unique tags for the different values in the newly created array from Map
                }
            </div>
        )
    };
};

export default Dogs;