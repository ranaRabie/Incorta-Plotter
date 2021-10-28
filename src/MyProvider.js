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

                    getItems: (type, name) => {
                        if(type === 'dimension'){
                            if(this.state.currentDimension !== ''){
                                alert('clear Dimension first');
                            }else{
                                if(name !== this.state.currentDimension){
                                    this.setState({ currentDimension: name});
                                } 
                            }
                        }else if(type === 'measure'){
                            if(this.state.currentMeasure.includes(name)){
                                alert('exist before');
                            }else{
                                this.state.currentMeasure.push(name);
                            }
                        }

                    },
                    
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Provider;