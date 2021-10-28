import React, { Component } from 'react';
import Context from './MyContext';
import axios from 'axios';

class Provider extends Component {
    state = {
        currentDimension: '',
        currentMeasure: [],
    };
    render() {
        return (
            <Context.Provider
                value={{
                    currentMeasure: this.state.currentMeasure,
                    currentDimension: this.state.currentDimension,
                    
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Provider;